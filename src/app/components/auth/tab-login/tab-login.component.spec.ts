import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLoginComponent } from './tab-login.component';

describe('TabLoginComponent', () => {
  let component: TabLoginComponent;
  let fixture: ComponentFixture<TabLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabLoginComponent]
    });
    fixture = TestBed.createComponent(TabLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
