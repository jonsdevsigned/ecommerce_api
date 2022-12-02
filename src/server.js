const app = require('./app')
const swaggerDocs = require('./documentation/swagger')
require('dotenv').config()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`server running on the port ${PORT}`)
	swaggerDocs(app, PORT)
})
