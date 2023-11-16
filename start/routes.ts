import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.index').middleware('auth')
Route.get('/user/:id', 'UserController.show')
Route.post('/user', 'UsersController.store')
Route.put('/user/:id', 'UserController.update')
Route.delete('/user/:id', 'UserController.destroy')

Route.post('/session', 'SessionsController.store')
Route.post('/post', 'PostsController.store').middleware('auth')
