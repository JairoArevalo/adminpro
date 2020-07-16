import { TestBed } from '@angular/core/testing';

import { RenuevaTokenGuard } from './renueva-token.guard';

describe('RenuevaTokenGuard', () => {
  let guard: RenuevaTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RenuevaTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
