const User = require('../models/user')

module.exports = {
  /* REGISTRATION */
  register (req, res) {
    const user = new User()
    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email
    if (req.body.username == null || req.body.username === '' || req.body.password == null || req.body.password === '' || req.body.email == null || req.body.email === '') {
      res.status(400).json({ success: false, message: 'Ensure username, password, and email were provided.' })
    } else {
      user.save((err) => {
        if (err) {
          res.status(409).json({ success: false, message: 'Username or email already exists!' })
        } else {
          res.json({ success: true, message: 'User created!' })
        }
      })
    }
  }
}
