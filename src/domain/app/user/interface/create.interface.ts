export interface ICreateUser {
  given_name: string;
  family_name: string;
  patronymic: string;
  id?: number;
  password?: string;
}
