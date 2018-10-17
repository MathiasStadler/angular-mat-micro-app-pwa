
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { ProductHeaderModule } from '../../../product-header/src/app/app.module';
import { ProductViewModule } from '../../../product-view/src/app/app.module';
import { ProductCartModule } from '../../../product-cart/src/app/app.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductHeaderModule,
    ProductViewModule,
    ProductCartModule
      ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
  const appElement = createCustomElement(AppComponent, { injector: this.injector});
     customElements.define('productmgt', appElement);
  }

}
