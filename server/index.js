const express = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoute = require('./routes/users')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

dotenv.config({ path: '.env.local' })

mongoose
	.connect(process.env.MONGO_DB_URL)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch(error => {
		console.error('Error connecting to MongoDB: ', error)
	})

app.use('/users', userRoute)

app.listen(8800, () => console.log(`Server is running on port 8800`))
