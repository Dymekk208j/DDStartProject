import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CustomPaginationComponent],
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    CustomPaginationComponent,
  ],
})
export class SharedModule {}
