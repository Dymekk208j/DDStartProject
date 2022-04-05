import { BlockUserReason } from './../models/blockUserReason';
import { UserDetails } from "./../models/userDetails";
import * as AppState from "../../../state/app.state";

export interface State extends AppState.State {
  userState: IUserState;
}

export interface IUserState {
  blockUserReasons: BlockUserReason[];
  error: string;
  userDetails: UserDetails;
}
