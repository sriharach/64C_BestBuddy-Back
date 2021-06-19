import { Sequelize } from 'sequelize'
import ENV from '../config'

const config = {
    development: {
        username: ENV.DB_USERNAME_DEV,
        password: ENV.DB_PASSWORD_DEV,
        database: ENV.DB_NAME_DEV,
        host: ENV.DB_HOST_DEV,
        port: ENV.DB_PORT_DEV,
        dialect: ENV.DB_DIALECT_DEV,
    },
    test: {
        username: ENV.DB_USERNAME_TEST,
        password: ENV.DB_PASSWORD_TEST,
        database: ENV.DB_NAME_TEST,
        host: ENV.DB_HOST_TEST,
        port: ENV.DB_PORT_TEST,
        dialect: ENV.DB_DIALECT_TEST,
    },
    production: {
        username: ENV.DB_USERNAME_PROD,
        password: ENV.DB_PASSWORD_PROD,
        database: ENV.DB_NAME_PROD,
        host: ENV.DB_HOST_PROD,
        port: ENV.DB_PORT_PROD,
        dialect: ENV.DB_DIALECT_PROD,
    },
}
const env = ENV.NODE_ENV;

let database: any;
let username: any;
let password: any;
let dialect: any;
let host: any;
let port: any;

if (env == "development") {
    database = config.development.database
    username = config.development.username
    password = config.development.password
    dialect = config.development.dialect
    host = config.development.host
    port = config.development.port
} else if (env == "test") {
    database = config.test.database
    username = config.test.username
    password = config.test.password
    dialect = config.test.dialect
    host = config.test.host
    port = config.test.port
} else if (env == "production") {
    database = config.production.database
    username = config.production.username
    password = config.production.password
    dialect = config.production.dialect
    host = config.production.host
    port = config.production.port
}

const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${database}`);
export { Sequelize, sequelize };