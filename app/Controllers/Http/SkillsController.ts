import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Skill from 'App/Models/Skill';

export default class SkillsController {
  public async index ({}: HttpContextContract) {
    
    const skills = await Skill.all()
    
    
    for (let index = 0; index < skills.length; index++)
     await skills[index].load('users')
      
    return skills

  // const users = await skill.related('users').query() /// GET ALL USERs of SKILL
  // await skill.load('users') /// LOAD userS to skill
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
    
    const skill = await Skill.createMany([
      {
        name: 'Docker',
      },
      {
        name: 'Java'
      },
    ])
return skill

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
