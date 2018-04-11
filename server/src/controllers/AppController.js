const config = require('../config/config')
const Post = require('../models/post')

module.exports = {
  /* GET POSTS */
  getPosts (req, res) {
    Post.find({}, (err, posts) => {
      if (err) {
        res.status(400).json({ message: 'Error trying to get posts' })
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
      date: req.body.date
    })
    if (req.body.title == null || req.body.title === '' || req.body.body == null || req.body.body === '' || req.body.date == null || req.body.date === '') {
      res.status(400).json({ message: 'Ensure title, body, and date were provided.' })
    } else {
      post.save((err) => {
        if (err) {
          res.json({ message: 'Error trying to create a new post' })
        } else {
          res.send(post)
        }
      })
    }
  },
  /* GET A POST */
  showPost (req, res) {
    Post.findById(req.params.id, (err, post) => {
      if (err) {
        res.status(400).json({ message: 'Error trying to get a post' })
      } else {
        res.send(post)
      }
    })
  },
  /* EDIT A POST */
  editPost (req, res) {
    Post.findById(req.params.id, 'title body date', (err, post) => {
      if (err) {
        res.status(400).json({ message: 'Error trying to access the post'})
      } else {
        post.title = req.body.title
        post.body = req.body.body
        post.date = req.body.date
        if (req.body.title == null || req.body.title === '' || req.body.body == null || req.body.body === '' || req.body.date == null || req.body.date === '') {
          res.status(400).json({ message: 'Ensure title, body, and date were provided.' })
        } else {
          post.save((err) => {
            if (err) {
              res.status(400).json({ message: 'Error trying to update post' })
            } else {
              res.send(post)
            }
          })
        }
      }
    })
  }
}
