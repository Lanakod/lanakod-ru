import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { ThemeEntity } from '@persistence/app/theme/theme.entity';
import ThemeRepository from '@persistence/app/theme/interface/repository.interface';

@Injectable()
export class ThemeRepositoryImpl
  extends EntityRepository<ThemeEntity>
  implements ThemeRepository
{
  /**
   *
   * find theme by name
   *
   * @param {string} name
   * @return Promise<ThemeEntity>
   *
   */
  findByName(name: string): Promise<ThemeEntity> {
    return this.findOne({ name });
  }
}
