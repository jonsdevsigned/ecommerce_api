const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Orders = db.define('orders', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	totalPrice: {
		type: DataTypes.FLOAT,
		allowNull: false,
		field: 'total_price'
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			key: 'id',
			model: 'users'
		},
		field: 'user_id'
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

module.exports = Orders
