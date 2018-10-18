import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { ProductViewComponent } from './app.component';

@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
      ],
  providers: [],
  bootstrap: [ProductViewComponent],
  entryComponents: [
    ProductViewComponent
  ]
})
export class ProductViewModule {

  constructor(private injector: Injector) {
    const appElement = createCustomElement(ProductViewComponent, { injector: this.injector});
    customElements.define('product-view', appElement);

  }
  ngDoBootstrap() {

  }

}
