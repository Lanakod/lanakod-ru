import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { TokenRepositoryImpl } from '@persistence/app/token/token.repository';
import { BaseEntity } from '@common/types/base-entity.type';
import UserEntity from '@persistence/app/user/user.entity';

@Entity({ tableName: 'tokens', customRepository: () => TokenRepositoryImpl })
export class TokenEntity extends BaseEntity {
  @Property({
    type: 'varchar',
  })
  refreshToken: string;

  // @Property({ type: 'int' })
  // userId: number;

  @OneToOne(() => UserEntity, (user) => user.token, { orphanRemoval: true })
  user: UserEntity;
}
