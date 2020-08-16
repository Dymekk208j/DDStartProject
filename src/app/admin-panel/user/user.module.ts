import { UserRoutingModule } from './user.routing';
import { userReducer } from './state/user.reducer';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from './../../shared/shared.module';
import { UserEffects } from './state/user.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    StoreModule.forFeature('userState', userReducer),
    EffectsModule.forFeature([UserEffects]),
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}
