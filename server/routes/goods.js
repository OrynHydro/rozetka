const router = require('express').Router()
const Good = require('../models/Goods')

// create
router.post('/', async (req, res) => {
	const newGood = new Good(req.body)

	try {
		const savedGood = await newGood.save()
		res.status(200).json(savedGood)
	} catch (error) {
		res.status(500).json({ message: 'Server error', error })
	}
})

// get all
router.get('/', async (req, res) => {
	try {
		const goods = await Good.find()
		res.status(200).json(goods)
	} catch (error) {
		res.status(500).json({ message: 'Server error', error })
	}
})

// get single
router.get('/:id', async (req, res) => {
	try {
		const good = await Good.findById(req.params.id)
		res.status(200).json(good)
	} catch (error) {
		res.status(500).json({ message: 'Server error', error })
	}
})

// get by category
router.get('/category/:category', async (req, res) => {
	try {
		const goods = await Good.find({ category: req.params.category })
		res.status(200).json(goods)
	} catch (error) {
		res.status(500).json({ message: 'Server error', error })
	}
})

module.exports = router
