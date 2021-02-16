import { createAction, props } from '@ngrx/store';
import { IServerSideGetRowsRequest } from 'ag-grid-community';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';
import { User } from '../models/user';

// export const setUsers = createAction(
//   '[Admin] Set users',
//   props<{ users: User[] }>()
// );

export const fetchUsers = createAction(
  '[Admin] Fetch users',
  props<{ request: IServerSideGetRowsRequest }>()
);

export const fetchUsersSuccess = createAction(
  '[Admin] Fetch users success',
  props<{ loadUsersSuccessParams: LoadUsersSuccessParams }>()
);

export const fetchUsersError = createAction(
  '[Admin] Fetch users error',
  props<{ errors: string }>()
);

export const blockUser = createAction(
  '[Admin] Block users',
  props<{ id: string }>()
);

export const blockUserSuccess = createAction(
  '[Admin] Block users success',
  props<{ id: string }>()
);

export const blockUserError = createAction(
  '[Admin] Block users error',
  props<{ errors: string }>()
);

export const fetchBlockUserReasons = createAction(
  '[Admin] Fetch block user reasons'
);

export const fetchBlockUserReasonsSuccess = createAction(
  '[Admin] Fetch block user reasons success',
  props<{ reasons: string[] }>()
);

export const fetchBlockUserReasonsError = createAction(
  '[Admin] Fetch block user reasons error',
  props<{ errors: string }>()
);
