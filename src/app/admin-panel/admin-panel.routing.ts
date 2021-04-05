import { RolesComponent } from "./roles/roles.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel.component";

const routes: Routes = [
  {
    path: "",
    component: AdminPanelComponent,
    data: { breadcrumbs: "admin-panel.admin-panel" },
    children: [
      {
        path: "Roles",
        component: RolesComponent,
        data: { breadcrumbs: "admin-panel.menu.roles" }
      },
      {
        path: "Users",
        data: { breadcrumbs: "admin-panel.menu.accounts" },
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {}
