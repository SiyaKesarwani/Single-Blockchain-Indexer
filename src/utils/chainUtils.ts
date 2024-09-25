import { ethers } from 'ethers';
import { oldContractAbi, contractAbi } from './abi';
import { config } from '../providers/aws/secret-manager';
import { Config } from '../interfaces/config';
import { START_BLOCK } from './constants';

export function getW3Provider() {
    const provider = new ethers.JsonRpcProvider(config.get(Config.RPC_NODE_URL));
    return provider;
}

export function getStartBlock() {
    const startBlock: string = START_BLOCK
    return startBlock;
}

export function getContract(provider: any) {
    const address = config.get(Config.RECORDS_CONTRACT_ADDRESS)
    const contract: any = new ethers.BaseContract(
        address,
        contractAbi,
        provider
    );
    return contract;
}

export function getOldContract(provider: any) {
    const address = config.get(Config.RECORDS_CONTRACT_ADDRESS)
    const contract: any = new ethers.BaseContract(
        address,
        oldContractAbi,
        provider
    );
    return contract;
}
