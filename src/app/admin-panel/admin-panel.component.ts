import { getMyTestText } from './state/admin-panel.selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state/IAdminPanelState';
import * as AdminPanelActions from './state/admin-panel.actions';

@Component({
  selector: 'dds-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  public text: string;

  constructor(private store: Store<State>) {
    this.store
      .select(getMyTestText)
      .subscribe((myTestText) => (this.text = myTestText));
  }

  //TODO: Unsubscribe
  setText(): void {
    this.store.dispatch(
      AdminPanelActions.setMyTestText({ text: 'moj nowy test text' })
    );
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
