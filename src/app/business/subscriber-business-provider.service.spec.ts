import { TestBed, inject } from '@angular/core/testing';

import { SubscriberBusinessProviderService } from './subscriber-business-provider.service';

describe('SubscriberBusinessProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriberBusinessProviderService]
    });
  });

  it('should be created', inject([SubscriberBusinessProviderService], (service: SubscriberBusinessProviderService) => {
    expect(service).toBeTruthy();
  }));
});
