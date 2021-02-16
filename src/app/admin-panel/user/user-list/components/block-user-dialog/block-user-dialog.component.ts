import { BlockUserRequest } from './../../../../shared/dto/requests/blockUserRequest';
import { User } from './../../../models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { State } from './../../../../../state/app.state';
import { Observable } from 'rxjs';
import {
  getUserBlockReasons,
  getAddBlockReasonResult,
  getBlockUserResult,
} from './../../../state/user.selectors';
import * as UserActions from './../../../state/user.actions';
import { ToastrService } from 'ngx-toastr';
import { filter, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dds-block-user-dialog',
  templateUrl: './block-user-dialog.component.html',
  styleUrls: ['./block-user-dialog.component.scss'],
})
export class BlockUserDialogComponent implements OnInit {
  reasonText: string = 'test';
  reasons$: Observable<string[]>;
  saveAsTemplate: boolean = false;
  getAddBlockReasonResult$: Observable<boolean>;
  getBlockUserResult$: Observable<boolean>;

  constructor(
    private store: Store<State>,
    public dialogRef: MatDialogRef<BlockUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.reasons$ = this.store.select(getUserBlockReasons);
    this.getAddBlockReasonResult$ = this.store.select(getAddBlockReasonResult);
    this.getBlockUserResult$ = this.store.select(getBlockUserResult);
    this.store.dispatch(UserActions.fetchBlockUserReasons());
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.resetStatuses());

    this.getBlockUserResult$
      .pipe(filter((t) => t !== null))
      .pipe(take(1))
      .subscribe((result) => {
        if (result)
          this.toastr.success(
            this.translate.instant(
              'users.block-user-dialog.the-user-has-been-properly-blocked'
            )
          );
        else
          this.toastr.error(
            this.translate.instant(
              'users.block-user-dialog.there-was-a-problem-blocking-the-user'
            )
          );
      });

    this.getAddBlockReasonResult$
      .pipe(filter((t) => t !== null))
      .pipe(filter(() => this.saveAsTemplate))
      .pipe(take(1))
      .subscribe((result) => {
        if (result)
          this.toastr.success(
            this.translate.instant(
              'users.block-user-dialog.the-blocking-template-was-added-correctly'
            )
          );
        else
          this.toastr.error(
            this.translate.instant(
              'users.block-user-dialog.there-was-a-problem-adding-the-blocking-reason-template'
            )
          );
      });
  }

  onSelectChange(event: MatSelectChange): void {
    if (+event.value === -1) this.reasonText = '';
    else
      this.reasons$.subscribe((reasons) => {
        this.reasonText = reasons[+event.value];
      });
  }

  onBlockClick(): void {
    let request: BlockUserRequest = {
      reason: this.reasonText,
      user: this.user,
    };
    this.store.dispatch(UserActions.blockUser({ request }));

    if (this.saveAsTemplate) {
      this.store.dispatch(
        UserActions.addBlockReason({ reason: this.reasonText })
      );
    }

    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
