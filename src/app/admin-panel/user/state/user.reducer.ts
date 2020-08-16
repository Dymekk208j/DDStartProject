import { UserStateInitialState } from './user.initialState';
import { createReducer, on } from '@ngrx/store';
import * as AdminPanelActions from './user.actions';
import { IUserState } from './user.state';

export const userReducer = createReducer<IUserState>(
  UserStateInitialState,
  on(
    AdminPanelActions.setMyTestText,
    (state, params): IUserState => {
      return {
        ...state,
        myTestText: params.text,
      };
    }
  ),
  on(
    AdminPanelActions.fetchMyTestTextSuccess,
    (state, params): IUserState => {
      return {
        ...state,
        myTestText: params.text,
      };
    }
  ),
  on(
    AdminPanelActions.fetchMyTestTextError,
    (state, params): IUserState => {
      return {
        ...state,
        myTestText: 'error',
      };
    }
  )
);
