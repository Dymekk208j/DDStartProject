import { ToastrService } from "ngx-toastr";
import { Injectable } from "@angular/core";
import * as UiActions from "./ui.actions";
import { tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable({ providedIn: "root" })
export class UiEffects {
  constructor(private actions$: Actions, private toastr: ToastrService) {}

  // restoreUser$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(UiActions.restoreUser),
  //     map((params) => AuthActions.restoreUserSuccess({ user: params.user }))
  //   );
  // });

  // logOutUser$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(UiActions.logOutUser),
  //     map(() => AuthActions.logOutUserSuccess())
  //   );
  // });

  showSuccessToastr$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.showSuccessToastr),
        tap((msg) => this.toastr.success(msg.text))
      ),
    { dispatch: false }
  );

  showErrorToastr$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.showErrorToastr),
        tap((msg) => this.toastr.error(msg.text))
      ),
    { dispatch: false }
  );

  showInfoToastr$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.showInfoToastr),
        tap((msg) => this.toastr.info(msg.text))
      ),
    { dispatch: false }
  );

  showWarningToastr$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.showWarningToastr),
        tap((msg) => this.toastr.warning(msg.text))
      ),
    { dispatch: false }
  );
}
