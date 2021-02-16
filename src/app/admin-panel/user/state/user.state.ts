import * as AppState from '../../../state/app.state';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';

export interface State extends AppState.State {
  userState: IUserState;
}

export interface IUserState {
  loadUsersSuccessParams: LoadUsersSuccessParams;
  blockUserReasons: string[];
  error: string;
  addBlockReasonResult: boolean;
  blockUserResult: boolean;
}
