const router = require('express').Router();

const contactController = require('../controllers/contact-controller');

//GET routes
router.get('/', contactController.getAllContact);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;