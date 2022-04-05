import { BaseRequest } from '../../../../shared/dto/requests/BaseRequest';

export class BlockUserRequest extends BaseRequest {
  public id: string;
  public reason: string;
  public saveAsTemplate: boolean;
}
