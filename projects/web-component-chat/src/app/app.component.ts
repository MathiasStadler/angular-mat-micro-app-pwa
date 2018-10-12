import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'web-component-chat';

  @Input('state')
  set state(state: string) {
    // tslint:disable-next-line:no-console
    console.debug('chat received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(
    private router: Router) {
  }


  ngOnInit() {

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?

    // Standalone mode
    if (environment.standalone) {
     this.router.navigate(['/chat/AppChatListComponent']);
    }

    // just for demonstration!
    setTimeout(() => {
      this.message.next('client a initialized!');
    }, 2000);

  }

}
