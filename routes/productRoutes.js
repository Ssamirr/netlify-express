const express = require('express')
const { productController } = require('../controller/productController')
const router = express.Router()



router.get('/',productController.getAll)
router.post('/',productController.add)
router.get('/:id',productController.getById)
router.delete('/:id',productController.delete)
router.put('/:id',productController.update)



module.exports = router;