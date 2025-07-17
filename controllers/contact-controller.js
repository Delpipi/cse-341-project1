const { getContactById, getAllContact, createContact, updateContact, deleteContact} = require('../models/contact-model');
const appError = require('../utilities/app-error');
const httpStatusCodes = require('../utilities/http-status-code');
const contactController = {};

contactController.getContactById = async (req, res) => {
    const id = req.params.id;
    const result = await getContactById(id);
    res.setHeader('Content-Type', 'application/json');
    if (result) {
        res.status(httpStatusCodes.OK).json(result);
    } else {
        throw new appError(httpStatusCodes.NOT_FOUND, "Contact not found");
    }
}

contactController.getAllContact = async (req, res) => {
    const result = await getAllContact();
    res.setHeader('Content-type', 'application/json');
    res.status(httpStatusCodes.OK).json(result);
}

contactController.createContact = async (req, res) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const result = await createContact(firstName, lastName, email, favoriteColor, birthday);

    res.setHeader('Content-Type', 'application/json');
    if (result.acknowledged) {
        res.status(httpStatusCodes.CREATED).json({message: `the Contact '${firstName} ${lastName}' successfully created`});
    } else {
        throw new appError(httpStatusCodes.BAD_REQUEST, `Create contact '${firstName} ${lastName}' failed`);
    }
}

contactController.updateContact = async (req, res) => {
    const id = req.params.id;
    const {firstName, lastName, email, favoriteColor, birthday } = req.body;
    
    const result = await updateContact(id, firstName, lastName, email, favoriteColor, birthday);
    res.setHeader('Content-Type', 'application/json');
    if (result.modifiedCount > 0) {
        res.status(httpStatusCodes.OK).json({message: `The contact '${firstName} ${lastName}' successfully updated`});
    } else {
        throw new appError(httpStatusCodes.BAD_REQUEST, `Update contact '${firstName} ${lastName}' failed`);
    }
}

contactController.deleteContact = async (req, res) => {
    const id = req.params.id;
   
    const result = await deleteContact(id);
    res.setHeader('Content-Type', 'application/json');
    if (result.deletedCount > 0) {
        res.status(httpStatusCodes.NO_CONTENT).send();
    } else {
        throw new appError(httpStatusCodes.BAD_REQUEST, 'Delete contact failed');
    }
}

module.exports = contactController;