import { Subscription } from "rxjs/internal/Subscription";
import { MenuItem } from "../../shared/expandable-menu/menu-item";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "dds-admin-menu",
  templateUrl: "./admin-menu.component.html",
  styleUrls: ["./admin-menu.component.scss"]
})
export class AdminMenuComponent implements OnInit, OnDestroy {
  public UsersMenuItems: MenuItem[] = [
    {
      icon: "people",
      name: "admin-panel.menu.accounts",
      url: "/Admin/Users"
    },
    {
      icon: "how_to_reg",
      name: "admin-panel.menu.roles",
      url: "/Admin/Roles"
    }
  ];

  public isSmallScreen: boolean = true;

  private screenSizeChangeSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.screenSizeChangeSubscription = this.breakpointObserver.observe(["(max-width: 1199px)"]).subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }
  ngOnDestroy(): void {
    this.screenSizeChangeSubscription.unsubscribe();
  }
}
