import Api from '@/services/Api'

export default {
  // AppService.getPosts()
  getPosts () {
    return Api().get('getPosts')
  }
}
