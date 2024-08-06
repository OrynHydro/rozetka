const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	phone: {
		type: String,
		default: null,
	},
	email: {
		type: String,
		default: null,
	},
	password: {
		type: String,
		required: true,
	},
})

UserSchema.index({ phone: 1, _id: 1 }, { unique: true, sparse: true })
UserSchema.index({ email: 1, _id: 1 }, { unique: true, sparse: true })

module.exports = mongoose.model('User', UserSchema)
