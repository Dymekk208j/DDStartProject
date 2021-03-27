import { User } from '../models/user';
import { AuthInitialState } from './auth.initialState';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { IAuthState } from './auth.state';

export const authReducer = createReducer<IAuthState>(
  AuthInitialState,
  on(
    AuthActions.loginUser,
    (state, params): IAuthState => {
      return {
        ...state,
        loginUserResult: null,
        isUserLogged: false,
      };
    }
  ),
  on(
    AuthActions.loginUserSuccess,
    (state, params): IAuthState => {
      return {
        ...state,
        loggedUser: params.response,
        loginUserResult: true,
        isUserLogged: true,
      };
    }
  ),
  on(
    AuthActions.loginUserError,
    (state, params): IAuthState => {
      return {
        ...state,
        loginErrors: params.errors,
        loginUserResult: false,
        isUserLogged: false,
      };
    }
  ),
  on(
    AuthActions.resetStatuses,
    (state, params): IAuthState => {
      return {
        ...state,
        loginUserResult: null,
        loginErrors: '',
      };
    }
  )
);
