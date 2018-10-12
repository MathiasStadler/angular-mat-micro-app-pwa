import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { AppChatListComponent } from './app-chat-list/app-chat-list.component';


import { RouterModule } from '@angular/router';
import { AppEmptyComponent } from './app-empty/app-empty.component';
// import { ClientAWidgetComponent } from './client-a-widget/client-a-widget.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { AppCoreComponent } from './app-core/app-core.component';
import { PushPipe } from './push.pipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'chat', component: AppCoreComponent, children: [
        { path: 'list', component: AppChatListComponent }
        ]},
      { path: '**', component: AppEmptyComponent }
    ], { useHash: true }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AppChatListComponent,
    AppEmptyComponent,
   // ClientAWidgetComponent,
    AppCoreComponent,
    PushPipe
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
    // ClientAWidgetComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector});
    customElements.define('chat', appElement);

    // const widgetElement = createCustomElement(ClientAWidgetComponent, { injector: this.injector})
    // customElements.define('client-a-widget', widgetElement);
  }
}
