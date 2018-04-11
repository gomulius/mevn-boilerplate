const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
})

module.exports = mongoose.model('Post', PostSchema)
