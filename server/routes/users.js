const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const User = require('../models/Users')

dotenv.config({ path: '.env.local' })

const secretKeyAccess = process.env.JWT_SECRET_ACCESS
const secretKeyRefresh = process.env.JWT_SECRET_REFRESH

// register

router.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
		const newUser = new User({
			phone: req.body.phone,
			email: req.body.email,
			password: hashedPassword,
		})

		const user = await newUser.save()

		const accessToken = jwt.sign(
			{ userId: 'user123', iat: Math.floor(Date.now() / 1000) },
			secretKeyAccess,
			{
				expiresIn: '1h',
			}
		)

		const refreshToken = jwt.sign(
			{ userId: 'jopa', iat: Math.floor(Date.now() / 1000) },
			secretKeyRefresh,
			{
				expiresIn: '7d',
			}
		)

		res.cookie('accessToken', accessToken, {
			httpOnly: false,
			maxAge: 60 * 60 * 1000,
		})

		res.cookie('refreshToken', refreshToken, {
			httpOnly: false,
			maxAge: 7 * 24 * 60 * 60 * 1000,
		})

		res.status(200).json(user)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Server error', error })
	}
})

module.exports = router
