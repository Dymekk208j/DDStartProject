import { ResetComponent } from './../auth-pages/reset/reset.component';
import { RegisterComponent } from './../auth-pages/register/register.component';
import { LoginComponent } from './../auth-pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    data: { breadcrumbs: 'admin-panel' },
    children: [
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'Remind', component: ResetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPagesRoutingModule {}
