const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const Users = db.define(
	'users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		pass: {
			type: DataTypes.STRING,
			allowNull: false
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
	},
	{
		hooks: {
			beforeCreate: (user, options) => {
				const { pass } = user
				const hash = bcrypt.hashSync(pass, 8)
				user.pass = hash
			}
		}
	}
)
module.exports = Users
