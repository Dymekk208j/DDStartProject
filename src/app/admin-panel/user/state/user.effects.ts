import { TranslateService } from "@ngx-translate/core";
import { UserService } from "../service/user.service";
import { Injectable } from "@angular/core";
import * as UserActions from "./user.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import * as UiActions from "../../../state/ui.actions";

@Injectable({ providedIn: "root" })
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService, private translate: TranslateService) {}

  //#region block user effects
  blockUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.blockUser),
      mergeMap((params) =>
        this.userService.blockUser(params.request).pipe(
          map(() => UserActions.blockUserSuccess({ request: params.request })),
          catchError((error) => of(UserActions.blockUserError({ errors: error })))
        )
      )
    );
  });

  blockUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.blockUserSuccess),
      map(() => UiActions.showSuccessToastr({ text: this.translate.instant("users.block-user-dialog.the-user-has-been-properly-blocked") }))
    )
  );

  blockUserError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.blockUserError),
      map(() => UiActions.showErrorToastr({ text: this.translate.instant("users.block-user-dialog.there-was-a-problem-blocking-the-user") }))
    )
  );
  //#endregion

  //#region block reason template effects

  fetchUserBlockReasons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.fetchBlockUserReasons),
      mergeMap(() =>
        this.userService.fetchUserBlockReasons().pipe(
          map((result) => UserActions.fetchBlockUserReasonsSuccess({ reasons: result })),
          catchError((error) => of(UserActions.fetchBlockUserReasonsError({ errors: error })))
        )
      )
    );
  });

  addBlockReason$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.addBlockReason),
      mergeMap((params) =>
        this.userService.addBlockReason(params.reason).pipe(
          map(() => UserActions.addBlockReasonSuccess()),
          catchError((error) => of(UserActions.addBlockReasonError({ errors: error })))
        )
      )
    );
  });

  addBlockReasonSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addBlockReasonSuccess),
      map(() => UiActions.showSuccessToastr({ text: this.translate.instant("users.block-user-dialog.the-blocking-template-was-added-correctly") }))
    )
  );

  addBlockReasonError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addBlockReasonError),
      map(() => UiActions.showErrorToastr({ text: this.translate.instant("users.block-user-dialog.there-was-a-problem-adding-the-blocking-reason-template") }))
    )
  );
  //#endregion

  //#region remove user region

  removeUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.removeUser),
      mergeMap((params) =>
        this.userService.removeUser(params.request).pipe(
          map(() => UserActions.removeUserSuccess({ request: params.request })),
          catchError((error) => of(UserActions.removeUserError({ errors: error })))
        )
      )
    );
  });

  removeUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.removeUserSuccess),
      map(() => UiActions.showSuccessToastr({ text: this.translate.instant("users.remove-user-dialog.the-user-has-been-properly-removed") }))
    )
  );

  removeUserError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.removeUserError),
      map(() => UiActions.showErrorToastr({ text: this.translate.instant("users.remove-user-dialog.there-was-a-problem-removing-the-user") }))
    )
  );

  //#endregion

  //#region fetch user details
  fetchUserDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.fetchUserDetails),
      mergeMap((params) =>
        this.userService.fetchUserDetails(params.userId).pipe(
          map((apiResponse) => UserActions.fetchUserDetailsSuccess({ userDetails: apiResponse })),
          catchError((error) => of(UserActions.fetchUserDetailsError({ errors: error })))
        )
      )
    );
  });

  fetchUserDetailsError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.fetchUserDetailsError),
      map(() => UiActions.showErrorToastr({ text: this.translate.instant("GENERAL.API.GetApiData.Error.Body") }))
    )
  );
  //#endregion
}
