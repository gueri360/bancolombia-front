import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationByUserComponent } from './notification-by-user.component';

describe('NotificationByUserComponent', () => {
  let component: NotificationByUserComponent;
  let fixture: ComponentFixture<NotificationByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationByUserComponent]
    });
    fixture = TestBed.createComponent(NotificationByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
