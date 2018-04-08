const AuthController = require('../controllers/AuthController')
const verifyToken = require('../policies/verifyToken')
const validateCredentials = require('../policies/validateCredentials')

module.exports = (router) => {
  /* REGISTRATION */
  // http://localhost:8081/api/register
  router.post('/register',
    validateCredentials.register,
    AuthController.register )

  router.post('/login', AuthController.login)

  router.post('/getUser',
    verifyToken,
    AuthController.getUser
  )

  return router
}
