import * as AppState from "./app.state";

export interface State extends AppState.State {
  uiState: IUiState;
}

export interface IUiState {}
