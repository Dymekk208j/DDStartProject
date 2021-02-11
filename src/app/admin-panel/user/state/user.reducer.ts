import { UserStateInitialState } from './user.initialState';
import { createReducer, on } from '@ngrx/store';
import * as AdminPanelActions from './user.actions';
import { IUserState } from './user.state';

export const userReducer = createReducer<IUserState>(
  UserStateInitialState,
  on(
    AdminPanelActions.setUsers,
    (state, params): IUserState => {
      return {
        ...state,
        users: params.users,
      };
    }
  ),
  on(
    AdminPanelActions.fetchUsersSuccess,
    (state, params): IUserState => {
      return {
        ...state,
        loadUsersSuccessParams: params.loadUsersSuccessParams,
      };
    }
  ),
  on(
    AdminPanelActions.fetchUsersError,
    (state, params): IUserState => {
      return {
        ...state,
        error: 'error',
      };
    }
  )
);
