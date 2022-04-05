import { BlockUserReason } from './../models/blockUserReason';
import { UserDetails } from "./../models/userDetails";
import { RemoveUserRequest } from "./../../shared/dto/requests/removeUserRequest";
import { BlockUserRequest } from "./../../shared/dto/requests/blockUserRequest";
import { createAction, props } from "@ngrx/store";

export const blockUser = createAction("[User list] Block users", props<{ request: BlockUserRequest }>());

export const blockUserSuccess = createAction("[User list] Block users success", props<{ request: BlockUserRequest }>());

export const blockUserError = createAction("[User list] Block users error", props<{ errors: string }>());

export const fetchBlockUserReasons = createAction("[User list] Fetch block user reasons");

export const fetchBlockUserReasonsSuccess = createAction("[User list] Fetch block user reasons success", props<{ reasons: BlockUserReason[] }>());

export const fetchBlockUserReasonsError = createAction("[User list] Fetch block user reasons error", props<{ errors: string }>());

export const addBlockReason = createAction("[User list] Add block reason", props<{ reason: string }>());

export const addBlockReasonSuccess = createAction("[User list] Add block reason success");

export const addBlockReasonError = createAction("[User list] Add block reason error", props<{ errors: string }>());

export const removeUser = createAction("[User list] Remove user", props<{ request: RemoveUserRequest }>());

export const removeUserSuccess = createAction("[User list] Remove user success", props<{ request: RemoveUserRequest }>());

export const removeUserError = createAction("[User list] Remove user error", props<{ errors: string }>());

export const fetchUserDetails = createAction("[User details] Fetch user details", props<{ userId: string }>());

export const fetchUserDetailsSuccess = createAction("[User details] Fetch user details success", props<{ userDetails: UserDetails }>());

export const fetchUserDetailsError = createAction("[User details] Fetch user details error", props<{ errors: string }>());
