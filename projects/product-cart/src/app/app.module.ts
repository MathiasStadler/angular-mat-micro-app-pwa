import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { ProductCartComponent } from './app.component';

@NgModule({
  declarations: [
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
      ],
  providers: [],
  bootstrap: [ProductCartComponent],
  entryComponents: [
    ProductCartComponent
  ]
})
export class ProductCartModule {

  constructor(private injector: Injector) {

    const appElement = createCustomElement(ProductCartComponent, { injector: this.injector});
    customElements.define('product-cart', appElement);

  }
  ngDoBootstrap() {

  }

}
