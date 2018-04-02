const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 8081
const router = express.Router()
const api = require('./routes/api')(router)

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', api)

// mongo database
mongoose.connect('mongodb://localhost:27017/mevn-app', (err) => {
  if (err) {
    console.log('Not connected to MongoDB: ' + err)
  } else {
    console.log('Successfully connected to MongoDB')
  }
})

// Server
const listener = app.listen(port, function() {
  console.log('Running server on port ' + listener.address().port);
})
