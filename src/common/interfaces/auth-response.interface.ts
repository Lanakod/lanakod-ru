import Tokens from '@domain/app/token/interface/tokens.interface';
import UserModel from '@domain/app/user/user.model';

export default interface IAuthResponse {
  tokens: Tokens;
  user: UserModel;
}
