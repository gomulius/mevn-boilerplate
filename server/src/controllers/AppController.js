const config = require('../config/config')
const Post = require('../models/post')

module.exports = {
  /* GET POSTS */
  getPosts (req, res) {
    Post.find({}, (err, posts) => {
      if (err) {
        console.log(err)
      } else {
        res.send(posts)
      }
    }).sort({ date: -1 })
  },
  /* NEW POST */
  newPost (req, res) {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      date: req.body.date,
      tag: req.body.tag
    })
    if (req.body.title == null || req.body.title === '' || req.body.body == null || req.body.body === '' || req.body.date == null || req.body.date === '') {
      res.status(400).json({ message: 'Ensure title, body, and date were provided.' })
    } else {
      post.save((err) => {
        if (err) {
          res.send({ message: 'Error trying to create a new post' })
        } else {
          res.json(post)
        }
      })
    }
  }
}
