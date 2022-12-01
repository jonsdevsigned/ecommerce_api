const {
	Users,
	Products,
	Carts,
	Orders,
	ProductInCart,
	ProductInOrder
} = require('../models')
const initModels = require('../models/initModels')
const db = require('../utils/database')

initModels()

const users = [
	{
		username: 'Jonfo',
		email: 'jonfo@gmail.com',
		pass: 'pass123'
	},

	{
		username: 'Linis',
		email: 'linis@gmail.com',
		pass: 'pass456'
	},

	{
		username: 'vaquis',
		email: 'vaquis@gmail.com',
		pass: 'pass789'
	}
]

const products = [
	{
		name: 'calcetines',
		price: 0.5,
		availableQty: 15,
		userId: 1
	},

	{
		name: 'camisetas',
		price: 10,
		availableQty: 5,
		userId: 2
	},

	{
		name: 'Chamarras',
		productImg:
			'https://i.linio.com/p/724efe650af2d87b31780e51eeb5901d-product.webp',
		price: 30,
		availableQty: 0,
		status: 'sold out',
		userId: 2
	},

	{
		name: 'Boxer',
		price: 1.5,
		availableQty: 8,
		userId: 1
	},

	{
		name: 'gorros',
		price: 3,
		availableQty: 25,
		userId: 3
	}
]

const carts = [
	{
		userId: 2,
		totalPrice: 0.5
	},

	{
		userId: 2,
		totalPrice: 3
	},

	{
		userId: 3,
		totalPrice: 10
	}
]

const orders = [
	{
		totalPrice: 1.5,
		userId: '2'
	},

	{
		totalPrice: 3,
		userId: '2',
		status: 'completed'
	},

	{
		totalPrice: 10,
		userId: 3
	}
]

const productInCarts = [
	{
		cartId: 1,
		productId: 1,
		quantity: 3,
		price: 1.5
	},

	{
		cartId: 2,
		productId: 5,
		quantity: 1,
		price: 3,
		status: 'purchased'
	},

	{
		cartId: 3,
		productId: 2,
		quantity: 1,
		price: 10,
		status: 'canceled'
	}
]

const productInOrders = [
	{
		orderId: 1,
		productId: 1,
		quantity: 3,
		price: 1.5
	},

	{
		orderId: 2,
		productId: 5,
		quantity: 1,
		price: 3,
		status: 'completed'
	},

	{
		orderId: 3,
		productId: 2,
		quantity: 1,
		price: 10
	}
]

/* db.sync({ force: false })
	.then(() => {
		console.log('starting seeders')
	})
	.then(() => {
		users.forEach((user) => Users.create(user))
	})
	.then(() => {
		products.forEach((products) => Products.create(products))
	})
	.then(() => {
		carts.forEach((cart) => Carts.create(cart))
	})
	.then(() => {
		orders.forEach((order) => Orders.create(order))
	})
	.then(() => {
		productInCarts.forEach((prodInCart) => ProductInCart.create(prodInCart))
	})
	.then(() => {
		productInOrders.forEach((prodInOrder) => ProductInOrder.create(prodInOrder))
	}) */

db.sync({ force: true }).then(() => {
	console.log('synchronized')
	users.forEach(async (user) => await Users.create(user))
	setTimeout(() => {
		products.forEach(async (product) => await Products.create(product))
	}, 100)
	setTimeout(() => {
		carts.forEach(async (cart) => await Carts.create(cart))
	}, 200)
	setTimeout(() => {
		orders.forEach(async (order) => await Orders.create(order))
	}, 300)
	setTimeout(() => {
		productInCarts.forEach(
			async (prodInCart) => await ProductInCart.create(prodInCart)
		)
	}, 400)
	setTimeout(() => {
		productInOrders.forEach(
			async (prodInOrder) => await ProductInOrder.create(prodInOrder)
		)
	}, 500)
})
