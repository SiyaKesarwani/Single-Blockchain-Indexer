export enum Config {
    DATA_LAKE_SERVICE_PORT = 'data_lake_service_port',
    DATA_LAKE_APP_PORT = 'consumer_data_lake_app_port',
    DATA_LAKE_APP_CONTEXT_PATH = 'consumer_data_lake_app_context_path',
    HOST = 'host',
    BASIC_AUTH_USERNAME = 'basic_auth_username',
    BASIC_AUTH_PASSWORD = 'basic_auth_password',
    USER_APP_CONTEXT_PATH = 'user_app_context_path',
    AUTH_APP_CONTEXT_PATH = 'auth_app_context_path',
    PORTFOLIO_APP_CONTEXT_PATH = 'portfolio_app_context_path',
    AWS_S3_BUCKET_NAME = 'aws_s3_bucket_name',
    AWS_S3_BUCKET_PUBLIC = 'aws_s3_bucket_public',
    AWS_S3_BUCKET_PRIVATE = 'aws_s3_bucket_private',
    REDIS_HOST = 'redis_host',
    REDIS_PORT = 'redis_port',
    REDIS_DB = 'redis_db',
    REDIS_DB_INDEXER = 'redis_db_indexer',
    REDIS_WRITE_REPLICA_HOST = 'redis_write_replica_host',
    REDIS_WRITE_REPLICA_PORT = 'redis_write_replica_port',
    REDIS_READ_REPLICA_HOST = 'redis_read_replica_host',
    REDIS_READ_REPLICA_PORT = 'redis_read_replica_port',
    REDIS_AUTH_TOKEN = 'redis_auth_token',

    // Kafka
    KAFKA_BROKER_1 = 'kafka_broker_1',
    KAFKA_BROKER_2 = 'kafka_broker_2',
    KAFKA_USERNAME = 'kafka_username',
    KAFKA_PASSWORD = 'kafka_password',

    KAFKA_REPLICATION_FACTOR = 'kafka_replication_factor',

    //TA
    KAFKA_TOPIC_TA_MONGO = 'kafka_topic_ta_mongo',
    KAFKA_TOPIC_TA_MONGO_PARTITION = 'kafka_topic_ta_mongo_partition',

    KAFKA_TOPIC_TA_PG = 'kafka_topic_ta_pg',
    KAFKA_TOPIC_TA_PG_PARTITION = 'kafka_topic_ta_pg_partition',

    TA_DATA_LAKE_MONGO_BUCKET = 'ta_data_lake_mongo_bucket',
    TA_DATA_LAKE_PG_BUCKET = 'ta_data_lake_pg_bucket',

    KAFKA_TOPIC_SMART_CONTRACT = 'kafka_topic_smart_contract',
    KAFKA_TOPIC_SMART_CONTRACT_PARTITION = 'kafka_topic_smart_contract_partiton',

    RECORDS_CONTRACT_ADDRESS = "records_contract_address",
    MAX_GAS_LIMIT = 'max_gas_limit',
    BESU_CHAIN_ID = 'besu_chain_id',
    SIGNER_ADDRESS = 'signer_address',
    RPC_NODE_URL = 'rpc_node_url',

    KMS_ACCESS_KEY_ID = 'kms_access_key_id',
    KMS_SECRET_ACCESS_KEY = 'kms_secret_access_key',
    BACKEND_KEY_ID = 'backend_key_id',
    KMS_REGION = 'kms_region',

    POSTGRE_DB_NAME = 'postgre_db_name',
    POSTGRE_DB_USER = 'postgre_db_user',
    POSTGRE_DB_PASSWORD = 'postgre_db_password',
    POSTGRE_DB_HOST = 'postgre_db_host',
    POSTGRE_DB_PORT = 'postgre_db_port',
    POSTGRE_DB_READ_HOST = 'postgre_db_read_host',
    POSTGRE_DB_WRITE_HOST = 'postgre_db_write_host',
    MONGO_URI_INDEXER = 'MONGO_URI_INDEXER'
}