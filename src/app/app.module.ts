import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import { UiEffects } from "./state/ui.effects";
import { uiReducer } from "./state/ui.reducer";
import { MatPaginatorI18nService } from "./shared/MatPaginatorI18n.Service";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ErrorsPagesModule } from "./errors-pages/errors-pages.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "./shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { ToastrModule } from "ngx-toastr";
import { authReducer } from "./auth-pages/state/auth.reducer";
import { AuthEffects } from "./auth-pages/state/auth.effects";
import { MatMenuModule } from "@angular/material/menu";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    ErrorsPagesModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    StoreModule.forFeature("authState", authReducer),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature("uiState", uiReducer),
    EffectsModule.forFeature([UiEffects])
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorI18nService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
