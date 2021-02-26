import { Observable } from 'rxjs';
import { User } from './../../../models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from './../../../../../state/app.state';
import * as UserActions from './../../../state/user.actions';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { getRemoveUserResult } from './../../../state/user.selectors';
import { filter, take } from 'rxjs/operators';
import { RemoveUserRequest } from 'src/app/admin-panel/shared/dto/requests/removeUserRequest';

@Component({
  selector: 'dds-remove-user-dialog',
  templateUrl: './remove-user-dialog.component.html',
  styleUrls: ['./remove-user-dialog.component.scss'],
})
export class RemoveUserDialogComponent implements OnInit {
  public removeUserResult$: Observable<boolean | null>;
  public reasonText: string = '';

  constructor(
    private store: Store<State>,
    public dialogRef: MatDialogRef<RemoveUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.removeUserResult$ = this.store.select(getRemoveUserResult);
  }
  ngOnInit(): void {
    this.store.dispatch(UserActions.resetStatuses());

    this.removeUserResult$
      .pipe(filter((t) => t !== null))
      .pipe(take(1))
      .subscribe((result) => {
        if (result)
          this.toastr.success(
            this.translate.instant(
              'users.block-user-dialog.the-user-has-been-properly-removed'
            )
          );
        else
          this.toastr.error(
            this.translate.instant(
              'users.block-user-dialog.there-was-a-problem-removing-the-user'
            )
          );
      });
  }

  onRemoveClick(): void {
    let request: RemoveUserRequest = {
      reason: this.reasonText,
      user: this.user,
    };
    this.store.dispatch(UserActions.removeUser({ request }));

    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
