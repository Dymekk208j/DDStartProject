import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './user.state';

const getUserFeatureState = createFeatureSelector<IUserState>('userState');

export const getMyTestText = createSelector(
  getUserFeatureState,
  (sliceState) => sliceState.myTestText
);
