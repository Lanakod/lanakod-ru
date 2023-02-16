import { DataSource, EntityRepository, Repository } from 'typeorm';
import UserEntity from '@persistence/app/user/user.entity';
import { UserRepository } from './interface/repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImpl
  extends Repository<UserEntity>
  implements UserRepository
{
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
  // FIXME
  // /**
  //  *
  //  * Find user by token
  //  *
  //  * @param token
  //  * @return Promise<UserEntity>
  //  *
  //  */
  // findByToken(token: string): Promise<UserEntity> {
  //   return this.findOne({
  //     where: { token: { refreshToken: token }, relations: [] },
  //   });
  // }

  /**
   *
   * Find User by PK (id)
   *
   * @param id
   * @return Promise<UserEntity>
   *
   */
  findById(id: number): Promise<UserEntity> {
    return this.findOne({ where: { id }, relations: [] });
  }

  /**
   *
   * Find User by entity filed
   *
   * @param field
   * @param value
   * @return Promise<UserEntity>
   *
   */
  findByField(field: keyof UserEntity, value: any): Promise<UserEntity> {
    return this.findOne({ where: { [field]: value }, relations: [] });
  }
}
