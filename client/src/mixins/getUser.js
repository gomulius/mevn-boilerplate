import AuthService from '@/services/AuthService'

export default async function (token) {
  const response = await AuthService.getUser(token)
  return response
}
