const { ProductInCart } = require('../models')

class prodInCartServices {
	static async add(newproductInCart) {
		try {
			const result = await ProductInCart.create(newproductInCart)
			return result
		} catch (error) {
			throw error
		}
	}

	static async getAll() {
		try {
			const result = await ProductInCart.findAll()
			return result
		} catch (error) {
			throw error
		}
	}
}

module.exports = CartServices
