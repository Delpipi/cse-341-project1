const { getDb } = require('../database');
const ObjectId = require('mongodb').ObjectId;

async function getContactById(contact_id) {
    try {
        const contactId = new ObjectId(contact_id);
        const contacts = await getDb().collection('contacts').find({ _id: contactId }).toArray();
        return contacts[0];
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

async function getAllContact() {
    try {
        const contacts = await getDb().collection('contacts').find().toArray();
        return contacts;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

module.exports = {getContactById, getAllContact};