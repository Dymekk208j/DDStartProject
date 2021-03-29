import { Gender } from "./../../../shared/enums";
import { BaseRequest } from "../../../shared/dto/requests/baseRequest";

export class RegisterRequest extends BaseRequest {
  public UserName: string;

  public Email: string;
  public EmailConfirm: string;
  public Password: string;
  public PasswordConfirm: string;

  public FirstName: string;
  public LastName: string;

  public Gender: Gender;
}
