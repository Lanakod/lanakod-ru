import { EntityRepository } from '@mikro-orm/core';
import { ThemeEntity } from '@persistence/app/theme/theme.entity';

export default interface ThemeRepository extends EntityRepository<ThemeEntity> {
  /**
   *
   * find theme by name
   *
   * @param {string} name
   * @return Promise<ThemeEntity>
   *
   */
  findByName(name: string): Promise<ThemeEntity>;
}
