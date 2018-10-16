import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Injector, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';



import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    BlogListComponent,
    BlogItemComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'app-blog', component: CoreComponent, children: [
        { path: 'list', component: BlogListComponent },
        { path: 'details', component: BlogItemComponent },
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]

})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
   const appElement = createCustomElement(AppComponent, { injector: this.injector});
   customElements.define('app-blog', appElement);

   // const widgetElement = createCustomElement(ClientAWidgetComponent, { injector: this.injector})
   // customElements.define('client-a-widget', widgetElement);
  }

}
