import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, filter, scan } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isAdminPanel = false;

  title = 'DDStartProject';
  public selectedLang: string;
  public administratorRole: boolean = true;

  constructor(
    public translateService: TranslateService,
    private router: Router
  ) {
    translateService.addLangs(['en', 'pl']);
    translateService.setDefaultLang('en');
    const browserLanguage = translateService.getBrowserLang();
    this.selectedLang = browserLanguage.match(/en|pl/) ? browserLanguage : 'en';
    translateService.use(this.selectedLang);

    //TODO: Usuniecie subskrybcji i przenisienie do store
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isAdminPanel = event.url.startsWith('/Admin');
      });
  }
}
