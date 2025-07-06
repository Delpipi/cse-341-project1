const { MongoClient } = require('mongodb');
require('dotenv').config();

//Get mongo client
const client = new MongoClient(process.env.DATABASE_URL);

let db;

//Try to connect(non-blocking)
client.connect()
    .then(() => {
        db = client.db('cse341');
        console.log('MongoDB initialized');
    })
    .catch((err) => {
        console.error(err);
    });

function getDb() {
    if (!db) {
        throw new Error('Database not init');
    }
    return db;
}

module.exports = { getDb };