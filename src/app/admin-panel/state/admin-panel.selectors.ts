import { IAdminPanelState } from './IAdminPanelState';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAdminFeatureState = createFeatureSelector<IAdminPanelState>(
  'adminPanelState'
);

export const getMyTestText = createSelector(
  getAdminFeatureState,
  (sliceState) => sliceState.myTestText
);
