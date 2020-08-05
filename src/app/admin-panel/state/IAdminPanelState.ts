import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  adminPanelState: IAdminPanelState;
}

export interface IAdminPanelState {
  myTestText: string;
}
