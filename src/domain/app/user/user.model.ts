import UserEntity from '@persistence/app/user/user.entity';

export default class UserModel {
  private id: number;
  private username: string;
  private email: string;

  get Id(): number {
    return this.id;
  }

  set Id(value: number) {
    this.id = value;
  }

  get Username(): string {
    return this.username;
  }

  set Username(value: string) {
    this.username = value;
  }

  get Email(): string {
    return this.email;
  }

  set Email(value: string) {
    this.email = value;
  }

  static toModel(user: UserEntity) {
    const model = new UserModel();
    model.Id = user.id;
    model.Username = user.username;
    model.Email = user.email;

    return model;
  }
}
