const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Carts = db.define(
	'carts',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
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
		totalPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
			field: 'total_price'
		}
	},
	{ timestamps: false }
)

module.exports = Carts
