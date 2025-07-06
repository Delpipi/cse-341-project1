const router = require('express').Router();

//GET
router.use('/', require('./contacts'));

module.exports = router;