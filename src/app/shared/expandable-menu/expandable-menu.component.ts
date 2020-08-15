import { MenuItem } from './menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dds-expandable-menu',
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss'],
})
export class ExpandableMenuComponent implements OnInit {
  @Input() Header: string;
  @Input() Items: MenuItem[];
  @Input() HeaderIcon: string;

  constructor() {}

  ngOnInit(): void {}
}
