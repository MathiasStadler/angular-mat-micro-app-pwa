import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  config = {
    'chat': {
      loaded: false,
      path: 'web-component-chat/main.js',
      element: 'chat'
    },
    'block': {
      loaded: false,
      path: 'block/main.js',
      element: 'block'
    },
    'client-c': {
      loaded: false,
      path: 'client-c/main.js',
      element: 'client-c'
    },
    'read-indexedDB': {
      loaded: false,
      path: 'read-indexedDB/main.js',
      element: 'read-indexedDB'
    },
  };

  ngOnInit() {
    this.load('chat');
    // this.load('client-b');
    // this.load('client-c');
    // this.load('read-indexedDB');
  }

  load(name: string): void {

    const configItem = this.config[name];
    if (configItem.loaded) { return; }

    const content = document.getElementById('content');

    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);

    this.stateService.registerClient(element);

  }

  handleMessage(msg): void {
    // tslint:disable-next-line:no-console
    console.debug('shell received message: ', msg.detail);
  }

}
