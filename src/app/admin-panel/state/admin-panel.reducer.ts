import { createReducer, on, createAction } from '@ngrx/store';

export const adminPanelReducer = createReducer(
  { myTestText: 'TEST' },
  on(createAction('[Admin Panel] set my test text'), (state) => {
    console.log('zmieniono tekts');
    return {
      ...state,
      myTestText: 'updatedValue',
    };
  })
);
