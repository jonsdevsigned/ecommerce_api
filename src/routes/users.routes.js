const { Router } = require('express')
const { getAllUsers, userRegister } = require('../controllers')
const authenticate = require('../middlewares/auth.middlewares')

/**
 * @openapi
 * /api/v1/register:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [register]
 *     requestBody:
 *       description: To register a new user you need a username, email and pass
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/register"
 * /api/v1/users:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: gets all users into the app
 *     tags: [users]
 *     requestBody:
 *       description: gets all users
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/users"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/users"
 *
 */

const router = Router()

router.get('/users', authenticate, getAllUsers)
router.post('/register', userRegister)

module.exports = router
