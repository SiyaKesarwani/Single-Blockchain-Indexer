import mongoose from 'mongoose';
import { redis } from './db/redis';
import { indexForward } from './indexer/indexForward';
import { config } from './providers/aws/secret-manager';
import { Config } from './interfaces/config';
import { ENV } from './interfaces/enum';

import dotenv from 'dotenv';
dotenv.config();

let indexingInterval = 5000; // ideally 15 seconds

export async function run() {
    let mongoUri: string = '';
    const env = <string>process.env.NODE_ENV;
    if (env == ENV.LOCAL) {
        mongoUri = process.env.MONGO_URI!;
    }
    else {
        mongoUri = <string>config.get(Config.MONGO_URI_INDEXER)
    }
    try {
        await mongoose
            .connect(mongoUri)
            .catch((err) => console.error(err));
        console.log('Connected to MongoDB!');
        console.log('Connected to Redis!');

        // await redis.setKey('LATEST_BLOCK_INDEXED', "308248");
    
        await redis.setKey('IS_INDEXING_FORWARD', 'false');
    
        setInterval(indexForward, indexingInterval);
    } catch (error) {
        console.log(error)
    }
}

