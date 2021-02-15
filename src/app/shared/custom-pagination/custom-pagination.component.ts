import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'dds-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent implements OnInit {
  @Input() gridOptions: GridOptions;
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100];

  page: number;
  pageSize: number;
  totalPages: number;
  rowCount: number;
  pageEvent: PageEvent = new PageEvent();

  constructor() {}

  ngOnInit(): void {
    this.gridOptions.onPaginationChanged = () => this.onPaginationChanged();
  }

  onPaginatorEvent(pageEvent: PageEvent) {
    if (this.pageEvent.pageSize !== pageEvent.pageSize)
      this.gridOptions.api.paginationSetPageSize(pageEvent.pageSize);

    this.pageEvent = pageEvent;

    if (pageEvent.previousPageIndex > this.pageEvent.pageIndex)
      this.gridOptions.api.paginationGoToPreviousPage();

    if (pageEvent.previousPageIndex < this.pageEvent.pageIndex)
      this.gridOptions.api.paginationGoToNextPage();
    return pageEvent;
  }

  onPaginationChanged() {
    if (this.gridOptions.api) {
      this.page = this.gridOptions.api.paginationGetCurrentPage();
      this.totalPages = this.gridOptions.api.paginationGetTotalPages();
      this.rowCount = this.gridOptions.api.paginationGetRowCount();
    }
  }
}
