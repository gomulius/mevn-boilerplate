import Api from '@/services/Api'

export default {
  // AppService.getPosts()
  getPosts () {
    return Api().get('getPosts')
  },
  // AppService.newPost({ postParams })
  newPost (post) {
    return Api().get('newPost', post)
  }
}
