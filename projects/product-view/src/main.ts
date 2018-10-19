import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ProductViewModule } from './app/app.module';
import { environment } from './environments/environment';

import 'zone.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ProductViewModule)
  .catch(err => console.error(err));

