import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, filter, scan } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { getIsUserLoggedInformation } from './auth-pages/state/auth.selectors';
import { Store } from '@ngrx/store';
import { State } from './auth-pages/state/auth.state';
import * as AuthActions from './auth-pages/state/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isAdminPanel = false;
  // public isUserLogged: boolean;

  public userLogged$: Observable<boolean | null>;

  title = 'DDStartProject';
  public selectedLang: string;
  public administratorRole: boolean = true;

  constructor(
    public translateService: TranslateService,
    private router: Router,
    private store: Store<State>
  ) {
    this.store.dispatch(AuthActions.resetStatuses());

    this.userLogged$ = this.store.select(getIsUserLoggedInformation);

    translateService.addLangs(['en', 'pl']);
    translateService.setDefaultLang('en');
    const browserLanguage = translateService.getBrowserLang();
    this.selectedLang = browserLanguage.match(/en|pl/) ? browserLanguage : 'en';
    translateService.use(this.selectedLang);

    //TODO: Usuniecie subskrybcji i przenisienie do store
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isAdminPanel = event.url.startsWith('/Admin');
      });
  }
}
