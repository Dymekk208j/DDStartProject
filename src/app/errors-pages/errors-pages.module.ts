import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';



@NgModule({
  declarations: [Page404Component, Page500Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '500', component: Page500Component},
      { path: '404', component: Page404Component},
    ])
  ]
})
export class ErrorsPagesModule { }
