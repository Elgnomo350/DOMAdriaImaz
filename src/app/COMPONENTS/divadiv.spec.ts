import { TestBed } from '@angular/core/testing';

import { Divadiv } from './divadiv';

describe('Divadiv', () => {
  let service: Divadiv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Divadiv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
