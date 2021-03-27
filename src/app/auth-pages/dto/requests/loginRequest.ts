import { BaseRequest } from '../../../shared/dto/requests/baseRequest';

export class LoginRequest extends BaseRequest {
  public Login: string;
  public Password: string;
  public RememberMe: boolean;
}
