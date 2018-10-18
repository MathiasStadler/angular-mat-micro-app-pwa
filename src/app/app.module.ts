import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { ProductHeaderModule } from './../../projects/product-header/src/app/app.module';
import { ProductViewModule } from './../../projects/product-view/src/app/app.module';
import { ProductCartModule } from './../../projects/product-cart/src/app/app.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductHeaderModule,
   ProductCartModule,
   ProductViewModule
      ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {}


