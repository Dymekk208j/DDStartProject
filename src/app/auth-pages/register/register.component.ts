import { Subscription } from 'rxjs/internal/Subscription';
import { RegisterRequest } from './../dto/requests/registerRequest';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../state/auth.state';
import { filter, take } from 'rxjs/operators';

import * as AuthActions from './../state/auth.actions';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import {
  getIsUserLoggedInformation,
  getLoginUserResult,
  getRegisterUserResult,
} from './../state/auth.selectors';
import { Observable } from 'rxjs';
import { MustMatch } from 'src/app/shared/Validators/must-match.validator';
import { LoginRequest } from '../dto/requests/loginRequest';
import { PasswordRules } from 'src/app/shared/Validators/password-rules.validator';

@Component({
  selector: 'dds-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private loginResultSubscription: Subscription;
  private registrationResultSubscription: Subscription;

  public form: FormGroup;

  public model: RegisterRequest;

  public isUserLogged: boolean;
  getLoginUserResult$: Observable<boolean | null>;
  getRegisterUserResult$: Observable<boolean | null>;
  userLogged$: Observable<boolean | null>;

  constructor(
    private store: Store<State>,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ]),
        email: new FormControl('', [
          Validators.email,
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ]),
        confirmEmail: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255),
        ]),

        password: new FormControl('', [Validators.required, PasswordRules()]),
        confirmPassword: new FormControl('', Validators.required),

        acceptTerms: new FormControl('', [Validators.requiredTrue]),

        firstName: new FormControl(''),
        lastName: new FormControl(''),

        gender: new FormControl('0', Validators.required),
      },
      {
        validator: [
          MustMatch('password', 'confirmPassword'),
          MustMatch('email', 'confirmEmail'),
        ],
      }
    );

    this.store
      .select(getIsUserLoggedInformation)
      .pipe(take(1))
      .subscribe((isUserLogged) => (this.isUserLogged = isUserLogged));

    if (this.isUserLogged) this.router.navigateByUrl(`/`);

    this.getLoginUserResult$ = this.store.select(getLoginUserResult);
    this.getRegisterUserResult$ = this.store.select(getRegisterUserResult);

    this.userLogged$ = this.store.select(getIsUserLoggedInformation);
  }
  ngOnDestroy(): void {
    this.loginResultSubscription.unsubscribe();
    this.registrationResultSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.resetStatuses());

    this.registrationResultSubscription = this.getRegisterUserResult$
      .pipe(filter((t) => t !== null))
      .subscribe((result) => {
        if (result) {
          this.toastr.success(
            this.translate.instant('registration-page.user-created')
          );
          this.logIn();
        } else
          this.toastr.error(
            this.translate.instant(
              'registration-page.user-registration-has-occurred-problem'
            )
          );
      });

    this.loginResultSubscription = this.getLoginUserResult$
      .pipe(filter((t) => t !== null))
      .subscribe((result) => {
        if (result) {
          this.toastr.success(this.translate.instant('login-page.user-logged'));
          this.router.navigateByUrl(`/`);
        } else
          this.toastr.error(
            this.translate.instant('login-page.user-login-has-occurred-problem')
          );
      });
  }

  signIn(formData: FormGroup): void {
    var request: RegisterRequest = {
      UserName: formData.get('userName')?.value,

      Email: formData.get('email')?.value,
      EmailConfirm: formData.get('confirmEmail')?.value,

      Password: formData.get('password')?.value,
      PasswordConfirm: formData.get('confirmPassword')?.value,

      FirstName: formData.get('firstName')?.value,
      LastName: formData.get('lastName')?.value,

      Gender: +formData.get('gender')?.value,
    };

    this.store.dispatch(AuthActions.registerUser({ request: request }));
  }

  logIn() {
    let request: LoginRequest = {
      Login: this.form.get('userName')?.value,
      Password: this.form.get('password')?.value,
      RememberMe: false,
    };

    this.store.dispatch(AuthActions.loginUser({ request: request }));
  }
}
