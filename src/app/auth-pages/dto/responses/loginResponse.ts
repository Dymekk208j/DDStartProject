import { BaseResponse } from '../../../shared/dto/responses/BaseResponse';

export class LoginResponse extends BaseResponse {
  public Id: string;
  public Login: string;
  public Token: string;
}
