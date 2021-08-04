import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({}: HttpContextContract) {
    const users = await User.all()
    
    for (let index = 0; index < users.length; index++)
     await users[index].load('skills')
      
    // await users.load('skills')
    return users

  // const skills = await user.related('skills').query() /// GET ALL SKILLS of USER
  // await user.load('skills') /// LOAD skills to user
  }

  public async create ({}: HttpContextContract) {
    

  }

  public async store ({}: HttpContextContract) {
    
    const users = await User.createMany([
      {
        email: 'aty@adonisjs.com',
        name: 'Aty',
        password: 'secret'
      },
      {
        email: 'ederlino@adonisjs.com',
        name: 'ederlino',
        password: 'secret'
      },
    ])
    
    // Create new SKILLS and attach to USER
    const skill = await users[0].related('skills').createMany(
      [
        {name:'C#'},
        {name:'JS'}
      ]
    )

    // attach exists SKILLS to USER
    await users[1].related('skills').attach([
      skill[0].id,
      skill[1].id,
    ])

    return {users:users, skills:skill}

  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
