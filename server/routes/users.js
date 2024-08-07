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
			{ userId: user._id, iat: Math.floor(Date.now() / 1000) },
			secretKeyAccess,
			{
				expiresIn: '1h',
			}
		)

		const refreshToken = jwt.sign(
			{ userId: user._id, iat: Math.floor(Date.now() / 1000) },
			secretKeyRefresh,
			{
				expiresIn: '7d',
			}
		)

		res.cookie('accessToken', accessToken, {
			httpOnly: true,
			maxAge: 60 * 60 * 1000,
		})

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60 * 1000,
		})

		res.status(200).json(user)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Server error', error })
	}
})

// login
router.post('/login', async (req, res) => {
	try {
		const { phone, email, password } = req.body

		let user

		if (!phone) {
			user = await User.findOne({ email })
		} else if (!email) {
			user = await User.findOne({ phone })
		}

		if (!user) {
			return res.status(401).json('Invalid credentials')
		}

		const isPasswordValid = await bcrypt.compare(password, user.password)

		if (!isPasswordValid) {
			return res.status(401).json('Invalid credentials')
		}

		const accessToken = jwt.sign(
			{ userId: user._id, iat: Math.floor(Date.now() / 1000) },
			secretKeyAccess,
			{
				expiresIn: '1h',
			}
		)

		const refreshToken = jwt.sign(
			{ userId: user._id, iat: Math.floor(Date.now() / 1000) },
			secretKeyRefresh,
			{
				expiresIn: '7d',
			}
		)

		res.cookie('accessToken', accessToken, {
			httpOnly: true,
			maxAge: 60 * 60 * 1000,
		})

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60 * 1000,
		})

		res.status(200).json(user)
	} catch (error) {
		res.status(500).json(error)
	}
})

// logout
router.post('/logout', (req, res) => {
	try {
		res.clearCookie('accessToken')
		res.clearCookie('refreshToken')
		res.status(200).json('Success')
	} catch (error) {
		res.status(500).json(error)
	}
})

// refresh token
router.get('/', async (req, res) => {
	const accessToken = req.cookies['accessToken']
	const refreshToken = req.cookies['refreshToken']

	try {
		const decodedAccessToken = jwt.verify(accessToken, secretKeyAccess)

		const user = decodedAccessToken

		if (!user) {
			return res.status(401).json('Unauthorized: Invalid access token')
		}

		const dbUser = await User.findById(user.userId)
		return res.status(200).json(dbUser)
	} catch (accessTokenError) {
		try {
			const decodedRefreshToken = jwt.verify(refreshToken, secretKeyRefresh)

			const user = decodedRefreshToken

			if (!user) {
				return res.status(401).json('Unauthorized: Invalid refresh token')
			}

			const newAccessToken = jwt.sign(
				{ userId: user.userId },
				secretKeyAccess,
				{ expiresIn: '1h' }
			)

			res.cookie('accessToken', newAccessToken, {
				httpOnly: true,
				maxAge: 60 * 60 * 1000,
			})

			const dbUser = await User.findById(user.userId)
			return res.status(200).json(dbUser)
		} catch (refreshTokenError) {
			return res
				.status(401)
				.json('Unauthorized: Invalid access and refresh tokens')
		}
	}
})
module.exports = router
