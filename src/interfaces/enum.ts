export enum HttpStatusMessage {
    CONTINUE = 'Countinue',
    SWITCHING_PROTOCOLS = 'Switching Protocol',
    PROCESSING = 'Processing',
    EARLYHINTS = 'Earlyhints',
    OK = 'OK',
    CREATED = 'Created',
    ACCEPTED = 'Accepted',
    NON_AUTHORITATIVE_INFORMATION = 'Non Authoritative Information',
    NO_CONTENT = 'No Content',
    RESET_CONTENT = 'Reset Content',
    PARTIAL_CONTENT = 'Partial Content',
    AMBIGUOUS = 'Ambiguous',
    MOVED_PERMANENTLY = 'Moved Permanently',
    FOUND = 'Found',
    SEE_OTHER = 'See Other',
    NOT_MODIFIED = 'Not Modified',
    TEMPORARY_REDIRECT = 'Temporary Redirect',
    PERMANENT_REDIRECT = 'Permanent Redirect',
    BAD_REQUEST = 'Bad Request',
    UNAUTHORIZED = 'Unauthorized',
    PAYMENT_REQUIRED = 'Payment Required',
    FORBIDDEN = 'Forbidden',
    NOT_FOUND = 'Not Found',
    METHOD_NOT_ALLOWED = 'Method Not Allowed',
    NOT_ACCEPTABLE = 'Not Acceptable',
    PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
    REQUEST_TIMEOUT = 'Request Timeout',
    CONFLICT = 'Conflict',
    GONE = 'Gone',
    LENGTH_REQUIRED = 'Length Required',
    PRECONDITION_FAILED = 'Precondition Failed',
    PAYLOAD_TOO_LARGE = 'Payload Too Large',
    URI_TOO_LONG = 'URI Too Long',
    UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
    REQUESTED_RANGE_NOT_SATISFIABLE = 'Requested Range Not Satisfiable',
    EXPECTATION_FAILED = 'Expectation Failed',
    I_AM_A_TEAPOT = 'I Am A Teapot',
    MISDIRECTED = 'Misdirected',
    UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
    FAILED_DEPENDENCY = 'Failed Dependency',
    PRECONDITION_REQUIRED = 'Precondition Required',
    TOO_MANY_REQUESTS = 'Too Many Requests',
    INTERNAL_SERVER_ERROR = 'Internal Server Error',
    NOT_IMPLEMENTED = 'Not Implemented',
    BAD_GATEWAY = 'Bad Gateway',
    SERVICE_UNAVAILABLE = 'Service Unavailable',
    GATEWAY_TIMEOUT = 'Gateway Timeout',
    HTTP_VERSION_NOT_SUPPORTED = 'Http Version Not Supported',
    OTP_ATTEMPT_EXCEEDED = 'OtpAttemptsExceeded',
}

export enum HttpStatusCode {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLYHINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    FAILED_DEPENDENCY = 424,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
}

export enum ENV {
    DEV = 'development',
    QA = 'qa',
    PROD = 'prod',
    LOCAL = 'local',
    UAT = 'uat',
    PREPROD = 'preprod',
}

export enum AuthStrategy {
    BASIC = 'Basic',
    BEARER = 'Bearer',
}

export enum ExceptionMessage {
    DEFAULT_MESSAGE = 'DEFAULT_MESSAGE',
    AUTH_INVALID_TOKEN = 'AUTH_INVALID_TOKEN',
    AUTH_INVALID_STRATEGY = 'AUTH_INVALID_STRATEGY',
    INVALID_REQUEST = 'INVALID_REQUEST',
    CONFIDENTIALITY_AGREEMENT_NOT_SIGNED = 'CONFIDENTIALITY_AGREEMENT_NOT_SIGNED',
    CONFIDENTIALITY_AGREEMENT_SIGNED = 'CONFIDENTIALITY_AGREEMENT_SIGNED',
    INVALID_AGREEMENT_TYPE = 'INVALID_AGREEMENT_TYPE',
    SHARES_NOT_AVAILABLE = 'SHARES_NOT_AVAILABLE',
    PURCHASE_IN_PROGRESS = 'PURCHASE_IN_PROGRESS',
    OTP_ATTEMPT_EXCEEDED = 'OTP_ATTEMPT_EXCEEDED',
}

export enum LogType {
    INFO = 'INFO',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG',
}

