import Api from '@/services/Api'

export default {
  // AuthService.register({ params })
  register (credentials) {
    return Api().post('register', credentials)
  }
}
