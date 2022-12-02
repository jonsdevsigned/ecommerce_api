const { Users, ProductInCart } = require('../models')

class UserServices {
	static async add(newUser) {
		try {
			const result = await Users.create(newUser)
			return result
		} catch (error) {
			throw error
		}
	}

	static async getAll() {
		try {
			const result = await Users.findAll({
				attributes: ['id', 'username', 'email']
			})
			return result
		} catch (error) {
			throw error
		}
	}
}

module.exports = UserServices