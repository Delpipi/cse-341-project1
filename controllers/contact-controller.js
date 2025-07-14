const { getContactById, getAllContact, createContact, updateContact, deleteContact} = require('../models/contact-model');

const contactController = {};

contactController.getContactById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getContactById(id);
        res.setHeader('Content-type', 'application/json');
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Contact not found"});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server unexpected error');
    }
}

contactController.getAllContact = async (req, res) => {
    try {
        const result = await getAllContact();
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server unexpected error');
    }
}

contactController.createContact = async (req, res, next) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    try {
        const result = await createContact(firstName, lastName, email, favoriteColor, birthday);
        res.setHeader('Content-Type', 'application/json');
        if (result.acknowledged) {
            res.status(201).json({message: `the Contact '${firstName} ${lastName}' successfully created`});
        } else {
            res.status(400).json({message: `Create contact '${firstName} ${lastName}' failed`});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server unexpected error');
    }
}

contactController.updateContact = async (req, res, next) => {
    const id = req.params.id;
    const {firstName, lastName, email, favoriteColor, birthday } = req.body;
    try {
        const result = await updateContact(id, firstName, lastName, email, favoriteColor, birthday);
        res.setHeader('Content-Type', 'application/json');
        if (result.modifiedCount > 0) {
            res.status(200).json({message: `The contact '${firstName} ${lastName}' successfully updated`});
        } else {
            res.status(400).json({message: `Update contact '${firstName} ${lastName}' failed`});
        }
    } catch (error) {
        console.error(err);
        res.status(500).send('Server unexpected error');
    }
}

contactController.deleteContact = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await deleteContact(id);
        res.setHeader('Content-Type', 'application/json');
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'The contact successfully deleted'});
        } else {
            res.status(400).json({ message: 'Delete contact failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server unexpected error');
    }
}

module.exports = contactController;