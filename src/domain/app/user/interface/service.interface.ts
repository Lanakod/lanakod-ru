import UserModel from '@domain/app/user/user.model';
import { ICreateUser } from '@domain/app/user/interface/create.interface';
import UserEntity from '@persistence/app/user/user.entity';

export interface UserService {
  /**
   *
   * Create new user & Save him in DB
   *
   * @param dto
   * @return {Promise<UserModel>}
   *
   */
  create(dto: ICreateUser): Promise<UserModel>;

  /**
   *
   * Get user by Primary key (ID)
   *
   * @param id
   * @return {Promise<UserModel>}
   */
  getById(id: number): Promise<UserModel>;

  /**
   *
   * Find user by entity key
   *
   * @param email
   * @param username
   * @return {Promise<UserEntity>}
   */
  findOne(email: string, username: string): Promise<UserEntity>;

  // FIXME
  /**
   *
   * Get user by token
   *
   * @param token
   * @return {Promise<UserModel>}
   */
  getByToken(token: string): Promise<UserModel>;

  /**
   *
   * Get all users
   *
   * @return {Promise<UserModel[]>}
   */
  all(): Promise<UserModel[]>;

  /**
   *
   * Compare users password
   *
   * @param id
   * @param password
   * @return boolean
   */
  comparePassword(id: number, password: string): Promise<boolean>;
}
