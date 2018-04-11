import Api from '@/services/Api'

export default {
  // AppService.getPosts()
  getPosts () {
    return Api().get('getPosts')
  },
  // AppService.newPost({ postParams })
  newPost (post) {
    return Api().post('newPost', post)
  },
  // AppService.showPost({ postId })
  showPost (params) {
    return Api().get('post/' + params.id)
  },
  // AppService.editPost({ postParams })
  editPost (post) {
    return Api().put('post/' + post.id, post)
  }
}
