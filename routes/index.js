const router = require('express').Router();

//API DOCS
router.use('/api-docs', require('./swagger'));

//GET
router.use('/contacts', require('./contacts'));


module.exports = router;