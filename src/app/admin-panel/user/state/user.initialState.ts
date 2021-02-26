import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';
import { IUserState } from './user.state';

export const UserStateInitialState: IUserState = {
  loadUsersSuccessParams: new LoadUsersSuccessParams(),
  error: '',
  blockUserReasons: [],
  addBlockReasonResult: null,
  blockUserResult: null,
  removeUserResult: null,
};
