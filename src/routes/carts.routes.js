const { Router } = require('express')
const { getAllCarts, createCart } = require('../controllers')
const authenticate = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/carts', authenticate, getAllCarts)
router.post('/cart', authenticate, createCart)

module.exports = router
