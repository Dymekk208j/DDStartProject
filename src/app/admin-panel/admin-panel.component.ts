import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dds-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  public text: string;

  constructor(private store: Store<any>) {
    this.store.select('admin').subscribe((admin) => {
      this.text = admin.myTestText;
    });
  }

  //TODO: Unsubscribe
  setText(): void {
    this.store.dispatch({
      type: '[Admin Panel] set my test text',
    });
  }
  ngOnInit(): void {}
}
