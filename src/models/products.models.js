const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Products = db.define(
	'products',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		productImg: {
			type: DataTypes.STRING,
			defaultValue: 'https://www.idelcosa.com/img/default1.png',
			field: 'product_img'
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		availableQty: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		status: {
			type: DataTypes.ENUM('in stock', 'sold out'),
			defaultValue: 'in stock'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				key: 'id',
				model: 'users'
			},
			field: 'user_id'
		}
	},
	{ timestamps: false }
)

module.exports = Products
