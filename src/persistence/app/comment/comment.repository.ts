import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { CommentEntity } from '@persistence/app/comment/comment.entity';
import CommentRepository from '@persistence/app/comment/interface/repository.interface';

@Injectable()
export class CommentRepositoryImpl
  extends EntityRepository<CommentEntity>
  implements CommentRepository
{
  /**
   *
   * find comment by userId
   *
   * @param {number} userId
   * @return Promise<CommentEntity>
   *
   */
  findByUserId(userId: number): Promise<CommentEntity> {
    return this.findOne({
      author: {
        id: userId,
      },
    });
  }
}
