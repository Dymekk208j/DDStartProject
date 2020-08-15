import { IAdminPanelState } from './admin-panel.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAdminFeatureState = createFeatureSelector<IAdminPanelState>(
  'adminPanelState'
);

export const getMyTestText = createSelector(
  getAdminFeatureState,
  (sliceState) => sliceState.myTestText
);
