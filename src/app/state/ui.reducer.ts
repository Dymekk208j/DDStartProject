import { IUiState } from "./ui.state";
import { createReducer, on } from "@ngrx/store";
import { UiInitialState } from "./ui.initialState";
import * as UiActions from "./ui.actions";

export const uiReducer = createReducer<IUiState>(
  UiInitialState,
  on(
    UiActions.showWarningToastr,
    (state, params): IUiState => {
      return {
        ...state
      };
    }
  ),
  on(
    UiActions.showSuccessToastr,
    (state, params): IUiState => {
      return {
        ...state
      };
    }
  ),
  on(
    UiActions.showErrorToastr,
    (state, params): IUiState => {
      return {
        ...state
      };
    }
  ),
  on(
    UiActions.showInfoToastr,
    (state, params): IUiState => {
      return {
        ...state
      };
    }
  )
);
