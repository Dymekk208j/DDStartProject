import { ICellRendererParams } from 'ag-grid-community';

export default interface IActionsCellRendererParams
  extends ICellRendererParams {
  onDetailsClick: (id: string) => void;
  onEditClick: (id: string) => void;
  onBlockClick: (id: string) => void;
  onUnblockClick: (id: string) => void;
  onRemoveClick: (id: string) => void;
  onResendClick: (id: string) => void;
}
