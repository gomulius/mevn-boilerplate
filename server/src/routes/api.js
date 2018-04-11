// controllers
const AuthController = require('../controllers/AuthController')
const AppController = require('../controllers/AppController')
// policies
const verifyToken = require('../policies/verifyToken')
const validateCredentials = require('../policies/validateCredentials')

// http://localhost:8081/api
module.exports = (router) => {

  /* AUTHENTICATION */
  // register
  router.post('/register',
    validateCredentials.register,
    AuthController.register )
  // login
  router.post('/login', AuthController.login)
  // getUser
  router.post('/getUser',
    verifyToken,
    AuthController.getUser
  )

  /* APPLICATION */
  // getlist
  router.get('/getPosts',
    AppController.getPosts
  )
  // newpost
  router.post('/newPost',
    AppController.newPost
  )
  // showpost
  router.get('/post/:id',
    AppController.showPost
  )
  // editpost
  router.put('/post/:id',
    AppController.editPost
  )

  return router
}
