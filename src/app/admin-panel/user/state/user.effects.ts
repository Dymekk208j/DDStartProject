import { UserService } from '../service/user.service';
import { Injectable } from '@angular/core';
import * as AdminPanelActions from './user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(
    private actions$: Actions,
    private adminPanelService: UserService
  ) {}

  effectName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminPanelActions.fetchMyTestText),
      mergeMap(() =>
        this.adminPanelService.fetchMyTestText().pipe(
          map((t) => AdminPanelActions.fetchMyTestTextSuccess({ text: t })),
          catchError((error) =>
            of(AdminPanelActions.fetchMyTestTextError({ errors: error }))
          )
        )
      )
    );
  });
}
