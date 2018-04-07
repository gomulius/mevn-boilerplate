module.exports = {
  port: process.env.PORT || 8081,
  mongoose: {
    uri: 'mongodb://localhost:27017/mevn-boilerplate',
    options: {}
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
