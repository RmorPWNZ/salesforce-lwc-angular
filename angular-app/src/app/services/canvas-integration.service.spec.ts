import { TestBed } from '@angular/core/testing';

import { CanvasIntegrationService } from './canvas-integration.service';

describe('CanvasIntegrationService', () => {
  let service: CanvasIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
