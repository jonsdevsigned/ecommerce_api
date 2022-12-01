const {
	Products,
	Users,
	Carts,
	Orders,
	ProductInCart,
	ProductInOrder
} = require('./index')

const initModels = () => {
	Users.hasMany(Products, { as: 'products', foreignKey: 'user_id' })
	Products.belongsTo(Users, { as: 'seller', foreignKey: 'user_id' })

	Users.hasOne(Carts, { as: 'purchase', foreignKey: 'user_id' })
	Carts.belongsTo(Users, { as: 'users', foreignKey: 'user_id' })

	Users.hasMany(Orders, { as: 'orders', foreignKey: 'user_id' })
	Orders.belongsTo(Users, { as: 'users', foreignKey: 'user_id' })

	Carts.hasMany(ProductInCart, { as: 'sale', foreignKey: 'cart_id' })
	ProductInCart.belongsTo(Carts, { as: 'carts', foreignKey: 'cart_id' })
	Products.hasOne(ProductInCart, { as: 'sale', foreignKey: 'product_id' })
	ProductInCart.belongsTo(Products, {
		as: 'products',
		foreignKey: 'product_id'
	})

	Orders.hasMany(ProductInOrder, { as: 'inOrder', foreignKey: 'order_id' })
	ProductInOrder.belongsTo(Orders, { as: 'orders', foreignKey: 'order_id' })
	Products.hasOne(ProductInOrder, { as: 'inOrder', foreignKey: 'product_id' })
	ProductInOrder.belongsTo(Products, {
		as: 'products',
		foreignKey: 'product_id'
	})
}

module.exports = initModels
