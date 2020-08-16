import { IAdminPanelState } from './../../state/admin-panel.state';

export interface State extends IAdminPanelState {
  userState: IUserState;
}

export interface IUserState {
  myTestText: string;
}
