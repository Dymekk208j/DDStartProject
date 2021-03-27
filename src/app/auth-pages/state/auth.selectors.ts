import { IAuthState } from './auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAuthFeatureState = createFeatureSelector<IAuthState>('authState');

export const getIsUserLoggedInformation = createSelector(
  getAuthFeatureState,
  (sliceState) => sliceState.isUserLogged
);

export const getLoggedUser = createSelector(
  getAuthFeatureState,
  (sliceState) => sliceState.loggedUser
);

export const getLoginUserResult = createSelector(
  getAuthFeatureState,
  (sliceState) => sliceState.loginUserResult
);

export const getRegisterUserResult = createSelector(
  getAuthFeatureState,
  (sliceState) => sliceState.registerUserResult
);
