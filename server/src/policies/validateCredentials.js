const Joi = require('joi')

module.exports = {
  register(req, res, next) {
    const schema = {
      username: Joi.string().alphanum().min(3).max(30),
      password: Joi.string().regex(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/),
      email: Joi.string().email(),
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).json({ message: 'Username can only contain letters and numbers'})
          break
        case 'password':
          res.status(400).send({ message: 'Password must contain at least one lowercase, one uppercase, one number, one special character, and must have between 8 and 35 characters'})
          break
        case 'email':
          res.status(400).json({ message: 'Email must be a valid address' })
          break
        default:
          res.status(500).json({ message: 'An error has occured trying to register'})
      }
    } else {
      next()
    }
  }
}
