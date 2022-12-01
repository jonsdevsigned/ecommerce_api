const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const ProductInCart = db.define('productInCart', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	cartId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			key: 'id',
			model: 'carts'
		},
		field: 'cart_id'
	},
	productId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			key: 'id',
			model: 'products'
		},
		field: 'product_id'
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	price: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	status: {
		type: DataTypes.ENUM('canceled', 'purchased', 'pending'),
		defaultValue: 'pending'
	},
	createdAt: {
		type: DataTypes.DATEONLY,
		field: 'created_at',
		allowNull: false
	},
	updatedAt: {
		type: DataTypes.DATEONLY,
		field: 'updated_at',
		allowNull: false
	}
})

module.exports = ProductInCart
