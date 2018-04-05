const User = require('../models/user')
const jwt = require('jsonwebtoken')
let secret = 'secret'

function jwtSign (user) {
  return jwt.sign(
    { username: user.username, email: user.email },
    secret,
    { expiresIn: '24h' }
  )
}

module.exports = {
  /* REGISTRATION */
  register (req, res) {
    const user = new User()
    user.username = req.body.username
    user.password = req.body.password
    user.email = req.body.email
    if (req.body.username == null || req.body.username === '' || req.body.password == null || req.body.password === '' || req.body.email == null || req.body.email === '') {
      res.status(400).json({ message: 'Ensure username, password, and email were provided.' })
    } else {
      user.save((err) => {
        if (err) {
          res.status(409).json({ message: 'Username or email already exists!' })
        } else {
          res.json({ message: 'User created!' })
        }
      })
    }
  },
  /* LOGIN */
  login (req, res) {
    User.findOne({ username: req.body.username }).select('email username password').exec((err, user) => {
      if (err) {
        res.status(500).json({ messaeg: 'An error has occured trying to log in'})
      }

      if (!user) {
        res.status(401).json({ message: 'Could not authenticate user' })
      } else if (user) {
        if (req.body.password) {
          const validPassword = user.comparePassword(req.body.password)
          if (!validPassword) {
            res.status(401).json({ message: 'Could not be authenticate password' })
          } else {
            res.json({ message: 'User authenticated!', user: user, token: jwtSign(user) })
          }
        } else {
          res.status(400).json({ message: 'No password provided' })
        }
      }
    });
  }
}
