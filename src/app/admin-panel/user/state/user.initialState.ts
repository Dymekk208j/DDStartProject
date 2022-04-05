import { UserDetails } from "./../models/userDetails";
import { IUserState } from "./user.state";

export const UserStateInitialState: IUserState = {
  error: "",
  blockUserReasons: [],
  userDetails: new UserDetails()
};
