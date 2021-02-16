import { BlockUserRequest } from './../../shared/dto/requests/blockUserRequest';
import { createAction, props } from '@ngrx/store';
import { IServerSideGetRowsRequest } from 'ag-grid-community';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';

export const fetchUsers = createAction(
  '[User list] Fetch users',
  props<{ request: IServerSideGetRowsRequest }>()
);

export const fetchUsersSuccess = createAction(
  '[User list] Fetch users success',
  props<{ loadUsersSuccessParams: LoadUsersSuccessParams }>()
);

export const fetchUsersError = createAction(
  '[User list] Fetch users error',
  props<{ errors: string }>()
);

export const blockUser = createAction(
  '[User list] Block users',
  props<{ request: BlockUserRequest }>()
);

export const blockUserSuccess = createAction(
  '[User list] Block users success',
  props<{ request: BlockUserRequest }>()
);

export const blockUserError = createAction(
  '[User list] Block users error',
  props<{ errors: string }>()
);

export const fetchBlockUserReasons = createAction(
  '[User list] Fetch block user reasons'
);

export const fetchBlockUserReasonsSuccess = createAction(
  '[User list] Fetch block user reasons success',
  props<{ reasons: string[] }>()
);

export const fetchBlockUserReasonsError = createAction(
  '[User list] Fetch block user reasons error',
  props<{ errors: string }>()
);

export const addBlockReason = createAction(
  '[User list] Add block reason',
  props<{ reason: string }>()
);

export const addBlockReasonSuccess = createAction(
  '[User list] Add block reason success'
);

export const addBlockReasonError = createAction(
  '[User list] Add block reason error',
  props<{ errors: string }>()
);

export const resetStatuses = createAction('[User list] Reset statuses');
