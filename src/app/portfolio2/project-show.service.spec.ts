import { TestBed } from '@angular/core/testing';

import { ProjectShowService } from './project-show.service';

describe('ProjectShowService', () => {
  let service: ProjectShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
