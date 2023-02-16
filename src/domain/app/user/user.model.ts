import UserEntity from '@persistence/app/user/user.entity';

export default class UserModel {
  private id: number;
  private givenName: string;
  private familyName: string;
  private patronymic: string;
  private email: string;

  get Id(): number {
    return this.id;
  }

  set Id(value: number) {
    this.id = value;
  }

  get GivenName(): string {
    return this.givenName;
  }

  set GivenName(value: string) {
    this.givenName = value;
  }

  get FamilyName(): string {
    return this.familyName;
  }

  set FamilyName(value: string) {
    this.familyName = value;
  }

  get Patronymic(): string {
    return this.patronymic;
  }

  set Patronymic(value: string) {
    this.patronymic = value;
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
    model.GivenName = user.givenName;
    model.FamilyName = user.familyName;
    // model.Email = user.email;
    model.Patronymic = user.patronymic;

    return model;
  }
}
