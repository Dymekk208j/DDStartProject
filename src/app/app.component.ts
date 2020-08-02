import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DDStartProject';
  public selectedLang: string;

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'pl']);
    translateService.setDefaultLang('en');
    const browserLanguage = translateService.getBrowserLang();
    this.selectedLang = browserLanguage.match(/en|pl/) ? browserLanguage : 'en';
    translateService.use(this.selectedLang);
  }
}
