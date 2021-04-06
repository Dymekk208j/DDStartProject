import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import * as AuthActions from "./auth.actions";
import * as UiActions from "../../state/ui.actions";

import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router, private translate: TranslateService) {}

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginUser),
      mergeMap((params) =>
        this.authService.loginUser(params.request).pipe(
          map((response) => AuthActions.loginUserSuccess({ response: response })),
          catchError((error) => of(AuthActions.loginUserError({ errors: error })))
        )
      )
    );
  });

  loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUserSuccess),
      tap((param) => {
        if (param.response.rememberMe) this.authService.saveUserDataToLocalStorage({ Id: param.response.id, Login: param.response.login, Token: param.response.token });
        this.router.navigateByUrl(`/`);
      }),
      map(() => UiActions.showSuccessToastr({ text: this.translate.instant("login-page.user-logged") }))
    )
  );

  loginUserError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginUserError),
        map(() => UiActions.showErrorToastr({ text: this.translate.instant("login-page.user-login-has-occurred-problem") }))
      ),
    { dispatch: false }
  );

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registerUser),
      mergeMap((params) =>
        this.authService.registerUser(params.request).pipe(
          map((response) => AuthActions.registerUserSuccess({ response: response, request: params.request })),
          catchError((error) => of(AuthActions.registerUserError({ errors: error })))
        )
      )
    );
  });

  registerUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUserSuccess),
      switchMap((params) => [
        UiActions.showSuccessToastr({ text: this.translate.instant("registration-page.user-created") }),
        AuthActions.loginUser({ request: { Login: params.request.UserName, Password: params.request.Password, RememberMe: false } })
      ])
    )
  );

  restoreUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.restoreUser),
      map((params) => AuthActions.restoreUserSuccess({ user: params.user }))
    );
  });

  logOutUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logOutUser),
      map(() => AuthActions.logOutUserSuccess())
    );
  });

  logOutUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logOutUserSuccess),
        tap(() => this.authService.removeUserFromLocalStorage())
      ),
    { dispatch: false }
  );
}
