import { AbstractControl, ValidatorFn } from '@angular/forms';

const ALPHA_NUMERIC_REGEX: RegExp = /^[a-zA-Z0-9_]*$/;

// custom validator to check that two fields match
export function PasswordRules(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let isPasswordInvalid: boolean = ALPHA_NUMERIC_REGEX.test(control.value);

    return isPasswordInvalid ? { passwordRules: true } : null;
  };
}
