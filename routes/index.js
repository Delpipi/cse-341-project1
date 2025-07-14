const router = require('express').Router();

//GET
router.use('/contacts', require('./contacts'));

module.exports = router;