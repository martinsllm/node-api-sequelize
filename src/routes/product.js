const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

//Product
router.get('/', ProductController.List);
router.get('/:id', ProductController.ListOne);
router.post('/', ProductController.Create);
router.put('/:id', ProductController.Update);
router.delete('/:id', ProductController.Delete);

module.exports = router;