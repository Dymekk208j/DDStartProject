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
        isUserLogged: true
      };
    }
  ),
  on(
    AuthActions.loginUserError,
    (state, params): IAuthState => {
      return {
        ...state,
        loginErrors: params.error.message,
        isUserLogged: false
      };
    }
  ),
  on(
    AuthActions.registerUser,
    (state, params): IAuthState => {
      return {
        ...state
      };
    }
  ),
  on(
    AuthActions.registerUserSuccess,
    (state, params): IAuthState => {
      return {
        ...state
      };
    }
  ),
  on(
    AuthActions.registerUserError,
    (state, params): IAuthState => {
      return {
        ...state,
        registerUserErrors: params.errors
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
