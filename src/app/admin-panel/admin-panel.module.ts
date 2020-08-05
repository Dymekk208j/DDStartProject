import { AdminPanelRoutingModule } from './admin-panel.routing';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { adminPanelReducer } from './state/admin-panel.reducer';
// NgRx
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [AdminPanelComponent, UsersComponent, RolesComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('adminPanelState', adminPanelReducer),
    AdminPanelRoutingModule,
  ],
})
export class AdminPanelModule {}
