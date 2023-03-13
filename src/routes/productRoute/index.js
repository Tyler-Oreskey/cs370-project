const router = require('express').Router();
const { productController } = require('../../controllers');

router.get('/:upc_code', productController.getByUPCCode);
router.post('/', productController.create)

module.exports = router;