import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    FormsModule,
  ],
})
export class SharedModule {}
