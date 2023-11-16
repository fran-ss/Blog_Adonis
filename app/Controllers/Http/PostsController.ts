import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async store({ auth, request, response }: HttpContextContract) {
    const { title, description } = request.only(['title', 'description'])
    const user = await auth.authenticate()
    await user.related('posts').create({ title, description })
    return response.status(204)
  }
}
