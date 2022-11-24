require('dotenv').config();
const mysql = require('mysql2');
const waitport = require('wait-port');

let MYSQL_HOST = process.env.MYSQL_HOST || 'localhost'
let MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || ''
let MYSQL_USER = process.env.MYSQL_USER || ''
let MYSQL_DB = process.env.MYSQL_DB || ''
let MYSQL_PORT = process.env.MYSQL_PORT || ''

let pool = null;

async function init(config) {
    config = config || ''

    if ( config ) {
        MYSQL_HOST = config.host;
        MYSQL_PASSWORD = config.password;
        MYSQL_USER = config.username;
        MYSQL_DB = config.database;
        MYSQL_PORT = 3306
    }

    await waitport({host:'localhost', port: parseInt(MYSQL_PORT)})

    pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DB,
        waitForConnections: true,
        queueLimit: 0
    })

    return new Promise((resolve, reject)=>{
        resolve(pool)
    })
}

async function tearDown() {
    return new Promise((reolve, reject) => {
        pool.end(err => {
            if(err) reject(err);
            else resolve();
        })
    })
}

module.exports = {
    init,
    tearDown
}