import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async store({ auth, request }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    const token = await auth.attempt(email, password)
    return token
  }
}
