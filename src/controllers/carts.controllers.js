const { CartServices } = require('../services')

const createCart = async (req, res, next) => {
	try {
		const newCart = req.body
		const result = await CartServices.add(newCart)
		console.log(result)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'missing data'
		})
	}
}

const getAllCarts = async (req, res, next) => {
	try {
		const carts = await CartServices.getAll()
		res.json(carts)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'error occurred'
		})
	}
}

module.exports = { getAllCarts, createCart }
