import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoerDashboardComponent } from './doer-dashboard.component';

describe('DoerDashboardComponent', () => {
  let component: DoerDashboardComponent;
  let fixture: ComponentFixture<DoerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoerDashboardComponent]
    });
    fixture = TestBed.createComponent(DoerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
