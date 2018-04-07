const config = require('../config/config')
const mongoose = require('mongoose')

mongoose.connect(config.mongoose.uri, config.mongoose.options, (err) => {
  if (err) {
    console.log('Not connected to MongoDB: ' + err)
  } else {
    console.log('Successfully connected to MongoDB')
  }
})
