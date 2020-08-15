import { ExpandableMenuComponent } from './expandable-menu/expandable-menu.component';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ExpandableMenuComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ExpandableMenuComponent],
})
export class ExpandableMenuModule {}
