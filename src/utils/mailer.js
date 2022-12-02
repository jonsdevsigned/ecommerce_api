const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'iamjonfo@gmail.com',
		pass: process.env.G_PASS
	}
})

module.exports = transporter
