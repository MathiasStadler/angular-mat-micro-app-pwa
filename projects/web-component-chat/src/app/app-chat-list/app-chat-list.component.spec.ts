import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatListComponent } from './app-chat-list.component';

describe('AppChatListComponent', () => {
  let component: AppChatListComponent;
  let fixture: ComponentFixture<AppChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
