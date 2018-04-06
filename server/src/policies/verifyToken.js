const jwt = require('jsonwebtoken')
const secret = 'secret'

module.exports = function (req, res, next){
  const token = req.body.token || req.body.query || req.headers['x-access-token']

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
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
