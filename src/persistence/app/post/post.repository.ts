import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { PostEntity } from '@persistence/app/post/post.entity';
import PostRepository from '@persistence/app/post/interface/repository.interface';

@Injectable()
export class PostRepositoryImpl
  extends EntityRepository<PostEntity>
  implements PostRepository
{
  /**
   *
   * find post by userId
   *
   * @param {number} userId
   * @return Promise<PostEntity>
   *
   */
  findByUserId(userId: number): Promise<PostEntity> {
    return this.findOne({
      author: {
        id: userId,
      },
    });
  }
}
