const { MongoClient } = require('mongodb');
require('dotenv').config();

//Get mongo client
const client = new MongoClient(process.env.DATABASE_URL);

let db;

//Initialize database
const initDb = (callback) => {
    if (db) {
        console.log('Db is already initialized');
        return callback(null, db);
    }
    client.connect()
        .then((client) => {
            db = client.db('cse341');
            callback(null, db);
        })
        .catch((err) => {
            callback(err);
        });
}

function getDb() {
    if (!db) {
        throw new Error('Database not init');
    }
    return db;
}

module.exports = { initDb, getDb };