import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-blog',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state')
  set state(state: string) {
      // tslint:disable-next-line:no-console
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
      this.router.navigate(['/app-blog/list']);
    }

    // just for demonstration!
    setTimeout(() => {
      this.message.next('client a initialized!');
    }, 2000);

  }
}
