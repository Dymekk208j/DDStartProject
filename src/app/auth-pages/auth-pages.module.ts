import { AuthComponent } from './auth.component';
import { AuthPagesRoutingModule } from './auth-pages.routing';
import { ResetComponent } from './../auth-pages/reset/reset.component';
import { RegisterComponent } from './../auth-pages/register/register.component';
import { LoginComponent } from './../auth-pages/login/login.component';
import { ExpandableMenuModule } from './../shared/expandable-menu.module';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authReducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { PpBreadcrumbsModule } from 'pp-breadcrumbs';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
  ],
  imports: [
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    AuthPagesRoutingModule,
    CommonModule,
    StoreModule.forFeature('authState', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    MatExpansionModule,
    MatListModule,
    SharedModule,
    MatMenuModule,
    ExpandableMenuModule,
    PpBreadcrumbsModule,
  ],
})
export class AuthPagesModule {}
