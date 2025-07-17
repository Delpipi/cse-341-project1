const { getDb } = require('../database');
const ObjectId = require('mongodb').ObjectId;

async function getContactById(contact_id) {
    const contactId = new ObjectId(contact_id);
    const contacts = await getDb().collection('contacts').find({ _id: contactId }).toArray();
    return contacts[0];
}

async function getAllContact() {
    const contacts = await getDb().collection('contacts').find().toArray();
    return contacts;
}

async function createContact(firstName,lastName,email,favoriteColor,birthday) {
    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        favoriteColor: favoriteColor,
        birthday: birthday
    };
    return await getDb().collection('contacts').insertOne(contact);
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
    return await getDb().collection('contacts').replaceOne({ _id: contactId }, contact);
}

async function deleteContact(id) {
    var contactId = new ObjectId(id);
    return await getDb().collection('contacts').deleteOne({_id: contactId })
}

module.exports = {getContactById, getAllContact, createContact, updateContact, deleteContact};