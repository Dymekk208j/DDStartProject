import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup,
  FormControl,
  AbstractControl,
} from '@angular/forms';

import { PasswordRules } from './password-rules.validator';

@Directive({
  selector: '[passwordRules]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordRulesDirective,
      multi: true,
    },
  ],
})
export class PasswordRulesDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return PasswordRules()(control);
  }
}
