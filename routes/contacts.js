const router = require('express').Router();

const utilities = require('../utilities');
const validate = require('../utilities/contact-validation');
const contactController = require('../controllers/contact-controller');

//GET routes
router.get('/', utilities.handleErrors(contactController.getAllContact));

router.get('/:id',
    validate.contactIdRules(),
    validate.checkRules,
    utilities.handleErrors(contactController.getContactById)
);

router.post('/',
    validate.contactRules(),
    validate.checkRules,
    utilities.handleErrors(contactController.createContact)
);

router.put('/:id',
    validate.contactIdRules(),
    validate.contactRules(),
    validate.checkRules,
    utilities.handleErrors(contactController.updateContact)
);

router.delete('/:id',
    validate.contactIdRules(),
    validate.checkRules,
    utilities.handleErrors(contactController.deleteContact)
);

module.exports = router;