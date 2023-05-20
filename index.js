require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const packageJson = require('./package.json')

// Import the routes from the routes folder here
const userRoutes = require('./routes/user')

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}))

app.use(bodyParser.json())

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    port,
    version: packageJson.version,
    status: "active",
  })
})

// Declare the routes here
app.use('/user', userRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})