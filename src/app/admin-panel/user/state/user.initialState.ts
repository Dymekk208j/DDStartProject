import { IUserState } from './user.state';

export const UserStateInitialState: IUserState = {
  loadUsersSuccessParams: null,
  error: '',
  blockUserReasons: [],
  addBlockReasonResult: null,
  blockUserResult: null,
  removeUserResult: null,
};
