import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImgComponent } from './random-img.component';

describe('RandomImgComponent', () => {
  let component: RandomImgComponent;
  let fixture: ComponentFixture<RandomImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomImgComponent]
    });
    fixture = TestBed.createComponent(RandomImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
