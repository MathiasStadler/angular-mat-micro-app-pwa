import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentChatComponent } from './web-component-chat.component';

describe('WebComponentChatComponent', () => {
  let component: WebComponentChatComponent;
  let fixture: ComponentFixture<WebComponentChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebComponentChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComponentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
