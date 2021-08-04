/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

import Application from '@ioc:Adonis/Core/Application'
Route.get('/', async () => {
  var dbPath =Application.tmpPath();
  return { app: 'adonisjs v5 Many-To-Many Relationship  Example... see route file (.\start\routes.js) to get lists of routes',db_path:dbPath }
})

Route.group(() => {

  Route.get('/','UsersController.index')
  Route.post('/','UsersController.store')
}
).prefix('/users')

Route.group(() => {

  Route.get('/','SkillsController.index')
  Route.post('/','SkillsController.store')
}
).prefix('/skills')


