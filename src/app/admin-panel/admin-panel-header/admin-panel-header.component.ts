import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PpBreadcrumbsService, Breadcrumb } from 'pp-breadcrumbs';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
@Component({
  selector: 'dds-admin-panel-header',
  templateUrl: './admin-panel-header.component.html',
  styleUrls: ['./admin-panel-header.component.scss'],
})
export class AdminPanelHeaderComponent implements OnInit, OnDestroy {
  private crumbSubscription!: Subscription;

  crumb$: Observable<Breadcrumb[]>;

  constructor(
    PpBreadcrumbsService: PpBreadcrumbsService,
    private title: Title,
    private translate: TranslateService
  ) {
    this.crumb$ = PpBreadcrumbsService.crumbs$;
  }

  ngOnInit() {
    this.crumbSubscription = this.crumb$.subscribe((crumb) => {
      let title: string = '';

      this.translate
        .get(crumb[0].text)
        .pipe(take(1))
        .subscribe((res) => {
          title = `${res}`;

          if (crumb.length > 1) {
            this.translate
              .get(crumb[crumb.length - 1].text)
              .pipe(take(1))
              .subscribe((res) => {
                title = `${title} | ${res}`;
                this.title.setTitle(title);
              });
          } else {
            this.title.setTitle(title);
          }
        });
    });
  }

  ngOnDestroy() {
    this.crumbSubscription.unsubscribe();
  }
}
