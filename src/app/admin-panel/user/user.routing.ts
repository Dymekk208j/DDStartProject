import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
        data: { breadcrumbs: 'users.list.list' },
      },
      {
        path: 'List',
        component: UserListComponent,
        data: { breadcrumbs: 'users.list.list' },
      },
      {
        path: 'Details/:Id',
        component: UserDetailsComponent,
        data: { breadcrumbs: 'users.details.details' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
