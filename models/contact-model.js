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

async function createContact(firstName,lastName,email,favoriteColor,birthday) {
    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        favoriteColor: favoriteColor,
        birthday: birthday
    };
    try {
        return await getDb().collection('contacts').insertOne(contact);
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

async function updateContact(id,firstName,lastName,email,favoriteColor,birthday) {
    var contactId = new ObjectId(id);
      const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        favoriteColor: favoriteColor,
        birthday: birthday
    };
    try {
       return await getDb().collection('contacts').replaceOne({_id: contactId}, contact)
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

async function deleteContact(id) {
    try {
        var contactId = new ObjectId(id);
        return await getDb().collection('contacts').deleteOne({_id: contactId })
    } catch (error) {
        
    }
}
module.exports = {getContactById, getAllContact, createContact, updateContact, deleteContact};