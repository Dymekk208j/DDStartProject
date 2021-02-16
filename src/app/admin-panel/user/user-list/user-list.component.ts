import { User } from './../models/user';
import { Router } from '@angular/router';
import { ActionsCellRenderer } from './ActionsCellRenderer/ActionsCellRenderer';
import { FilterHelper } from './../../../shared/helpers/FilterHelper';
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
  ColDef,
} from 'ag-grid-community';
import { LoadUsersSuccessParams } from '../models/LoadUsersSuccessParams';
import { TranslateService } from '@ngx-translate/core';
import { Role } from '../models/role';
import moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { BlockUserDialogComponent } from './components/block-user-dialog/block-user-dialog.component';

@Component({
  selector: 'dds-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: Observable<LoadUsersSuccessParams>;
  columnDefs: ColDef[];
  gridOptions: GridOptions;

  constructor(
    private store: Store<State>,
    private translate: TranslateService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.translate.onLangChange.subscribe(() => {
      this.gridOptions.api.refreshHeader();
      this.gridOptions.api.redrawRows();
    });
  }

  ngOnInit(): void {
    this.userList$ = this.store.select(getUsers);

    this.columnDefs = [
      {
        field: 'Name',
        headerName: 'Name',
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: 'agTextColumnFilter',
        filterParams: {
          defaultOption: 'startsWith',
        },
      },
      {
        field: 'Role',
        headerName: 'Role',
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: true,
        filterParams: {
          values: (params) => {
            var values = [];
            for (let item in Role) {
              if (isNaN(Number(item))) {
                values.push(this.translate.instant('users.role.' + item));
              }
            }
            params.success(values);
          },
        },
        cellRenderer: (params) => {
          return this.translate.instant('users.role.' + Role[params.data.Role]);
        },
      },
      {
        field: 'Verified',
        headerName: 'Verified',
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: true,
        valueFormatter: (data) => {
          return this.translate.instant('boolean.' + data.value.toString());
        },
      },
      {
        field: 'Blocked',
        headerName: 'Blocked',
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        valueFormatter: (data) => {
          return this.translate.instant('boolean.' + data.value.toString());
        },
      },
      {
        field: 'RegistrationDate',
        headerName: 'RegistrationDate',
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: 'agDateColumnFilter',
        filterParams: FilterHelper.dateFilterParams,
        valueFormatter: (data) => {
          return moment(data.value).format('DD/MM/YYYY HH:mm').toString();
        },
      },
      {
        headerName: 'Actions',
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: false,
        filter: false,
        pinned: 'right',
        suppressMenu: true,
        suppressMovable: true,
        cellRenderer: 'actionsCellRenderer',
        minWidth: 240,
        maxWidth: 240,
        cellRendererParams: {
          onDetailsClick: (id: string) => {
            this.router.navigateByUrl(`/Admin/Users/Details/${id}`);
          },
          onEditClick: (id: string) => {
            alert(`${id} was clicked onEditClick`);
          },
          onBlockClick: (user: User) => {
            const dialogRef = this.dialog.open(BlockUserDialogComponent, {
              width: '500px',
              height: '350px',
              data: user,
            });
            dialogRef.afterClosed().subscribe((result) => {
              console.log('The dialog was closed');
              //TODO: Dodać wykrywanie czy został wciśnięty przycisk zablokuj
              // this.gridOptions.api.refreshServerSideStore({ purge: true });
            });
          },
          onUnblockClick: (id: string) => {
            alert(`${id} was clicked onUnblockClick`);
          },
          onRemoveClick: (id: string) => {
            alert(`${id} was clicked onRemoveClick`);
          },
          onResendClick: (id: string) => {
            alert(`${id} was clicked onResendClick`);
          },
        },
      },
    ];

    this.gridOptions = <GridOptions>{
      enableRangeSelection: true,
      columnDefs: this.columnDefs,
      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      },
      rowModelType: 'serverSide',
      serverSideStoreType: 'partial',
      serverSideDatasource: this.dataSource,
      frameworkComponents: {
        actionsCellRenderer: ActionsCellRenderer,
      },
      cacheBlockSize: 10,
      pagination: true,
      paginationPageSize: 10,
      suppressPaginationPanel: true,
    };
  }

  dataSource = {
    getRows: (params: IServerSideGetRowsParams) => {
      this.store.dispatch(UserActions.fetchUsers({ request: params.request }));

      let rowData: LoadUsersSuccessParams;
      this.userList$.subscribe((variants) => (rowData = variants));

      var rowsThisPage = rowData.rowData;
      var lastRow = rowData.rowCount;
      params.successCallback(rowsThisPage, lastRow);
    },
  };

  public localizeHeader(parameters: ICellRendererParams): string {
    let headerIdentifier = parameters.colDef.headerName;

    return this.translate.instant('users.header.' + headerIdentifier);
  }
}
