import { BaseResponse } from "../../../shared/dto/responses/BaseResponse";

export class LoginResponse extends BaseResponse {
  public id: string;
  public login: string;
  public token: string;
  public rememberMe: boolean;
}
