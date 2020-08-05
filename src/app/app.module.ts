import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorsPagesModule } from './errors-pages/errors-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from '@progress/kendo-angular-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, AdminMenuComponent],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    ErrorsPagesModule,
    MenuModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    AdminPanelModule,
    AppRoutingModule,
    DropDownsModule,
    MatExpansionModule,
    MatListModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
