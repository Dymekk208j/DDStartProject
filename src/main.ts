import { LicenseHelper } from './app/shared/helpers/LicenseHelper';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LicenseManager } from 'ag-grid-enterprise';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

LicenseManager.setLicenseKey(LicenseHelper.AgGridLicense);
