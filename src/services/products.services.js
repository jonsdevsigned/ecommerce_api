const { Products, Users } = require('../models')

class ProductServices {
	static async add(newProduct) {
		try {
			const result = await Products.create(newProduct)
			return result
		} catch (error) {
			throw error
		}
	}

	static async getAll() {
		try {
			const result = await Products.findAll({
				where: { status: 'in stock' },
				attributes: ['name', 'product_img', 'price'],
				include: {
					model: Users,
					as: 'seller',
					attributes: ['username', 'email']
				}
			})
			return result
		} catch (error) {
			throw error
		}
	}

	static async 
}

module.exports = ProductServices
