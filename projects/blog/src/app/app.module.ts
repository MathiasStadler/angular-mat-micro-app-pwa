import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Injector, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'blog', component: CoreComponent, children: [
        { path: 'list', component: Page1Component },
        { path: 'details', component: Page2Component },
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector});
    customElements.define('blog', appElement);

   // const widgetElement = createCustomElement(ClientAWidgetComponent, { injector: this.injector})
   // customElements.define('client-a-widget', widgetElement);
  }

}
