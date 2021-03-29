import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/auth-pages/services/auth.service";

export function UniqueUsername(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return timer(500).pipe(
      switchMap(() =>
        authService.isUsernameAvailable({
          Username: control.value
        })
      ),
      map((res) => {
        return res.isUserNameAvailable ? null : { uniqueUsername: true };
      })
    );
  };
}
