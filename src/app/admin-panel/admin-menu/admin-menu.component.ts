import { MenuItem } from '../../shared/expandable-menu/menu-item';
import { Component } from '@angular/core';

@Component({
  selector: 'dds-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss'],
})
export class AdminMenuComponent {
  public UsersMenuItems: MenuItem[] = [
    {
      icon: 'people',
      name: 'accounts',
      url: '/Admin/Users',
    },
    {
      icon: 'how_to_reg',
      name: 'roles',
      url: '/Admin/Roles',
    },
  ];

  constructor() {}
}
