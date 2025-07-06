const router = require('express').Router();

const contactController = require('../controllers/contact-controller');

//GET routes
router.get('/contacts', contactController.getAllContact);
router.get('/contacts/:contact_id', contactController.getContactById);

module.exports = router;