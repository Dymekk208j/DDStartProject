import { MatSelectModule } from '@angular/material/select';
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
import { UserDetailsComponent } from './user-details/user-details.component';
import { BlockUserDialogComponent } from './user-list/components/block-user-dialog/block-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    BlockUserDialogComponent,
    UserComponent,
    UserListComponent,
    ActionsCellRenderer,
    UserDetailsComponent,
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    StoreModule.forFeature('userState', userReducer),
    EffectsModule.forFeature([UserEffects]),
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
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
