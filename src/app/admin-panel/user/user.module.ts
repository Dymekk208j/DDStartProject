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
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { AgGridModule } from 'ag-grid-angular';
import { ActionsCellRenderer } from './user-list/ActionsCellRenderer/ActionsCellRenderer';

@NgModule({
  declarations: [UserComponent, UserListComponent, ActionsCellRenderer],
  imports: [
    UserRoutingModule,
    CommonModule,
    StoreModule.forFeature('userState', userReducer),
    EffectsModule.forFeature([UserEffects]),
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AgGridModule.withComponents([]),
  ],
  exports: [UserComponent],
})
export class UserModule {}
