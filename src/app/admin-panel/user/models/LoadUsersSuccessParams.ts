import { User } from './user';
import { LoadSuccessParams } from 'ag-grid-community/dist/lib/rowNodeCache/rowNodeBlock';

export class LoadUsersSuccessParams implements LoadSuccessParams {
  rowData: User[];
  rowCount?: number;
  storeInfo?: any;
}
