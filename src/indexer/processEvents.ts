import { getW3Provider } from '../utils/chainUtils';
import { Transaction } from '../db/transaction';
import { ethers } from 'ethers'
import { oldContractAbi } from '../utils/abi';

export async function processEvents(eventName: String, events: any){
    const provider = getW3Provider();
    console.debug(`Proceeding to process ${events.length} retrieved events of ${eventName}`);

    if(eventName == "TransactionUpdated") {
        let eventCnt = 0

        for (let event of events) {
            const txnHash = event.transactionHash;
            let eventLogArgs = event.args;

            let transactionId = eventLogArgs?.transactionId
            let argNumber = 1

            if(transactionId == undefined) {
                argNumber = 0
                const txn = await provider.getTransaction(txnHash);
                let txnData = txn?.data
                let iface = new ethers.Interface(oldContractAbi);
    
                let decodedData = iface.parseTransaction({ data: txnData!});
                transactionId = decodedData?.args[argNumber]
            }
            
            let amount = eventLogArgs[argNumber].amount
            let assetId = eventLogArgs[argNumber].assetId
            let buyerId = eventLogArgs[argNumber].buyerId
            let createdAt = eventLogArgs[argNumber].createdAt
            let buyerAgreementId = eventLogArgs[argNumber].buyerAgreementId
            let agentId = eventLogArgs[argNumber].agentId
            let shareCount = eventLogArgs[argNumber].shareCount
            let sellerIds = eventLogArgs[argNumber].sellerIds
            let sellerAgreementIds = eventLogArgs[argNumber].sellerAgreementIds
            let hashPins = []
            let shareIds = []
            if(eventLogArgs[argNumber].hashPins.length > 0){
                for(let j = 0; j < eventLogArgs[argNumber].hashPins.length; j++){
                    hashPins[j] =   {
                                        hashPin: eventLogArgs[argNumber].hashPins[j].hashPin,
                                        collectionName: eventLogArgs[argNumber].hashPins[j].collectionName,
                                        id: eventLogArgs[argNumber].hashPins[j].id
                                    }
                }
            }
            if(eventLogArgs[argNumber].shareIds[0].shareIds.length > 0){
                shareIds[0] =   {
                                    addedShareIds : eventLogArgs[argNumber].shareIds[0].shareIds,
                                    txnHash: txnHash,
                                    eventName: eventName,
                                }
            }

            await upsertTxnInDb(transactionId, {
                transactionId,
                transactionHash : txnHash,
                amount,
                assetId,
                buyerId,
                createdAt,
                buyerAgreementId,
                agentId,
                shareCount,
                sellerIds,
                sellerAgreementIds,
                hashPins,
                shareIds
            })
            eventCnt += 1
            console.info(`${eventCnt} - with transactionId ${transactionId} txnHash ${txnHash} saved`)
        }
    }

        // Process transaction
        else if (eventName == "ShareIdsUpdated") {
            let eventCnt = 0
            for (let event of events) {
            const txnHash = event.transactionHash;
    
            let eventLogArgs = event.args;
            let transactionId = eventLogArgs.transactionId
            let shareIds : { [key: string]: any } = {};
            if(eventLogArgs[1].shareIds.length > 0){
                shareIds.addedShareIds = eventLogArgs[1].shareIds,
                shareIds.txnHash = txnHash,
                shareIds.eventName = eventName
            }
            await upsertTxnInDb(transactionId, {
                shareIds
            })
            eventCnt += 1
            console.info(`${eventCnt} - with transactionId ${transactionId} updated`)
        }
    }

    console.debug(`Finished processing ${events.length} events`)
}

/**
 * Insert in DB
 *
 * @param { string } transactionId
 * @param { object } args
 * @param { object } logger
 * @return { Promise<Query<any, any, {}, any>|*> }
 */
async function upsertTxnInDb(
    transactionId : string, 
    args : { [key: string]: any }
) {
    removeUndefinedValuesFromArgs(args);

    let filter = {"transactionId": transactionId};
    let existingTxn = await Transaction.findOne(filter);

    // Insert new transaction
    if (existingTxn == null) {
        if(Object.keys(args).length <= 1) {
            console.debug(`Transaction with transactionId ${transactionId} not found; cannot update shareIds`)
        }
        else {
            console.debug(`Transaction with transactionId ${transactionId} not found. Inserting...`)
            return await new Transaction(
                args
            ).save();
        }
    }
    else if (existingTxn) {
        if(args.txnHash == undefined && args.shareIds.addedShareIds && args.shareIds.addedShareIds.length > 0){
            if(existingTxn.shareIds.some(obj => obj.txnHash === args.shareIds.txnHash)){
                console.debug(`Transaction with transactionId ${transactionId} found. But txnHash ${args.shareIds.txnHash} already added...`)
            }
            else {
                console.debug(`Transaction with transactionId ${transactionId} found. Updating info...`)
                await Transaction.findOneAndUpdate(
                    filter, 
                    { $push: { shareIds: args.shareIds } }
                ); 
            }
        }
        else{
            console.debug(`No new shareIds to add in transactionId ${transactionId}...`)
        }
    }
}
/**
 * Removes keys in object with undefined values
 *
 * @param obj
 */
function removeUndefinedValuesFromArgs(obj : { [key: string]: any }) {
    let keysToRemove: Array<string> = []
    for (let key of Object.keys(obj)) {
        if (!obj[key]) {
            keysToRemove.push(key);
        }
    }

    for (let key of keysToRemove) {
        delete obj[key];
    }
}
