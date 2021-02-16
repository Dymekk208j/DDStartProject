import { LoadUsersSuccessParams } from './../models/LoadUsersSuccessParams';
import { UserStateInitialState } from './user.initialState';
import { createReducer, on } from '@ngrx/store';
import * as AdminPanelActions from './user.actions';
import { IUserState } from './user.state';
import { state } from '@angular/animations';
import { User } from '../models/user';

export const userReducer = createReducer<IUserState>(
  UserStateInitialState,
  // on(
  //   AdminPanelActions.setUsers,
  //   (state, params): IUserState => {
  //     return {
  //       ...state,
  //       users: params.users,
  //     };
  //   }
  // ),
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
  ),
  on(
    AdminPanelActions.blockUserSuccess,
    (state, params): IUserState => {
      let loadUsersSuccessParams = JSON.parse(
        JSON.stringify(state.loadUsersSuccessParams)
      );

      let index: number = loadUsersSuccessParams.rowData.findIndex(
        (e: User) => e.Id == params.id
      );

      let user: User = Object.assign({}, loadUsersSuccessParams.rowData[index]);
      user.Blocked = true;

      loadUsersSuccessParams.rowData[index] = user;

      return {
        ...state,
        loadUsersSuccessParams: loadUsersSuccessParams,
      };
    }
  ),
  on(
    AdminPanelActions.blockUserError,
    (state, params): IUserState => {
      return {
        ...state,
        error: params.errors,
      };
    }
  ),
  on(
    AdminPanelActions.fetchBlockUserReasonsSuccess,
    (state, params): IUserState => {
      return {
        ...state,
        blockUserReasons: params.reasons,
      };
    }
  ),
  on(
    AdminPanelActions.fetchBlockUserReasonsError,
    (state, params): IUserState => {
      return {
        ...state,
        error: 'error',
      };
    }
  )
);
