const router = require('express').Router();
const ProviderController = require('./controllers/ProviderController');
const ProductController = require('./controllers/ProductController');

//Provider
router.get('/provider', ProviderController.List);
router.get('/provider/:id', ProviderController.ListOne);
router.post('/provider', ProviderController.Create);
router.put('/provider/:id', ProviderController.Update);
router.delete('/provider/:id', ProviderController.Delete);

//Product
router.get('/product', ProductController.List);
router.get('/product/:id', ProductController.ListOne);
router.post('/product', ProductController.Create);
router.put('/product/:id', ProductController.Update);
router.delete('/product/:id', ProductController.Delete);

module.exports = router;