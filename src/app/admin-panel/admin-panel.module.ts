import { ExpandableMenuModule } from './../shared/expandable-menu.module';
import { MatButtonModule } from '@angular/material/button';
import { AdminPanelEffects } from './state/admin-panel.effects';
import { EffectsModule } from '@ngrx/effects';
import { AdminPanelRoutingModule } from './admin-panel.routing';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { adminPanelReducer } from './state/admin-panel.reducer';

import { RolesComponent } from './roles/roles.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { AdminPanelHeaderComponent } from './admin-panel-header/admin-panel-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { PpBreadcrumbsModule } from 'pp-breadcrumbs';

// NgRx
import { StoreModule } from '@ngrx/store';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AdminPanelComponent,
    RolesComponent,
    AdminMenuComponent,
    AdminPanelHeaderComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    AdminPanelRoutingModule,
    CommonModule,
    StoreModule.forFeature('adminPanelState', adminPanelReducer),
    EffectsModule.forFeature([AdminPanelEffects]),
    DropDownsModule,
    MatExpansionModule,
    MatListModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    ExpandableMenuModule,
    PpBreadcrumbsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class AdminPanelModule {}
