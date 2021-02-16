import { fetchBlockUserReasonsError } from './../../../state/user.actions';
import { User } from './../../../models/user';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { State } from './../../../../../state/app.state';
import { Observable } from 'rxjs';
import { getUserBlockReasons } from './../../../state/user.selectors';
import * as UserActions from './../../../state/user.actions';

@Component({
  selector: 'dds-block-user-dialog',
  templateUrl: './block-user-dialog.component.html',
  styleUrls: ['./block-user-dialog.component.scss'],
})
export class BlockUserDialogComponent {
  ReasonText: string = 'test';
  reasons$: Observable<string[]>;

  constructor(
    private store: Store<State>,
    public dialogRef: MatDialogRef<BlockUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.reasons$ = this.store.select(getUserBlockReasons);
    this.store.dispatch(UserActions.fetchBlockUserReasons());
  }

  onSelectChange(event: MatSelectChange): void {
    console.log('event', event);

    if (+event.value === -1) this.ReasonText = '';
    else
      this.reasons$.subscribe((reasons) => {
        this.ReasonText = reasons[+event.value];
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
