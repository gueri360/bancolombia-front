import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesFormComponent } from './abilities-form.component';

describe('AbilitiesFormComponent', () => {
  let component: AbilitiesFormComponent;
  let fixture: ComponentFixture<AbilitiesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilitiesFormComponent]
    });
    fixture = TestBed.createComponent(AbilitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
