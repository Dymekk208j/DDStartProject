import { Observable } from "rxjs";
import { UserDetails } from "./../models/userDetails";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "./../../../state/app.state";
import { getUserDetails } from "./../state/user.selectors";
import * as UserActions from "./../state/user.actions";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "dds-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  public Id: string = "";

  public userDetails$: Observable<UserDetails>;
  public form: FormGroup;

  constructor(private store: Store<State>, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id = routeParams.get("Id");

    if (!id || id.length == 0) {
      this.router.navigateByUrl(`/Admin/Users/Details/List`);
    } else {
      this.userDetails$ = this.store.select(getUserDetails);
      this.userDetails$.subscribe((userDetails) => {
        this.form = this.formBuilder.group({
          userName: new FormControl(userDetails.userName, []),
          name: new FormControl(`${userDetails.firstName} ${userDetails.lastName}`, []),
          email: new FormControl(userDetails.email, []),
          emailConfirmed: new FormControl(userDetails.emailConfirmed, []),
          phoneNumber: new FormControl(userDetails.phoneNumber, []),
          gender: new FormControl(userDetails.gender, []),
          blocked: new FormControl(userDetails.blocked, []),
          registrationDateUTC: new FormControl(userDetails.registrationDateUTC, []),
          role: new FormControl(userDetails.role, [])
        });
      });

      this.store.dispatch(UserActions.fetchUserDetails({ userId: id ?? "" }));
    }
  }
}
