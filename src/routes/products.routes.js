const { Router } = require('express')
const { getAllProducts, createProduct } = require('../controllers')
const authenticate = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/products', getAllProducts)
router.post('/product', authenticate, createProduct)

module.exports = router
