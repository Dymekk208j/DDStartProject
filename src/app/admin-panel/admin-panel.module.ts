import { UserModule } from "./user/user.module";
import { ExpandableMenuModule } from "./../shared/expandable-menu.module";
import { AdminPanelEffects } from "./state/admin-panel.effects";
import { EffectsModule } from "@ngrx/effects";
import { AdminPanelRoutingModule } from "./admin-panel.routing";
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPanelComponent } from "./admin-panel.component";
import { adminPanelReducer } from "./state/admin-panel.reducer";

import { RolesComponent } from "./roles/roles.component";
import { AdminMenuComponent } from "./admin-menu/admin-menu.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { AdminPanelHeaderComponent } from "./admin-panel-header/admin-panel-header.component";
import { MatMenuModule } from "@angular/material/menu";
import { PpBreadcrumbsModule } from "pp-breadcrumbs";

// NgRx
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [AdminPanelComponent, RolesComponent, AdminMenuComponent, AdminPanelHeaderComponent],
  imports: [
    AdminPanelRoutingModule,
    CommonModule,
    StoreModule.forFeature("adminPanelState", adminPanelReducer),
    EffectsModule.forFeature([AdminPanelEffects]),
    MatExpansionModule,
    MatListModule,
    SharedModule,
    MatMenuModule,
    ExpandableMenuModule,
    PpBreadcrumbsModule,
    UserModule
  ]
})
export class AdminPanelModule {}
