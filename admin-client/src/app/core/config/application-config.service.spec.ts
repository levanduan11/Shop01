/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplicationConfigService } from './application-config.service';

describe('Service: ApplicationConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationConfigService]
    });
  });

  it('should ...', inject([ApplicationConfigService], (service: ApplicationConfigService) => {
    expect(service).toBeTruthy();
  }));
});
