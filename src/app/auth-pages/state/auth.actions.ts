import { createAction, props } from "@ngrx/store";
import { RegisterResponse, LoginResponse } from "./../dto/responses";
import { LoginRequest, RegisterRequest } from "./../dto/requests";
import { User } from "../models/user";

export const resetStatuses = createAction("[Auth] Reset statuses");

export const loginUser = createAction("[Auth] Login user", props<{ request: LoginRequest }>());

export const loginUserSuccess = createAction("[Auth] Login user success", props<{ response: LoginResponse }>());

export const loginUserError = createAction("[Auth] Login user error", props<{ errors: string }>());

export const registerUser = createAction("[Auth] Register user", props<{ request: RegisterRequest }>());

export const registerUserSuccess = createAction("[Auth] Register user success", props<{ response: RegisterResponse }>());

export const registerUserError = createAction("[Auth] Register user error", props<{ errors: string }>());

export const restoreUser = createAction("[Auth] Restore user", props<{ user: User }>());

export const restoreUserSuccess = createAction("[Auth] Restore user success", props<{ user: User }>());

export const logOutUser = createAction("[Auth] LogOut user");

export const logOutUserSuccess = createAction("[Auth] LogOut user success");
