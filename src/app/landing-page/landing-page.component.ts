import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dds-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private title: Title, private translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('landing-page-title').subscribe((res) => {
      this.title.setTitle(res);
    });
  }
}
