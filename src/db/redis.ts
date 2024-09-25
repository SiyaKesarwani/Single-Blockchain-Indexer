import { Redis, RedisOptions } from 'ioredis';
import { config } from '../providers/aws/secret-manager';
import { ENV, RedisClusterType } from '../interfaces/enum';
import { Config } from '../interfaces/config';

class RedisStorage {
    private client: Redis;
    private env: string;
    private clientWrite: Redis;
    private clientRead: Redis;

    constructor() {
        this.env = <string>process.env.NODE_ENV;
        if (!this.clientWrite) {
            this.clientWrite = new Redis(
                this.getConfiguration(RedisClusterType.WRITE)
            );
            this.registerRedisClientEventForWrite();
        }
        if (!this.clientRead) {
            this.clientRead = new Redis(
                this.getConfiguration(RedisClusterType.READ)
            );
            this.registerRedisClientEventForRead();
        }
    }

    private registerRedisClientEventForWrite() {
        this.clientWrite.on('connect', () => {
            console.log('Redis Client Write Connected SuccessFully');
            this.setKey('test', 'Test Connection inside file');
        });
        this.clientWrite.on('ready', () => {
            console.log('Redis Client Write Ready');
        });
        this.clientWrite.on('error', () => {
            console.error('Redis Client Write error occurs while connecting');
        });
        this.clientWrite.on('close', () => {
            console.error('Redis Client Write connection has closed.');
        });
        this.clientWrite.on('end', () => {
            console.log('Redis Client Write connection is failed to establish');
        });
    }

    private registerRedisClientEventForRead() {
        this.clientRead.on('connect', () => {
            console.log('Redis Client Read Connected SuccessFully');
            this.getKey('test');
        });
        this.clientRead.on('ready', () => {
            console.log('Redis Client Read Ready');
        });
        this.clientRead.on('error', () => {
            console.error('Redis Client Read error occurs while connecting');
        });
        this.clientRead.on('close', () => {
            console.error('Redis Client Read connection has closed.');
        });
        this.clientRead.on('end', () => {
            console.log('Redis Client Read connection is failed to establish');
        });
    }

    /**
     * @description Fetch Configuration for Redis
     * @returns {RedisOptions}
     */
    public getConfiguration(clusterType: RedisClusterType): RedisOptions {
        let authConfig = {};
        if (this.env != ENV.LOCAL) {
            authConfig = {
                tls: {
                    checkServerIdentity: () => {
                        return undefined;
                    }
                },
                password: <string>config.get(Config.REDIS_AUTH_TOKEN)
            };
        }
        let creds: RedisOptions;
        if (clusterType == RedisClusterType.READ) {
            creds = {
                host: <string>config.get(Config.REDIS_READ_REPLICA_HOST),
                port: <number>config.get(Config.REDIS_READ_REPLICA_PORT),
                ...authConfig,
                db: <number>config.get(Config.REDIS_DB_INDEXER) || 0,
            };
        } else {
            creds = {
                host: <string>config.get(Config.REDIS_WRITE_REPLICA_HOST),
                port: <number>config.get(Config.REDIS_WRITE_REPLICA_PORT),
                ...authConfig,
                db: <number>config.get(Config.REDIS_DB_INDEXER) || 0,
            };
        }
        if (this.env == ENV.LOCAL) {
            creds.host = <string>process.env.REDIS_HOST;
            creds.port = Number(process.env.REDIS_PORT);
        }
        return creds;
    }

    /**
     * @description Set key in Redis
     * @param key
     * @param value
     * @returns
     */
    async setKey(key: string, value: string) {
        try {
            return await this.clientWrite.set(key, value);
        } catch (error) {
            console.log('Redis storage set', error, false);
            throw error;
        }
    }

    /**
     * @description Set key in redis with Expiry
     * @param key
     * @param value
     * @param seconds
     * @returns
     */
    async setKeyWithExpiry(key: string, value: string, seconds: number) {
        try {
            const data = await this.clientWrite.set(key, value);
            await this.setExpiry(key, seconds);
            return data;
        } catch (error) {
            console.log('Redis storage set', error, false);
            throw error;
        }
    }

    /**
     * @description Get Value from Redis by key
     * @param key
     * @returns
     */
    async getKey(key: string) {
        try {
            return await this.clientWrite.get(key);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Set Expiry for a key in redis
     * @param key
     * @param seconds
     * @returns
     */
    async setExpiry(key: string, seconds: number) {
        try {
            return await this.clientWrite.expire(key, seconds);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Delete key from Redis
     * @param key
     * @returns
     */
    async delKey(key: string) {
        try {
            return await this.clientWrite.del(key);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Set Hash in Redis
     * @param hashName
     * @param key
     * @param value
     * @returns
     */
    async setHash(hashName: string, key: string, value: string) {
        try {
            return await this.clientWrite.hset(hashName, key, value);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Get value from redis hash by field/key name
     * @param hashName
     * @param key
     * @returns
     */
    async getHash(hashName: string, key: string) {
        try {
            return await this.clientWrite.hget(hashName, key);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Update Field/Key value in Redis hash
     * @param hashName
     * @param key
     * @param field
     * @param value
     * @returns
     */
    async updateHash(
        hashName: string,
        key: string,
        field: string,
        value: string,
    ) {
        try {
            return await this.clientWrite.hset(hashName, key, field, value);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Set Hash in Redis with Expiry for a certain Field
     * @param hashName
     * @param key
     * @param value
     * @param seconds
     * @returns
     */
    async setHashWithExpiry(
        hashName: string,
        key: string,
        value: string,
        seconds: number,
    ) {
        try {
            const data = await this.clientWrite.hset(hashName, key, value);
            await this.setHashExpiry(hashName, key, seconds);
            return data;
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Set Expiry for Field inside Redis hash
     * @param hashName
     * @param key
     * @param seconds
     * @returns
     */
    async setHashExpiry(hashName: string, key: string, seconds: number) {
        try {
            return await this.clientWrite.expire(`${hashName}:${key}`, seconds);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Del Specific Field/Key from Redis Hash
     * @param hashName
     * @param key
     * @returns
     */
    async delKeyFromHash(hashName: string, key: string) {
        try {
            return await this.clientWrite.hdel(hashName, key);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Insert data into list
     * @param key
     * @param data
     * @param ttl
     */
    async insertInList(key: string, data: any, ttl: number = 3600) {
        try {
            const pipeline = this.clientWrite.pipeline();
            const totalCount = data.length;
            for (let index = 0; index < totalCount; index++) {
                data[index].totalCount = totalCount;
                await pipeline.rpush(key, JSON.stringify(data[index]));
            }
            pipeline.expire(key, ttl);
            await pipeline.exec();
            return;
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }

    /**
     * @description Read data from list
     * @param key
     * @param skip
     * @param limit
     */
    async readList(key: string, skip: number, limit: number) {
        try {
            return await this.clientWrite.lrange(key, skip, limit);
        } catch (error) {
            console.log('Redis storage insertKeyInRedis', error, false);
            throw error;
        }
    }
}

export const redis = new RedisStorage();
