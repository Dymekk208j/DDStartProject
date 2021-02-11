import { State } from './../../../state/app.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as UserActions from './../state/user.actions';
import { getUsers } from './../state/user.selectors';
import {
  GridOptions,
  ICellRendererParams,
  IServerSideGetRowsParams,
} from 'ag-grid-community';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dds-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: Observable<LoadUsersSuccessParams>;
  columnDefs: any[];
  gridOptions: GridOptions;

  constructor(
    private store: Store<State>,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((e) => {
      this.gridOptions.api.refreshHeader();
    });
  }

  ngOnInit(): void {
    this.userList$ = this.store.select(getUsers);

    this.columnDefs = [
      {
        field: 'Id',
        headerName: 'Id',
        headerValueGetter: this.localizeHeader.bind(this),
      },
      {
        field: 'Name',
        headerName: 'Name',
        headerValueGetter: this.localizeHeader.bind(this),
      },
      {
        field: 'Role',
        headerName: 'Role',
        headerValueGetter: this.localizeHeader.bind(this),
      },
      {
        field: 'Verified',
        headerName: 'Verified',
        headerValueGetter: this.localizeHeader.bind(this),
      },
      {
        field: 'VerificationToken',
        headerName: 'VerificationToken',
        headerValueGetter: this.localizeHeader.bind(this),
      },
    ];

    this.gridOptions = <GridOptions>{
      enableRangeSelection: true,
      rowModelType: 'serverSide',
      columnDefs: this.columnDefs,
      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      },
      serverSideDatasource: this.dataSource,
    };
  }

  dataSource = {
    getRows: (params: IServerSideGetRowsParams) => {
      console.log('params', params);
      this.store.dispatch(UserActions.fetchUsers({ request: params.request }));

      let rowData: LoadUsersSuccessParams;
      this.userList$.subscribe((variants) => (rowData = variants));

      var rowsThisPage = rowData.rowData;
      var lastRow = rowData.rowCount;
      params.successCallback(rowsThisPage, lastRow);
    },
  };

  public localizeHeader(parameters: ICellRendererParams): string {
    let headerIdentifier = parameters.colDef.field;
    console.log('headerIdentifier', headerIdentifier);
    return this.translate.instant('users.header.' + headerIdentifier);
  }
}
