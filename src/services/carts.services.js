const { Carts } = require('../models')

class CartServices {
	static async add(newCart) {
		try {
			const result = await Carts.create(newCart)
			return result
		} catch (error) {
			throw error
		}
	}

	static async getAll() {
		try {
			const result = await Carts.findAll()
			return result
		} catch (error) {
			throw error
		}
	}
}

module.exports = CartServices
