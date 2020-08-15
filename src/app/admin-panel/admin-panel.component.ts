import { getMyTestText } from './state/admin-panel.selectors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AdminPanelActions from './state/admin-panel.actions';
import { Subscription } from 'rxjs/internal/Subscription';
import { State } from './state/admin-panel.state';

@Component({
  selector: 'dds-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  public text: string;
  sub: Subscription;

  constructor(private store: Store<State>) {
    this.sub = this.store
      .select(getMyTestText)
      .subscribe((myTestText) => (this.text = myTestText));
  }

  //TODO: Unsubscribe
  setText(): void {
    this.store.dispatch(
      AdminPanelActions.setMyTestText({ text: 'moj nowy test text' })
    );
  }

  loadText(): void {
    this.store.dispatch(AdminPanelActions.fetchMyTestText());
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
