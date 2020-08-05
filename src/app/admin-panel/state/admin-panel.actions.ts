import { createAction, props } from '@ngrx/store';

export const setMyTestText = createAction(
  '[Admin] Set myTestText',
  props<{ text: string }>()
);
