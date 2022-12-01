const { AuthServices } = require('../services')

const userLogin = async (req, res, next) => {
	try {
		const credentials = req.body
		const result = await AuthServices.authenticate(credentials)
		if (result) {
			const { email } = result.result
			const user = { email }
			const token = AuthServices.genToken(user)
			user.token = token
			res.json({ ...user })
		} else {
			res.status(400).json({ message: 'invalid email or password' })
		}
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: 'error occurred'
		})
	}
}

module.exports = { userLogin }
