import { User } from './../../../user/models/user';
import { BaseRequest } from '../../../../shared/dto/requests/BaseRequest';

export class BlockUserRequest extends BaseRequest {
  public user: User;
  public reason: string;
}
