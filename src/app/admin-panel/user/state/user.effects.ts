import { UserService } from '../service/user.service';
import { Injectable } from '@angular/core';
import * as UserActions from './user.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  fetchUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.fetchUsers),
      mergeMap((test) =>
        this.userService.fetchUserList(test.request).pipe(
          map((result) =>
            UserActions.fetchUsersSuccess({ loadUsersSuccessParams: result })
          ),
          catchError((error) =>
            of(UserActions.fetchUsersError({ errors: error }))
          )
        )
      )
    );
  });
}
