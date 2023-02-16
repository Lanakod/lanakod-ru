import {
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { BaseEntity } from '@common/types/base-entity.type';
import UserEntity from '@persistence/app/user/user.entity';
import { PostRepositoryImpl } from '@persistence/app/post/post.repository';
import { ThemeEntity } from '@persistence/app/theme/theme.entity';
import { CommentEntity } from '@persistence/app/comment/comment.entity';

@Entity({ tableName: 'posts', customRepository: () => PostRepositoryImpl })
export class PostEntity extends BaseEntity {
  @Property({
    type: 'varchar',
  })
  title: string;

  @Property({ type: 'varchar' })
  description: string;

  @Property({ type: 'varchar' })
  content: string;

  @ManyToOne(() => UserEntity)
  author: UserEntity;

  @ManyToMany(() => ThemeEntity)
  themes: ThemeEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];
}
