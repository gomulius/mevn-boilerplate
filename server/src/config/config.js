module.exports = {
  port: process.env.PORT || 8081,
  mongoose: {
    uri: 'mongodb://localhost:27017/mevn-boilerplate',
    options: {}
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  },
  passport: {
    facebook: {
      clientID: '',
      clientSecret: '',
      callbackURL: '',
      profileFields: ['id', 'displayName', 'photos', 'email']
    }
  }
}
