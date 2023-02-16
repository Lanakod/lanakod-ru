import UserEntity from '@persistence/app/user/user.entity';
import { EntityRepository } from '@mikro-orm/core';

export interface UserRepository extends EntityRepository<UserEntity> {
  // FIXME
  /**
   *
   * Find user by token
   *
   * @param token
   * @return Promise<UserEntity>
   *
   */
  findByToken(token: string): Promise<UserEntity>;

  /**
   *
   * Find User by PK (id)
   *
   * @param id
   * @return Promise<UserEntity>
   *
   */
  findById(id: number): Promise<UserEntity>;

  /**
   *
   * Find User by entity filed
   *
   * @param field
   * @param value
   * @return Promise<UserEntity>
   *
   */
  findByField(field: keyof UserEntity, value: any): Promise<UserEntity>;
}
