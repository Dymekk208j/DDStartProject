import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginUser),
      mergeMap((params) =>
        this.authService.loginUser(params.request).pipe(
          map((response) =>
            AuthActions.loginUserSuccess({ response: response })
          ),
          catchError((error) =>
            of(AuthActions.loginUserError({ errors: error }))
          )
        )
      )
    );
  });
}