const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const ProductInOrder = db.define('productInOrder', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	orderId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			key: 'id',
			model: 'orders'
		},
		field: 'order_id'
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
		type: DataTypes.ENUM('pending', 'completed'),
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

module.exports = ProductInOrder
