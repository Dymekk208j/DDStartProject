import { AdminPanelInitialState } from './admin-panel.initialState';
import { createReducer, on } from '@ngrx/store';
import * as AdminPanelActions from './admin-panel.actions';
import { IAdminPanelState } from './admin-panel.state';

export const adminPanelReducer = createReducer<IAdminPanelState>(
  AdminPanelInitialState,
  on(
    AdminPanelActions.setMyTestText,
    (state, params): IAdminPanelState => {
      return {
        ...state,
        myTestText: params.text,
      };
    }
  ),
  on(
    AdminPanelActions.fetchMyTestTextSuccess,
    (state, params): IAdminPanelState => {
      return {
        ...state,
        myTestText: params.text,
      };
    }
  ),
  on(
    AdminPanelActions.fetchMyTestTextError,
    (state, params): IAdminPanelState => {
      return {
        ...state,
        myTestText: 'error',
      };
    }
  )
);
