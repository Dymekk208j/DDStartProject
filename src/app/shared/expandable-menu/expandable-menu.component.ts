import { MenuItem } from './menu-item';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dds-expandable-menu',
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss'],
})
export class ExpandableMenuComponent {
  @Input() Items: MenuItem[];
  @Input() Header: string;
  @Input() HeaderIcon: string;
}
