const { getContactById, getAllContact } = require('../models/contact-model');

const contactController = {};

contactController.getContactById = async (req, res) => {
    try {
        const contact_id = req.params.contact_id;
        const result = await getContactById(contact_id);
        if (result) {
            res.setHeader('Content-type', 'application/json');
            res.status(200).json(result);
        } else {
            res.status(404).json('Contact not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(`Server unexpected error`);
    }
}

contactController.getAllContact = async (req, res) => {
    try {
        const result = await getAllContact();
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Server unexpected error`);
    }
}

module.exports = contactController;