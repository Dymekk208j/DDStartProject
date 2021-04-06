import { LoginRequest } from "./../dto/requests/loginRequest";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "../state/auth.state";
import { take } from "rxjs/operators";

import * as AuthActions from "./../state/auth.actions";

import { getIsUserLoggedInformation } from "./../state/auth.selectors";
import { Observable } from "rxjs";

@Component({
  selector: "dds-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public login: string;
  public password: string;
  public rememberMe: boolean = true;

  public isUserLogged: boolean;
  userLogged$: Observable<boolean | null>;

  constructor(private store: Store<State>, private router: Router) {
    this.store
      .select(getIsUserLoggedInformation)
      .pipe(take(1))
      .subscribe((isUserLogged) => (this.isUserLogged = isUserLogged));

    if (this.isUserLogged) this.router.navigateByUrl(`/`);

    this.userLogged$ = this.store.select(getIsUserLoggedInformation);
  }

  signIn(): void {
    var request: LoginRequest = {
      Login: this.login,
      Password: this.password,
      RememberMe: this.rememberMe
    };

    this.store.dispatch(AuthActions.loginUser({ request: request }));

    this.store
      .select(getIsUserLoggedInformation)
      .pipe(take(1))
      .subscribe((isUserLogged) => {
        this.isUserLogged = isUserLogged;
      });
  }
}
