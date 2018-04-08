const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const router = express.Router()
const api = require('./routes/api')(router)

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)

// mongo database
require('./models/db')

// server
app.listen(config.port, function() {
  console.log(`Running server on port ${config.port}`);
})
