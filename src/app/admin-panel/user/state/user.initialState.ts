import { LoadUsersSuccessParams } from "../models/LoadUsersSuccessParams";
import { IUserState } from "./user.state";

export const UserStateInitialState: IUserState = {
  error: "",
  blockUserReasons: []
};
