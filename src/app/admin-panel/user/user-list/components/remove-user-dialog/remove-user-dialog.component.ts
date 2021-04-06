import { User } from "./../../../models/user";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { State } from "./../../../../../state/app.state";
import * as UserActions from "./../../../state/user.actions";
import { RemoveUserRequest } from "src/app/admin-panel/shared/dto/requests/removeUserRequest";

@Component({
  selector: "dds-remove-user-dialog",
  templateUrl: "./remove-user-dialog.component.html",
  styleUrls: ["./remove-user-dialog.component.scss"]
})
export class RemoveUserDialogComponent {
  public reasonText: string = "";

  constructor(private store: Store<State>, public dialogRef: MatDialogRef<RemoveUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public user: User) {}

  onRemoveClick(): void {
    let request: RemoveUserRequest = {
      reason: this.reasonText,
      user: this.user
    };

    this.store.dispatch(UserActions.removeUser({ request }));

    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
