import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth-pages/login/login.component';
import { RegisterComponent } from './auth-pages/register/register.component';
import { ResetComponent } from './auth-pages/reset/reset.component';

const routes: Routes = [
  {
    path: 'Admin',
    loadChildren: () =>
      import('./admin-panel/admin-panel.module').then(
        (m) => m.AdminPanelModule
      ),
  },
  {
    path: 'Auth',
    loadChildren: () =>
      import('./auth-pages/auth-pages.module').then((m) => m.AuthPagesModule),
  },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
