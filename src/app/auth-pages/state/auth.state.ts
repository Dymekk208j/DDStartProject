import { User } from '../models/user';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  authState: IAuthState;
}

export interface IAuthState {
  loggedUser: User | null;
  isUserLogged: boolean;
  loginErrors: string;
  loginUserResult: boolean | null;
}
