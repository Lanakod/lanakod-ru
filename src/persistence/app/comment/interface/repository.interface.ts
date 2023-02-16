import { EntityRepository } from '@mikro-orm/core';
import { CommentEntity } from '@persistence/app/comment/comment.entity';

export default interface CommentRepository
  extends EntityRepository<CommentEntity> {
  /**
   *
   * find comment by userId
   *
   * @param {number} userId
   * @return Promise<CommentEntity>
   *
   */
  findByUserId(userId: number): Promise<CommentEntity>;
}
