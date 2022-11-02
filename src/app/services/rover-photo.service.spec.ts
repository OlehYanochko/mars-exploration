import { TestBed } from '@angular/core/testing';

import { RoverPhotoService } from './rover-photo.service';

describe('RoverPhotoService', () => {
  let service: RoverPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
