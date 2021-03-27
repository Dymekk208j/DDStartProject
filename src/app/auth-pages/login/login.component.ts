import { TranslateService } from '@ngx-translate/core';
import { LoginRequest } from './../dto/requests/loginRequest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../state/auth.state';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter, take } from 'rxjs/operators';

import * as AuthActions from './../state/auth.actions';
import { ToastrService } from 'ngx-toastr';

import {
  getIsUserLoggedInformation,
  getLoggedUser,
  getLoginUserResult,
} from './../state/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'dds-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;
  public rememberMe: boolean;

  public isUserLogged: boolean;
  getLoginUserResult$: Observable<boolean | null>;
  userLogged$: Observable<boolean | null>;

  constructor(
    private store: Store<State>,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.store
      .select(getIsUserLoggedInformation)
      .pipe(take(1))
      .subscribe((isUserLogged) => (this.isUserLogged = isUserLogged));

    if (this.isUserLogged) this.router.navigateByUrl(`/`);

    this.getLoginUserResult$ = this.store.select(getLoginUserResult);

    this.userLogged$ = this.store.select(getIsUserLoggedInformation);
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.resetStatuses());

    this.getLoginUserResult$
      .pipe(filter((t) => t !== null))
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.toastr.success(this.translate.instant('login-page.user-logged'));
          this.router.navigateByUrl(`/`);
        } else
          this.toastr.error(
            this.translate.instant('login-page.user-login-has-occurred-problem')
          );
      });
  }

  signIn(): void {
    var request: LoginRequest = {
      Login: this.login,
      Password: this.password,
      RememberMe: false,
    };

    this.store.dispatch(AuthActions.loginUser({ request: request }));

    this.store
      .select(getIsUserLoggedInformation)
      .pipe(take(1))
      .subscribe((isUserLogged) => (this.isUserLogged = isUserLogged));

    this.store
      .select(getLoggedUser)
      .pipe(take(1))
      .subscribe((isUserLogged) => console.log('user loged:', isUserLogged));
  }
}
