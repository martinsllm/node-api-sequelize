const router = require('express').Router();

router.use('/provider', require('./provider'));
router.use('/product', require('./product'));

module.exports = router;