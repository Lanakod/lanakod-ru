import { SUCCESSFUL_AUTHORIZATION } from '@config/constants';
import IAuthResponse from '@common/interfaces/auth-response.interface';
import IApiResponse from '@common/interfaces/api-response.interface';

export class ApiResponse {
  private static DEFAULT_STATUS_CODE = 200;

  /**
   *
   * Auth response factory
   *
   * @constructor
   * @param statusCode
   * @param message
   * @param data
   * @return {IApiResponse & { success: boolean }}
   */
  static Auth(
    statusCode = this.DEFAULT_STATUS_CODE,
    message: string,
    data?: IAuthResponse,
  ): IApiResponse & { success: boolean } {
    const success = statusCode === 200 || statusCode === 201;
    if (!message) {
      message = SUCCESSFUL_AUTHORIZATION;
    }

    return {
      statusCode,
      success,
      message,
      data: data || null,
    };
  }
}