export enum DocumentType {
    AGREEMENTS = 'agreements',
    STATEMENTS = 'statements',
}

export enum KafkaEventType {
    DB_SYNC = 'db-sync'
}

export enum VerificationCodeStatus {
    ACTIVE = 1,
    IN_ACTIVE = 0,
}

export enum TransactionType {
    CLAIM = 0,
    WITHDRAWAL = 1,
    DEPOSIT = 2,
    SELL = 3,
    PURCHASE = 4,
}

export enum TokenStatus {
    UNCLAIMED = 0,
    CLAIMED = 1,
    FOR_SALE = 2,
}

export enum ShareStatus {
    UNCLAIMED = 0,
    CLAIMED = 1,
    FOR_SALE = 2,
}

export enum StatementType {
    ACCOUNT = 0,
    SELL = 1,
    PURCHASE = 2,
}

export enum SellOrderTransactionType {
    ORIGINAL = 0,
    SOLD = 1,
}

export enum SellOrderStatus {
    ACTIVE = 0,
    PENDING = 1,
    CANCELED = 2,
    COMPLETED = 3,
}

export enum LockInventoryStatus {
    REMOVED = 0,
    ACTIVE = 1,
    PENDING = 2,
    FINAL_PURCHASE = 3,
}

export enum InvestmentStatus {
    ACTIVE = 0,
    SOLD = 1,
    PROCESSING = 2,
    INVESTMENT_COMPLETED = 3,
}

export enum InvestmentPurchaseStatus {
    PROCESSING = 0,
    PROCESSED = 1,
}

export enum AgreementType {
    CONFIDENTIAL = 0,
    SELL_ORDER = 1,
    BUY_ORDER = 2,
    ADD_PROPERTY = 3,
    BROKERAGE_AGREEMENT = 4,
    TAX_AGREEMENT = 5,
    USER_AGREEMENT = 6,  
    PRIVACY_POLICY = 7, 
}

export enum AwsS3ACL {
    PRIVATE = 'private',
    PUBLIC_READ = 'public-read',
    PUBLIC_READ_WRITE = 'public-read-write',
    AWS_EXEC_READ = 'aws-exec-read',
    AUTHENTICATED_READ = 'authenticated-read',
    BUCKET_OWNER_READ = 'bucket-owner-read',
    BUCKET_OWNER_FULL = 'bucket-owner-full-control',
}

export enum PropertyStatus {
    DRAFT = 0,
    ACTIVE = 1,
    APPROVED = 2,
    UNDER_REVIEW = 3,
    ATTENTION = 4,
    INACTIVE = 5,
}

export enum PropertyDocumentStatus {
    PENDING = 1,
    IN_REVIEW = 2,
    APPROVED = 3,
    ISSUE = 4,
}

export enum ACCOUNT_TYPE {
    WALLET = 'wallet',
    BANK = 'bank',
}

export enum KYCStatus {
    VERIFIED = 1,
    Un_VERIFIED = 0,
}

export enum OwnerFormStatus{
    UNDER_REVIEW = 0,
    APPROVED = 1,
    REJECTED = 2,
    NOT_SUBMITTED = 3
}

export enum OtpChannel {
    SMS = 0,
    EMAIL = 1,
}

export enum SocketEventType  {
    SHARE_CANCELLATION = 'SHARE_CANCELLATION',
    SHARE_ADDED = 'SHARE_ADDED',
    PROPERTY_REVIEW = 'PROPERTY_REVIEW',
    PORTFOLIO = 'PORTFOLIO',
    SHARE_AVAILABLE = 'SHARE_AVAILABLE',
    SHARE_PURCHASE = 'SHARE_PURCHASE',
    GET_CONTRACT = 'GET_CONTRACT',
    CREATE_SELL_ORDER = 'CREATE_SELL_ORDER',
    BUY_ORDER_AVAILABLE = 'BUY_ORDER_AVAILABLE',
    TRADE_STATUS = 'TRADE_STATUS',
    ORDER_REJECTED = 'ORDER_REJECTED',
    KYC_UPDATE = 'KYC_UPDATE',
    TRADE_EXPIRE = 'TRADE_EXPIRE'
}


export enum atsUserStatus{
    ACTIVE = 1,
    INACTIVE = 2
}

export enum OrderType {
    SELL = 1,
    BUY = 2,
}


export enum RedisClusterType {
    READ = 'READ',
    WRITE = 'WRITE'
}