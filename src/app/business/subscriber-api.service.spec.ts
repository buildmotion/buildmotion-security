import { TestBed, inject } from '@angular/core/testing';

import { SubscriberApiService } from './subscriber-api.service';

describe('SubscriberApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriberApiService]
    });
  });

  it('should be created', inject([SubscriberApiService], (service: SubscriberApiService) => {
    expect(service).toBeTruthy();
  }));
});
