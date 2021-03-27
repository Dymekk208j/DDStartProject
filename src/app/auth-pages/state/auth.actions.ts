import { RegisterResponse } from './../dto/responses/registerResponse';
import { LoginResponse } from './../dto/responses/loginResponse';
import { LoginRequest } from './../dto/requests/loginRequest';
import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../dto/requests/registerRequest';

export const resetStatuses = createAction('[Auth] Reset statuses');

export const loginUser = createAction(
  '[Auth] Login user',
  props<{ request: LoginRequest }>()
);

export const loginUserSuccess = createAction(
  '[Auth] Login user success',
  props<{ response: LoginResponse }>()
);

export const loginUserError = createAction(
  '[Auth] Login user error',
  props<{ errors: string }>()
);

export const registerUser = createAction(
  '[Auth] Register user',
  props<{ request: RegisterRequest }>()
);

export const registerUserSuccess = createAction(
  '[Auth] Register user success',
  props<{ response: RegisterResponse }>()
);

export const registerUserError = createAction(
  '[Auth] Register user error',
  props<{ errors: string }>()
);
