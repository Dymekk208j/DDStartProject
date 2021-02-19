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
      mergeMap((params) =>
        this.userService.fetchUserList(params.request).pipe(
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

  blockUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.blockUser),
      mergeMap((params) =>
        this.userService.blockUser(params.request).pipe(
          map(() => UserActions.blockUserSuccess({ request: params.request })),
          catchError((error) =>
            of(UserActions.blockUserError({ errors: error }))
          )
        )
      )
    );
  });

  fetchUserBlockReasons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.fetchBlockUserReasons),
      mergeMap(() =>
        this.userService.fetchUserBlockReasons().pipe(
          map((result) =>
            UserActions.fetchBlockUserReasonsSuccess({ reasons: result })
          ),
          catchError((error) =>
            of(UserActions.fetchBlockUserReasonsError({ errors: error }))
          )
        )
      )
    );
  });

  addBlockReason$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.addBlockReason),
      mergeMap((params) =>
        this.userService.addBlockReason(params.reason).pipe(
          map((result) => UserActions.addBlockReasonSuccess()),
          catchError((error) =>
            of(UserActions.addBlockReasonError({ errors: error }))
          )
        )
      )
    );
  });

  removeUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.removeUser),
      mergeMap((params) =>
        this.userService.removeUser(params.request).pipe(
          map(() => UserActions.removeUserSuccess({ request: params.request })),
          catchError((error) =>
            of(UserActions.removeUserError({ errors: error }))
          )
        )
      )
    );
  });
}
