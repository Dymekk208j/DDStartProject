import { BaseRequest } from '../../../shared/dto/requests/baseRequest';

export class IsUsernameAvailableRequest extends BaseRequest {
  public Username: string;
}
