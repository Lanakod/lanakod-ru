import { compare } from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '@domain/app/user/interface/service.interface';
import UserModel from '@domain/app/user/user.model';
import { ICreateUser } from '@domain/app/user/interface/create.interface';
import { USER_REPOSITORY } from '@config/constants';
import { UserRepository } from '@persistence/app/user/interface/repository.interface';
import UserEntity from '@persistence/app/user/user.entity';

const UserRepo = () => Inject(USER_REPOSITORY);

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @UserRepo()
    private readonly userRepository: UserRepository,
  ) {}

  /**
   *
   * Get all users
   *
   * @return {Promise<UserModel[]>}
   */
  async all(): Promise<UserModel[]> {
    const users = await this.userRepository.findAll();
    if (!users) return null;

    return Promise.all(users.map((user) => UserModel.toModel(user)));
  }

  /**
   *
   * Create new user & Save him in DB
   *
   * @param dto
   * @return {Promise<UserModel>}
   *
   */
  async create(dto: ICreateUser): Promise<UserModel> {
    const user = this.userRepository.create({
      username: dto.username,
      id: dto.id,
      email: dto.email,
      password: dto.password,
    });

    await this.userRepository.persistAndFlush(user);

    // await this.userRepository.save({
    //   givenName: dto.given_name,
    //   familyName: dto.family_name,
    //   patronymic: dto.patronymic,
    //   id: dto.id,
    // });

    if (!user) return null;

    return UserModel.toModel(user);
  }

  /**
   *
   * Get user by Primary key (ID)
   *
   * @param id
   * @return {Promise<UserModel>}
   */
  async getById(id: number): Promise<UserModel> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;

    return UserModel.toModel(user);
  }

  /**
   *
   * Find user by entity key
   *
   * @param email
   * @param username
   * @return {Promise<UserEntity>}
   */
  async findOne(email: string, username: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      $or: [
        {
          username,
        },
        {
          email,
        },
      ],
    });
    console.log('[USER]', user);
    if (!user) return null;

    return user;
  }

  /**
   *
   * Compare users password
   *
   * @param id
   * @param password
   * @return boolean
   */
  async comparePassword(id: number, password: string): Promise<boolean> {
    const encrypted = await this.userRepository
      .findById(id)
      .then((user) => user.password);
    return compare(password, encrypted);
  }

  /**
   *
   * Get user by token
   *
   * @param token
   * @return {Promise<UserModel>}
   */

  // FIXME
  async getByToken(token: string): Promise<UserModel> {
    const user = await this.userRepository.findByToken(token);
    if (!user) return null;

    return UserModel.toModel(user);
  }
}
