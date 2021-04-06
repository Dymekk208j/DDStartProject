import { Gender } from "./../../shared/enums/gender";
import { AuthService } from "./../services/auth.service";
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { Observable } from "rxjs";
import { take } from "rxjs/operators";

import { State } from "../state/auth.state";
import { Store } from "@ngrx/store";
import * as AuthActions from "./../state/auth.actions";
import { getIsUserLoggedInformation } from "./../state/auth.selectors";

import { RegisterRequest } from "../dto/requests";
import { UniqueUsername, PasswordRules, MustMatch, UniqueEmail } from "src/app/shared/Validators";

@Component({
  selector: "dds-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  public Gender = Gender;
  public form: FormGroup;

  public model: RegisterRequest;

  public isUserLogged: boolean;
  userLogged$: Observable<boolean | null>;

  constructor(private store: Store<State>, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = this.formBuilder.group(
      {
        userName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(255)], [UniqueUsername(this.authService)]),
        email: new FormControl("", [Validators.email, Validators.required, Validators.minLength(3), Validators.maxLength(255)], [UniqueEmail(this.authService)]),
        confirmEmail: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),

        password: new FormControl("", [Validators.required, PasswordRules()]),
        confirmPassword: new FormControl("", Validators.required),

        acceptTerms: new FormControl("", [Validators.requiredTrue]),

        firstName: new FormControl(""),
        lastName: new FormControl(""),

        gender: new FormControl(this.Gender.Man, Validators.required)
      },
      {
        validator: [MustMatch("password", "confirmPassword"), MustMatch("email", "confirmEmail")]
      }
    );

    this.store
      .select(getIsUserLoggedInformation)
      .pipe(take(1))
      .subscribe((isUserLogged) => (this.isUserLogged = isUserLogged));

    if (this.isUserLogged) this.router.navigateByUrl(`/`);

    this.userLogged$ = this.store.select(getIsUserLoggedInformation);
  }

  signIn(formData: FormGroup): void {
    var request: RegisterRequest = {
      UserName: formData.get("userName")?.value,

      Email: formData.get("email")?.value,
      EmailConfirm: formData.get("confirmEmail")?.value,

      Password: formData.get("password")?.value,
      PasswordConfirm: formData.get("confirmPassword")?.value,

      FirstName: formData.get("firstName")?.value,
      LastName: formData.get("lastName")?.value,

      Gender: +formData.get("gender")?.value
    };

    this.store.dispatch(AuthActions.registerUser({ request: request }));
  }
}
