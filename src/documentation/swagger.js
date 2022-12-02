const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'eCommerce API test',
			version: '0.1.0',
			description: 'API that emulates an ecommerce'
		}
	},
	apis: [
		'./src/routes/users.routes.js',
		'./src/models/users.models.js',
		'./src/routes/auth.routes.js'
	]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
	app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
	app.get('/api/v1/docs.json', (req, res) => {
		res.setHeader('ContentType', 'application/json')
		res.send(swaggerSpec)
	})
	//
	console.log(`documentation available at http://localhost:${port}/api/v1/docs`)
}

module.exports = swaggerDocs
