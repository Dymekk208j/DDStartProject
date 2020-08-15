import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorsPagesModule } from './errors-pages/errors-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    AdminPanelModule,
    BrowserModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    ErrorsPagesModule,
    DropDownsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
