const Carts = require('./carts.models')
const Orders = require('./orders.models')
const ProductInCart = require('./productinCart.models')
const ProductInOrder = require('./productInOrder.models')
const Products = require('./products.models')
const Users = require('./users.models')

module.exports = {
	Users,
	Products,
	Orders,
	Carts,
	ProductInCart,
	ProductInOrder
}
