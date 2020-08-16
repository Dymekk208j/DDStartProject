import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
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
        component: UserComponent,
        data: { breadcrumbs: 'accounts' },
        children: [
          {
            path: '',
            component: UserListComponent,
            data: { breadcrumbs: 'users.list' },
          },
          {
            path: 'List',
            component: UserListComponent,
            data: { breadcrumbs: 'users.list' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
