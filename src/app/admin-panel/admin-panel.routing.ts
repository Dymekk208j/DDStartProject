import { RolesComponent } from './roles/roles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: '',
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
        data: { breadcrumbs: 'users' },
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      // {
      //   path: 'Users',
      //   component: RolesComponent,
      //   data: { breadcrumbs: 'users' },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
