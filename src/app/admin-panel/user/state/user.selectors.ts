import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './user.state';

const getUserFeatureState = createFeatureSelector<IUserState>('userState');

export const getUsers = createSelector(
  getUserFeatureState,
  (sliceState) => sliceState.loadUsersSuccessParams
);

export const getUserBlockReasons = createSelector(
  getUserFeatureState,
  (sliceState) => sliceState.blockUserReasons
);
