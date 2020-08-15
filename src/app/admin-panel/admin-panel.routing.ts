import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: 'Admin',
    component: AdminPanelComponent,
    data: { breadcrumbs: 'admin-panel' },
    children: [
      {
        path: 'Roles',
        component: RolesComponent,
        data: { breadcrumbs: 'roles' },
      },
      {
        path: 'Users',
        component: UsersComponent,
        data: { breadcrumbs: 'accounts' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
