import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    transactionId: String,
    transactionHash: String,
    amount: String,
    assetId: String,
    buyerId: String,
    createdAt: String,
    buyerAgreementId: String,
    agentId: String,
    shareCount: BigInt,
    sellerIds: [String],
    sellerAgreementIds: [String],
    hashPins: [
        {
            hashPin: String,
            collectionName: String,
            id: String,
        },
    ],
    shareIds: [
        {
            addedShareIds: [String],
            txnHash: String,
            eventName: String,
        }
    ], 
});

export const Transaction = mongoose.model(
    'Transactions',
    transactionSchema
);
