const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = function (req, res, next){
  const token = req.body.token || req.body.query || req.headers['x-access-token']

  if (token) {
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err) {
        res.status(400).json({ message: 'Token invalid.'})
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    res.status(400).json({ message: 'No token provided.' })
  }
}
