const router = require('express').Router();
const ProviderController = require('./controllers/ProviderController');

//Provider
router.get('/provider', ProviderController.List);
router.get('/provider/:id', ProviderController.ListOne);
router.post('/provider', ProviderController.Create);
router.put('/provider/:id', ProviderController.Update);
router.delete('/provider/:id', ProviderController.Delete);

module.exports = router;