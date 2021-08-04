import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Skill from './Skill'

export default class User extends BaseModel {
  public static table ='users'
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public password: string

  @column()
  public email: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Skill,{
    localKey: 'id', // user id
    pivotForeignKey: 'user_id',
    relatedKey: 'id', // skill id
    pivotRelatedForeignKey: 'skill_id',
    pivotTable: 'skill_user',
    pivotTimestamps: true
  })
  public skills: ManyToMany<typeof Skill>
}
