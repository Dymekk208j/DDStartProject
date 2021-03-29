import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/auth-pages/services/auth.service";

export function UniqueEmail(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return timer(500).pipe(
      switchMap(() =>
        authService.isEmailAvailable({
          Email: control.value
        })
      ),
      map((res) => {
        console.log(res);
        return res.isEmailAvailable ? null : { uniqueEmail: true };
      })
    );
  };
}
