
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigationBarComponent } from './app-navigation-bar.component';

describe('AppNavigationBarComponent', () => {
  let component: AppNavigationBarComponent;
  let fixture: ComponentFixture<AppNavigationBarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavigationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
