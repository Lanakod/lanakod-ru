import { Injectable } from '@nestjs/common';
import { TokenEntity } from '@persistence/app/token/token.entity';
import TokenRepository from '@persistence/app/token/interface/repository.interface';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class TokenRepositoryImpl
  extends EntityRepository<TokenEntity>
  implements TokenRepository
{
  /**
   *
   * Save new token in database
   *
   * @param userId
   * @param _token
   * @return Promise<TokenEntity>
   *
   */
  async newToken(userId: number, _token: string): Promise<TokenEntity> {
    const e = this.create({ userId, refreshToken: _token });
    this.persist(e);
    return e;
  }

  /**
   *
   * find token by userId
   *
   * @param userId
   * @return Promise<TokenEntity>
   *
   */
  findByUserId(userId: number): Promise<TokenEntity> {
    return this.findOne({ userId });
  }

  /**
   *
   * Delete one token from database
   *
   * @param token
   * @return boolean
   *
   */
  deleteOne(token: TokenEntity): boolean {
    return !!this.remove(token);
  }
}
