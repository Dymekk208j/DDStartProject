import { Gender } from "./../../../shared/enums/gender";
import { UserService } from "./../service/user.service";
import { User } from "./../models/user";
import { Router } from "@angular/router";
import { ActionsCellRenderer } from "./ActionsCellRenderer/ActionsCellRenderer";
import { FilterHelper } from "./../../../shared/helpers/FilterHelper";
import { State } from "./../../../state/app.state";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import { GridOptions, ICellRendererParams, IServerSideGetRowsParams, ColDef } from "ag-grid-community";
import { LoadUsersSuccessParams } from "../models/LoadUsersSuccessParams";
import { TranslateService } from "@ngx-translate/core";
import moment from "moment";
import { MatDialog } from "@angular/material/dialog";
import { BlockUserDialogComponent } from "./components/block-user-dialog/block-user-dialog.component";
import { RemoveUserDialogComponent } from "./components/remove-user-dialog/remove-user-dialog.component";
import { AgGridRequest } from 'src/app/shared/ag-grid/models/AgGridRequest';

@Component({
  selector: "dds-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  userList$!: Observable<LoadUsersSuccessParams>;
  columnDefs!: ColDef[];
  gridOptions!: GridOptions;

  constructor(private store: Store<State>, private translate: TranslateService, private router: Router, public dialog: MatDialog, private service: UserService) {
    this.translate.onLangChange.subscribe(() => {
      if (this!.gridOptions.api) {
        this!.gridOptions.api.refreshHeader();
        this!.gridOptions.api.redrawRows();
      }
    });
  }

  ngOnInit(): void {
    this.columnDefs = [
      {
        field: "userName",
        headerName: "Name",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          defaultOption: "startsWith"
        }
      },
      {
        field: "firstName",
        headerName: "firstName",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          defaultOption: "startsWith"
        }
      },
      {
        field: "lastName",
        headerName: "lastName",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          defaultOption: "startsWith"
        }
      },
      // {
      //   field: "role",
      //   headerName: "Role",
      //   headerValueGetter: this.localizeHeader.bind(this),
      //   sortable: true,
      //   filter: true,
      //   filterParams: {
      //     values: (params: any) => {
      //       var values = [];
      //       for (let item in Role) {
      //         if (isNaN(Number(item))) {
      //           values.push(this.translate.instant("users.role." + item));
      //         }
      //       }
      //       params.success(values);
      //     }
      //   },
      //   cellRenderer: (params) => {
      //     return this.translate.instant("users.role." + Role[params.data.Role]);
      //   }
      // },
      {
        field: "Gender",
        headerName: "Gender",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: true,
        filterParams: {
          values: (params: any) => {
            var values = [];
            for (let item in Gender) {
              if (isNaN(Number(item))) {
                values.push(this.translate.instant("enums.gender." + item));
              }
            }
            params.success(values);
          }
        },
        cellRenderer: (params) => {
          return this.translate.instant("enums.gender." + Gender[params.data.gender]);
        }
      },
      {
        field: "emailConfirmed",
        headerName: "emailConfirmed",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: true,
        valueFormatter: (data) => {
          return this.translate.instant("boolean." + data.value.toString());
        }
      },
      {
        field: "blocked",
        headerName: "Blocked",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        valueFormatter: (data) => {
          return this.translate.instant("boolean." + data.value.toString());
        }
      },
      {
        field: "registrationDateUTC",
        headerName: "RegistrationDate",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: true,
        filter: "agDateColumnFilter",
        filterParams: FilterHelper.dateFilterParams,
        valueFormatter: (data) => {
          return moment(data.value).format("DD/MM/YYYY HH:mm").toString();
        }
      },
      {
        headerName: "Actions",
        headerValueGetter: this.localizeHeader.bind(this),
        sortable: false,
        filter: false,
        pinned: "right",
        suppressMenu: true,
        suppressMovable: true,
        cellRenderer: "actionsCellRenderer",
        minWidth: 160,
        maxWidth: 160,
        cellRendererParams: {
          onDetailsClick: (id: string) => {
            this.router.navigateByUrl(`/Admin/Users/Details/${id}`);
          },
          onEditClick: (id: string) => {
            alert(`${id} was clicked onEditClick`);
          },
          onBlockClick: (user: User) => {
            const dialogRef = this.dialog.open(BlockUserDialogComponent, {
              width: "500px",
              data: user
            });
            dialogRef.afterClosed().subscribe((result) => {
              console.log("The dialog was closed");
              //TODO: Dodać wykrywanie czy został wciśnięty przycisk zablokuj
              // this.gridOptions.api.refreshServerSideStore({ purge: true });
            });
          },
          onUnblockClick: (id: string) => {
            alert(`${id} was clicked onUnblockClick`);
          },
          onRemoveClick: (user: User) => {
            const dialogRef = this.dialog.open(RemoveUserDialogComponent, {
              width: "500px",
              data: user
            });
            dialogRef.afterClosed().subscribe((result) => {
              console.log("The dialog was closed");
              //TODO: Dodać wykrywanie czy został wciśnięty przycisk zablokuj
              // this.gridOptions.api.refreshServerSideStore({ purge: true });
            });
          },
          onResendClick: (id: string) => {
            alert(`${id} was clicked onResendClick`);
          }
        }
      }
    ];

    this.gridOptions = <GridOptions>{
      enableRangeSelection: true,
      columnDefs: this.columnDefs,
      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      },
      onPaginationChanged(params) {
        params.api.sizeColumnsToFit();
      },
      rowModelType: "serverSide",
      serverSideStoreType: "partial",
      serverSideDatasource: this.dataSource,
      frameworkComponents: {
        actionsCellRenderer: ActionsCellRenderer
      },
      cacheBlockSize: 20,
      pagination: true,
      paginationPageSize: 20,
      suppressPaginationPanel: true,
      getContextMenuItems: this.getContextMenuItems,
      rowHeight: 38
    };
  }

  dataSource = {
    getRows: async (params: IServerSideGetRowsParams) => {
      let response = await this.service.fetchUserList(new AgGridRequest(params.request)).toPromise();
      params.successCallback(response.rowData, response.rowCount ?? 0);
    }
  };

  public localizeHeader(parameters: ICellRendererParams): string {
    let headerIdentifier = parameters.colDef.headerName;

    return this.translate.instant("users.header." + headerIdentifier);
  }

  public getContextMenuItems() {
    return ["copy"];
  }
}
