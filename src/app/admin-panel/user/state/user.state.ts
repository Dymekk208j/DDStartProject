import * as AppState from '../../../state/app.state';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';
import { User } from '../models/user';

export interface State extends AppState.State {
  userState: IUserState;
}

export interface IUserState {
  users: User[];
  loadUsersSuccessParams: LoadUsersSuccessParams;
  error: string;
}
