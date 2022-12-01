const { ProductServices } = require('../services')

const createProduct = async (req, res, next) => {
	try {
		const newProduct = req.body
		const result = await ProductServices.add(newProduct)
		res.status(201).json(result)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'missing data'
		})
	}
}

const getAllProducts = async (req, res, next) => {
	try {
		const product = await ProductServices.getAll()
		res.json(product)
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'error occurred'
		})
	}
}

module.exports = { getAllProducts, createProduct }
