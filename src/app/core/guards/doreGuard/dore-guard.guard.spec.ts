import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { doreGuard } from './dore.guard';

describe('doreGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => doreGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
