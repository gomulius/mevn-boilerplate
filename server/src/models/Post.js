const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  date: { type: Date, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [ { type: String }]
})

module.exports = mongoose.model('Post', PostSchema)
