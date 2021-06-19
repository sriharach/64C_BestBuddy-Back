import * as dotenv from 'dotenv'

dotenv.config()

const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    HOST_SWAGGER: process.env.HOST_SWAGGER,
    SERVICE_HOST: process.env.SERVICE_HOST,
    STATUS_CODE_ERROR: Number(process.env.STATUS_CODE_ERROR) || 500,
    STATUS_CODE: Number(process.env.STATUS_CODE) || 200,

    DB_USERNAME_DEV: process.env.DB_USERNAME_DEV,
    DB_PASSWORD_DEV: process.env.DB_PASSWORD_DEV,
    DB_NAME_DEV: process.env.DB_NAME_DEV,
    DB_HOST_DEV: process.env.DB_HOST_DEV,
    DB_PORT_DEV: process.env.DB_PORT_DEV,
    DB_DIALECT_DEV: process.env.DB_DIALECT_DEV,

    DB_USERNAME_TEST: process.env.DB_USERNAME_TEST,
    DB_PASSWORD_TEST: process.env.DB_PASSWORD_TEST,
    DB_NAME_TEST: process.env.DB_NAME_TEST,
    DB_HOST_TEST: process.env.DB_HOST_TEST,
    DB_PORT_TEST: process.env.DB_PORT_TEST,
    DB_DIALECT_TEST: process.env.DB_DIALECT_TEST,

    DB_USERNAME_PROD: process.env.DB_USERNAME_PROD,
    DB_PASSWORD_PROD: process.env.DB_PASSWORD_PROD,
    DB_NAME_PROD: process.env.DB_NAME_PROD,
    DB_HOST_PROD: process.env.DB_HOST_PROD,
    DB_PORT_PROD: process.env.DB_PORT_PROD,
    DB_DIALECT_PROD: process.env.DB_DIALECT_PROD,
}

export default config