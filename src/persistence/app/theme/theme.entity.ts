import { Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from '@common/types/base-entity.type';
import { ThemeRepositoryImpl } from '@persistence/app/theme/theme.repository';
import { PostEntity } from '@persistence/app/post/post.entity';

@Entity({ tableName: 'themes', customRepository: () => ThemeRepositoryImpl })
export class ThemeEntity extends BaseEntity {
  @Property({
    type: 'varchar',
  })
  name: string;

  @ManyToMany(() => PostEntity, (post) => post.themes)
  posts: PostEntity[];
}
