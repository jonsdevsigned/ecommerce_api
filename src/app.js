const express = require('express')
const cors = require('cors')
const db = require('./utils/database')
const {
	usersRoutes,
	authRoutes,
	productsRoutes,
	cartsRoutes
} = require('./routes')
const handleError = require('./middlewares/error.middlewares')
const initModels = require('./models/initModels')

const app = express()

app.use(express.json())
app.use(cors())

initModels()

db.authenticate()
	.then(() => console.log('successful authentication'))
	.catch((error) => console.log(error))

db.sync({ force: false })
	.then(() => console.log('synchronized database'))
	.catch((error) => console.log(error))

app.get('/', (req, res) => {
	console.log('welcome to the server')
})

app.use('/api/v1', usersRoutes)
app.use('/api/v1', authRoutes)
app.use('/api/v1', productsRoutes)
app.use('/api/v1', cartsRoutes)

app.use(handleError)

module.exports = app
