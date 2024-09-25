import { redis } from '../db/redis';

import {
    getW3Provider,
    getContract,
    getOldContract
} from '../utils/chainUtils';
import { getEpochSeconds } from '../utils/timeUtils';
import { events } from '../utils/eventsToFilter';

import { 
    processEvents
 } from './processEvents';

let FORWARD_BLOCK_INTERVAL = 5000;

export async function indexForward() {
    // Only one invocation should be running
    let isIndexing = await redis.getKey('IS_INDEXING_FORWARD');
    if (isIndexing === 'true') {
        console.debug('Already in progress, skipping interval call');
        return;
    }

    // Release lock in about 5 minutes, incase of restart while locked
    let forwardTimeout = 300;
    console.info(`Setting timeout ${forwardTimeout}`);
    await redis.setKey('IS_INDEXING_FORWARD', 'true')
    await redis.setKey('EX', String(forwardTimeout));

    try {
        let w3Provider = getW3Provider();
        console.debug('Start indexing forward');

        // Get block intervals to get events between
        let networkLatestBlock = await w3Provider.getBlockNumber();
        let indexedLatestBlock = Number(await redis.getKey('LATEST_BLOCK_INDEXED'))
        indexedLatestBlock = indexedLatestBlock
            ? parseInt(String(indexedLatestBlock))
            : networkLatestBlock;

        // Indexing is complete, return
        if (indexedLatestBlock === networkLatestBlock) {
            console.debug(
                `Forward indexing is up to date with latest network block ${indexedLatestBlock}`
            );
            await redis.setKey('IS_INDEXING_FORWARD', 'false');
            return;
        }

        // We forward upto `BLOCK_INTERVAL` blocks ahead to account for service downtime and restart
        let maxBlockToIndexUntil = Math.min(
            networkLatestBlock,
            indexedLatestBlock + FORWARD_BLOCK_INTERVAL
        );

        console.debug(`Network latest block: ${networkLatestBlock}`);
        console.debug(`Indexed latest block: ${indexedLatestBlock}`);
        console.debug(`Indexing until block: ${maxBlockToIndexUntil}`);

        // Initialize Contract
        let contract
        if(indexedLatestBlock < 966916)
            contract = getOldContract(w3Provider);
        else
            contract = getContract(w3Provider)

        // Get events between these blocks
        for(let event of events) {
            let filteredEvents = await contract.queryFilter(
                event,
                indexedLatestBlock,
                maxBlockToIndexUntil
            );
    
            // Process received events
            let startTime = getEpochSeconds();
            await processEvents(event, filteredEvents)
            let endTime = getEpochSeconds();
            console.debug(`Processing took ${endTime - startTime} seconds`);
        }

        // Update the latest block processed for chain
        await redis.setKey('LATEST_BLOCK_INDEXED', String(maxBlockToIndexUntil));
        await redis.setKey('IS_INDEXING_FORWARD', 'false');
    } catch (err) {
        console.error(err);
        await redis.setKey('IS_INDEXING_FORWARD', 'false');
    }
}
