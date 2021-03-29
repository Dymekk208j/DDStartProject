import { User } from "../models/user";
import { AuthInitialState } from "./auth.initialState";
import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { IAuthState } from "./auth.state";

export const authReducer = createReducer<IAuthState>(
  AuthInitialState,
  on(
    AuthActions.loginUser,
    (state, params): IAuthState => {
      return {
        ...state,
        loginUserResult: null,
        isUserLogged: false
      };
    }
  ),
  on(
    AuthActions.loginUserSuccess,
    (state, params): IAuthState => {
      let _loggedUser: User = {
        Id: params.response.id,
        Login: params.response.login,
        Token: params.response.token
      };

      return {
        ...state,
        loggedUser: _loggedUser,
        loginUserResult: true,
        isUserLogged: true
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
        isUserLogged: false
      };
    }
  ),
  on(
    AuthActions.resetStatuses,
    (state, params): IAuthState => {
      return {
        ...state,
        loginUserResult: null,
        loginErrors: ""
      };
    }
  ),
  on(
    AuthActions.registerUser,
    (state, params): IAuthState => {
      return {
        ...state,
        registerUserResult: null
      };
    }
  ),
  on(
    AuthActions.registerUserSuccess,
    (state, params): IAuthState => {
      return {
        ...state,
        registerUserResult: true
      };
    }
  ),
  on(
    AuthActions.registerUserError,
    (state, params): IAuthState => {
      return {
        ...state,
        registerUserErrors: params.errors,
        registerUserResult: false
      };
    }
  ),

  on(
    AuthActions.restoreUser,
    (state, params): IAuthState => {
      return {
        ...state,
        loggedUser: null,
        isUserLogged: false
      };
    }
  ),
  on(
    AuthActions.restoreUserSuccess,
    (state, params): IAuthState => {
      return {
        ...state,
        loggedUser: params.user,
        isUserLogged: true
      };
    }
  ),
  on(
    AuthActions.logOutUser,
    (state, params): IAuthState => {
      return {
        ...state
      };
    }
  ),
  on(
    AuthActions.logOutUserSuccess,
    (state, params): IAuthState => {
      return {
        ...state,
        loggedUser: null,
        isUserLogged: false
      };
    }
  )
);
