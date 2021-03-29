import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";
import * as AuthActions from "./auth.actions";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

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

  loginUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginUserSuccess),
        tap((param) => {
          console.log(param.response.rememberMe);
          if (param.response.rememberMe) this.authService.saveUserDataToLocalStorage({ Id: param.response.id, Login: param.response.login, Token: param.response.token });
        })
      ),
    { dispatch: false }
  );

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registerUser),
      mergeMap((params) =>
        this.authService.registerUser(params.request).pipe(
          map((response) => {
            console.log("register user");
            return AuthActions.registerUserSuccess({ response: response });
          }),
          catchError((error) => of(AuthActions.registerUserError({ errors: error })))
        )
      )
    );
  });

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
