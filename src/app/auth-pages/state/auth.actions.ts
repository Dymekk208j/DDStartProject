import { LoginResponse } from './../dto/responses/loginResponse';
import { LoginRequest } from './../dto/requests/loginRequest';
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/admin-panel/user/models/user';

export const loginUser = createAction(
  '[Auth] Login user',
  props<{ request: LoginRequest }>()
);

// export const fetchMyTestText = createAction('[Admin] Fetch myTestText');
export const resetStatuses = createAction('[Auth] Reset statuses');

export const loginUserSuccess = createAction(
  '[Auth] Login user success',
  props<{ response: LoginResponse }>()
);

export const loginUserError = createAction(
  '[Auth] Login user error',
  props<{ errors: string }>()
);
