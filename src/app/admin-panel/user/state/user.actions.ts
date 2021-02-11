import { createAction, props } from '@ngrx/store';
import { IServerSideGetRowsRequest } from 'ag-grid-community';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';
import { User } from '../models/user';

export const setUsers = createAction(
  '[Admin] Set users',
  props<{ users: User[] }>()
);

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
