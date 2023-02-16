import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { UserRepositoryImpl } from '@persistence/app/user/user.repository';
import { BaseEntity } from '@common/types/base-entity.type';
import { TokenEntity } from '@persistence/app/token/token.entity';

@Entity({
  tableName: 'users',
  customRepository: () => UserRepositoryImpl,
})
export default class UserEntity extends BaseEntity {
  @Property({
    type: 'varchar',
    nullable: true,
  })
  username: string;

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

  @OneToOne(() => TokenEntity, (token) => token.user, {
    owner: true,
    nullable: true,
  })
  token?: TokenEntity;
}
