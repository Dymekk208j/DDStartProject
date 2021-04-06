import { createAction, props } from "@ngrx/store";

export const showSuccessToastr = createAction("[Ui] Show success toastr", props<{ text: string }>());
export const showErrorToastr = createAction("[Ui] Show error toastr", props<{ text: string }>());
export const showInfoToastr = createAction("[Ui] Show info toastr", props<{ text: string }>());
export const showWarningToastr = createAction("[Ui] Show warning toastr", props<{ text: string }>());
