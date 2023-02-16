import UserEntity from '@persistence/app/user/user.entity';
import { UserRepository } from './interface/repository.interface';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class UserRepositoryImpl
  extends EntityRepository<UserEntity>
  implements UserRepository
{
  // FIXME
  /**
   *
   * Find user by token
   *
   * @param token
   * @return Promise<UserEntity>
   *
   */
  findByToken(token: string): Promise<UserEntity> {
    return this.findOne({ token: { refreshToken: token } });
  }

  /**
   *
   * Find User by PK (id)
   *
   * @param id
   * @return Promise<UserEntity>
   *
   */
  findById(id: number): Promise<UserEntity> {
    return this.findOne({ id });
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
    return this.findOne({ [field]: value });
  }
}
