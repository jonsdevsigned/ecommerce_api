const { Router } = require('express')
const { getAllUsers, userRegister } = require('../controllers')
const authenticate = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/users', authenticate, getAllUsers)
router.post('/user', userRegister)

module.exports = router
