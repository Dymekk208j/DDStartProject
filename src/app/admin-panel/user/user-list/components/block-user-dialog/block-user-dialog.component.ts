import { BlockUserRequest } from "./../../../../shared/dto/requests/blockUserRequest";
import { User } from "./../../../models/user";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { Store } from "@ngrx/store";
import { State } from "./../../../../../state/app.state";
import { Observable } from "rxjs";
import { getUserBlockReasons } from "./../../../state/user.selectors";
import * as UserActions from "./../../../state/user.actions";

@Component({
  selector: "dds-block-user-dialog",
  templateUrl: "./block-user-dialog.component.html",
  styleUrls: ["./block-user-dialog.component.scss"]
})
export class BlockUserDialogComponent implements OnInit {
  reasonText: string = "";
  reasons$: Observable<string[]>;
  saveAsTemplate: boolean = false;

  constructor(private store: Store<State>, public dialogRef: MatDialogRef<BlockUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public user: User) {}

  ngOnInit(): void {
    this.reasons$ = this.store.select(getUserBlockReasons);
    this.store.dispatch(UserActions.fetchBlockUserReasons());
  }

  onSelectChange(event: MatSelectChange): void {
    if (+event.value === -1) this.reasonText = "";
    else
      this.reasons$.subscribe((reasons) => {
        this.reasonText = reasons[+event.value];
      });
  }

  onBlockClick(): void {
    let request: BlockUserRequest = {
      reason: this.reasonText,
      user: this.user
    };
    this.store.dispatch(UserActions.blockUser({ request }));

    if (this.saveAsTemplate) {
      this.store.dispatch(UserActions.addBlockReason({ reason: this.reasonText }));
    }

    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
