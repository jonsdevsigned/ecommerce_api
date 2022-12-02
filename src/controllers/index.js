const {
	getAllUsers,
	userRegister,
} = require('./users.controllers')
const { userLogin } = require('./auth.controllers')
const { getAllProducts, createProduct } = require('./products.controllers')
const { createCart, getAllCarts } = require('./carts.controllers')

module.exports = {
	userRegister,
	getAllUsers,
	userLogin,
	getAllProducts,
	createProduct,
	createCart,
	getAllCarts
}
