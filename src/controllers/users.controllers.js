const { UserServices } = require('../services')

const userRegister = async (req, res, next) => {
	try {
		const newUser = req.body
		const result = await UserServices.add(newUser)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'missing data'
		})
	}
}

const getAllUsers = async (req, res, next) => {
	try {
		const users = await UserServices.getAll()
		res.json(users)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'error occurred'
		})
	}
}

const getProductUserCarts = async (req, res, next) => {
	try {
		const productsInCart = await UserServices.getProducts()
		res.json(productsInCart)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'error occurred'
		})
	}
}

module.exports = { getAllUsers, userRegister, getProductUserCarts }