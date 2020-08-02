import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: 'Admin',
    component: AdminPanelComponent,
    data: {
      title: 'Administration Panel',
    },
    children: [
      { path: 'Roles', component: RolesComponent },
      { path: 'Users', component: UsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
