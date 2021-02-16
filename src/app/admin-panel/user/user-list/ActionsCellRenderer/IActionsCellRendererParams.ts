import { ICellRendererParams } from 'ag-grid-community';
import { User } from '../../models/user';

export default interface IActionsCellRendererParams
  extends ICellRendererParams {
  onDetailsClick: (id: string) => void;
  onEditClick: (id: string) => void;
  onBlockClick: (user: User) => void;
  onUnblockClick: (id: string) => void;
  onRemoveClick: (id: string) => void;
  onResendClick: (id: string) => void;
}
