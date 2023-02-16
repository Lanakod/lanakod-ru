import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from '@common/types/base-entity.type';
import UserEntity from '@persistence/app/user/user.entity';
import { CommentRepositoryImpl } from '@persistence/app/comment/comment.repository';
import { PostEntity } from '@persistence/app/post/post.entity';

@Entity({
  tableName: 'comments',
  customRepository: () => CommentRepositoryImpl,
})
export class CommentEntity extends BaseEntity {
  @Property({ type: 'varchar' })
  content: string;

  @ManyToOne(() => UserEntity)
  author: UserEntity;

  @ManyToOne(() => PostEntity)
  post: PostEntity;
}
