import { PasswordRulesDirective, MustMatchDirective } from "./Validators";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CustomPaginationComponent } from "./custom-pagination/custom-pagination.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [CustomPaginationComponent, MustMatchDirective, PasswordRulesDirective],
  imports: [HttpClientModule, MatButtonModule, MatTooltipModule, MatIconModule, MatPaginatorModule, CommonModule, RouterModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    FormsModule,
    CustomPaginationComponent,
    MatFormFieldModule,
    MatInputModule,
    MustMatchDirective,
    PasswordRulesDirective,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
