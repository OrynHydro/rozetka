const mongoose = require('mongoose')

const GoodSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	code: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number,
		default: 1,
	},
	category: {
		type: Number,
		required: true,
	},
	photo: {
		type: String,
		default: null,
	},
	availability: {
		type: Boolean,
		default: true,
	},
})

module.exports = mongoose.model('Good', GoodSchema)
