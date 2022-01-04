import { TranslateService } from "@ngx-translate/core";
import { ICellRendererParams, SetFilterValuesFuncParams } from "ag-grid-community";

export class BooleanFilterParams {
  constructor(private translate: TranslateService) {}

  FilterParams = {
    values: (params: SetFilterValuesFuncParams) => {
      var values = ["1", "0"];
      params.success(values);
    },
    cellRenderer: (params: ICellRendererParams) => {
      console.log(params.value);
      if (params.value === "(Select All)") return this.translate.instant("AgGrid.Filter.(Select All)");
      return this.translate.instant("boolean." + `${!!+params.value}`);
    }
  };
}
