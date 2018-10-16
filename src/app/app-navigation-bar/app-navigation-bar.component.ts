import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from '../state.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './app-navigation-bar.component.html',
  styleUrls: ['./app-navigation-bar.component.css']
})
export class AppNavigationBarComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  // constructor(private breakpointObserver: BreakpointObserver) {}

  constructor(private stateService: StateService) {
  }

  sendState() {
      this.stateService.setState('Info from Shell');
  }


  }

