import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PpBreadcrumbsService, Breadcrumb } from 'pp-breadcrumbs';
@Component({
  selector: 'dds-admin-panel-header',
  templateUrl: './admin-panel-header.component.html',
  styleUrls: ['./admin-panel-header.component.scss'],
})
export class AdminPanelHeaderComponent {
  crumb$: Observable<Breadcrumb[]>;

  constructor(PpBreadcrumbsService: PpBreadcrumbsService) {
    this.crumb$ = PpBreadcrumbsService.crumbs$;
  }
}
