import { Component } from "@angular/core";
import IActionsCellRendererParams from "./IActionsCellRendererParams";
import { ICellRendererParams, IAfterGuiAttachedParams } from "ag-grid-community";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "actions-cell-renderer",
  templateUrl: "./ActionsCellRenderer.html"
})
export class ActionsCellRenderer implements ICellRendererAngularComp {
  public params!: IActionsCellRendererParams;

  constructor(private translate: TranslateService) {}

  refresh(params: ICellRendererParams): boolean {
    throw new Error("Method not implemented.");
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error("Method not implemented.");
  }

  agInit(params: IActionsCellRendererParams): void {
    this.params = params;
  }

  btnDetailsClickedHandler() {
    this.params.onDetailsClick(this.params.data.id);
  }

  btnBlockClickedHandler() {
    this.params.onBlockClick(this.params.data);
  }

  btnUnblockClickedHandler() {
    this.params.onUnblockClick(this.params.data.Id);
  }

  btnRemoveClickedHandler() {
    this.params.onRemoveClick(this.params.data);
  }
}
