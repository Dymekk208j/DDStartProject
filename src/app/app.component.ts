import { Subscription } from "rxjs/internal/Subscription";
import { AuthService } from "src/app/auth-pages/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { getIsUserLoggedInformation, getLoggedUser } from "./auth-pages/state/auth.selectors";
import { Store } from "@ngrx/store";
import { State } from "./auth-pages/state/auth.state";
import * as AuthActions from "./auth-pages/state/auth.actions";
import { Observable } from "rxjs";
import { User } from "./auth-pages/models/user";
import jwt_decode from "jwt-decode";
import { JwtPayload } from "jwt-decode";
import moment, { Moment } from "moment";
import { OnDestroy } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  public isAdminPanel = false;
  // public isUserLogged: boolean;

  private tokenCheckerSubscription: Subscription;

  public userLogged$: Observable<boolean | null>;
  public user$: Observable<User | null>;

  title = "DDStartProject";
  public selectedLang: string;
  public administratorRole: boolean = true;

  constructor(public translateService: TranslateService, private router: Router, private store: Store<State>, private authService: AuthService) {
    this.userLogged$ = this.store.select(getIsUserLoggedInformation);

    translateService.addLangs(["en", "pl"]);
    translateService.setDefaultLang("en");
    const browserLanguage = translateService.getBrowserLang();
    this.selectedLang = browserLanguage.match(/en|pl/) ? browserLanguage : "en";
    translateService.use(this.selectedLang);

    //TODO: Usuniecie subskrybcji i przenisienie do store
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event) => {
      this.isAdminPanel = event.url.startsWith("/Admin");
    });
  }

  ngOnDestroy(): void {
    this.tokenCheckerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    let userInLocalStore: User | null = this.authService.restoreUserFromLocalStorage();
    if (userInLocalStore !== null) this.store.dispatch(AuthActions.restoreUser({ user: userInLocalStore }));
    this.user$ = this.store.select(getLoggedUser);

    this.tokenCheckerSubscription = this.user$.subscribe({
      next: (user) => {
        if (user != null) {
          let jwt: JwtPayload = jwt_decode(user.Token);
          console.log(jwt);

          if (jwt.exp) {
            const date = new Date(0);
            date.setUTCSeconds(jwt.exp);
            let isTokenExpired: boolean = moment(date).isBefore(moment());
            if (isTokenExpired) this.logOut();
          }
        }
      }
    });
  }

  logOut(): void {
    this.store.dispatch(AuthActions.logOutUser());
  }
}
