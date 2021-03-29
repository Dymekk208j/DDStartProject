import { BaseRequest } from '../../../shared/dto/requests/baseRequest';

export class IsEmailAvailableRequest extends BaseRequest {
  public Email: string;
}
