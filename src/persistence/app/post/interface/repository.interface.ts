import { EntityRepository } from '@mikro-orm/core';
import { PostEntity } from '@persistence/app/post/post.entity';

export default interface PostRepository extends EntityRepository<PostEntity> {
  /**
   *
   * find post by userId
   *
   * @param {number} userId
   * @return Promise<PostEntity>
   *
   */
  findByUserId(userId: number): Promise<PostEntity>;
}
