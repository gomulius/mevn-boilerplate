// const User = require('../models/user')
const AuthController = require('../controllers/AuthController')

module.exports = (router) => {
  /* REGISTRATION */
  // http://localhost:8081/api/register
  router.post('/register', AuthController.register )

  return router
}
