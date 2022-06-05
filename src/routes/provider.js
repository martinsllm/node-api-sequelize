const router = require('express').Router();
const ProviderController = require('../controllers/ProviderController');

router.get('/', ProviderController.List);
router.get('/:id', ProviderController.ListOne);
router.post('/', ProviderController.Create);
router.put('/:id', ProviderController.Update);
router.delete('/:id', ProviderController.Delete);

module.exports = router;