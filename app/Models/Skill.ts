import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Skill extends BaseModel {
  public static table ='skills'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @manyToMany(() => User,{
    localKey: 'id', // skill id
    pivotForeignKey: 'skill_id',
    relatedKey: 'id', // user id
    pivotRelatedForeignKey: 'user_id',
    pivotTable: 'skill_user',
    pivotTimestamps: true
  })
  public users: ManyToMany<typeof User>
}
