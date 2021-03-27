import { BaseResponse } from '../../../shared/dto/responses/BaseResponse';

export class RegisterResponse extends BaseResponse {
  public IsSuccess: boolean;
  public Errors: string[];
}
