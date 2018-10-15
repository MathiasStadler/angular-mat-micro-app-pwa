
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  // selector: 'app-root',  avoid names conflict component loads with createCustomElement
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state')
  set state(state: string) {
      console.debug('blog received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(
    private router: Router) {
  }

  ngOnInit() {

    // tslint:disable-next-line:no-console
    console.debug('[blog] start app on init');

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?

    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/blog/blog-list']);
    }

    // just for demonstration!
    setTimeout(() => {
      this.message.next('client a initialized!');
    }, 2000);

  }
}
