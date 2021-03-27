import { IAuthState } from './auth.state';

export const AuthInitialState: IAuthState = {
  isUserLogged: false,
  loggedUser: null,
  loginErrors: '',
  loginUserResult: null,
  registerUserResult: null,
  registerUserErrors: '',
};
