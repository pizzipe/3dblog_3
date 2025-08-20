import { TestBed } from '@angular/core/testing';

import { Directus } from './directus';

describe('Directus', () => {
  let service: Directus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Directus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
