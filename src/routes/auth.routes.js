const { Router } = require('express')
const { userLogin } = require('../controllers')

const router = Router()

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login into the app
 *     tags: [login]
 *     requestBody:
 *       description: To login you need a username and pass
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
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
 *                     $ref: "#/components/schemas/login"
 *
 */

router.post('/auth/login', userLogin)

module.exports = router
