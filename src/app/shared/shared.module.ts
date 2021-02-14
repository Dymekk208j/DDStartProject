import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
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
  ],
})
export class SharedModule {}
