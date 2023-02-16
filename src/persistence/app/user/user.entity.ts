import { Entity, Property } from '@mikro-orm/core';
import { UserRepositoryImpl } from '@persistence/app/user/user.repository';
import { BaseEntity } from '@common/types/base-entity.type';

@Entity({
  tableName: 'users',
  customRepository: () => UserRepositoryImpl,
})
export default class UserEntity extends BaseEntity {
  @Property({
    type: 'varchar',
    nullable: true,
  })
  givenName: string;

  @Property({
    type: 'varchar',
    nullable: true,
  })
  familyName: string;

  @Property({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  patronymic: string;

  @Property({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  email: string;

  @Property({ type: 'varchar', nullable: true })
  password: string;

  @Property({
    type: 'boolean',
    name: 'is_admin',
    default: false,
  })
  isAdmin: boolean;
}
