import { FormattedFilterModel } from './FormattedFilterModel';
import { ColumnVO, IServerSideGetRowsRequest } from 'ag-grid-community';

export class AgGridRequest {
  private startRow: number;
  private endRow: number;
  private rowGroupCols: ColumnVO[];
  private valueCols: ColumnVO[];
  private pivotCols: ColumnVO[];
  private pivotMode: boolean;
  private groupKeys: string[];
  private filterModel: any;

  private formatFilterModel(filterModel: any){
    var aryFilter = [];
    var objChild: FormattedFilterModel = { Head: {field: "", operate: ""}, condition: "" };
    var aryCondition = [];
    for (var filter in filterModel) {
        if (filterModel[filter].operator) {
            objChild.Head = { field: filter, operate: filterModel[filter].operator };

            if (filterModel[filter].condition1)
                aryCondition.push(filterModel[filter].condition1);
            if (filterModel[filter].condition2)
                aryCondition.push(filterModel[filter].condition2);
        }
        else {
            objChild.Head = { field: filter, operate:"" };
            aryCondition.push(filterModel[filter]);
        }
        objChild.condition = aryCondition;
        aryFilter.push(objChild);
        aryCondition = [];
        objChild = { Head: {field: "", operate: ""}, condition: "" };
    }

    return aryFilter;
  }
  sortModel: any;

  constructor(request: IServerSideGetRowsRequest){
    this.startRow = request.startRow;
    this.endRow = request.endRow
    this.rowGroupCols = request.rowGroupCols;
    this.valueCols = request.valueCols;
    this.pivotCols = request.pivotCols;
    this.pivotMode = request.pivotMode;
    this.groupKeys = request.groupKeys;
    this.filterModel = this.formatFilterModel(request.filterModel);
    this.sortModel = request.sortModel;
  }
}
