import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent
  ]
})


  export class ProductHeaderModule {
    constructor(private injector: Injector) {
      const productHeader = createCustomElement(AppComponent, { injector });
      customElements.define('product-header', productHeader);
    }

    ngDoBootstrap() {}
  }


