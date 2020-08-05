import { AdminPanelInitialState } from './admin-panel.initialState';
import { IAdminPanelState } from './IAdminPanelState';
import { createReducer, on } from '@ngrx/store';
import * as AdminPanelActions from './admin-panel.actions';

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
  )
);
