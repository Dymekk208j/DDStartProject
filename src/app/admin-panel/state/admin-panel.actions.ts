import { createAction, props } from '@ngrx/store';

export const setMyTestText = createAction(
  '[Admin] Set myTestText',
  props<{ text: string }>()
);

export const fetchMyTestText = createAction('[Admin] Fetch myTestText');

export const fetchMyTestTextSuccess = createAction(
  '[Admin] Fetch myTestText success',
  props<{ text: string }>()
);

export const fetchMyTestTextError = createAction(
  '[Admin] Fetch myTestText error',
  props<{ errors: string }>()
);
