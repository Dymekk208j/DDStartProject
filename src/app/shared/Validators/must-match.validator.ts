import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(
  controlName: string,
  matchingControlName: string
): any {
  return (formGroup: FormGroup) => {
    if (!formGroup.controls) return null;
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
