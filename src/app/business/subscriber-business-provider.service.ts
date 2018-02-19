import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoggingService, Severity } from 'buildmotion-logging';
import { ServiceBase, ServiceResponse } from 'buildmotion-foundation';

import { Subscriber } from './../models/subscriber.model';
import { ConfirmSubscriberAction } from './actions/confirm-subscriber.action';
import { RegisterSubscriberAction } from './actions/register-subscriber.action';
import { SubscriberApiService } from './subscriber-api.service';
import { ConfirmationToken } from '..';

@Injectable()
export class SubscriberBusinessProviderService extends ServiceBase {

  constructor(
    public loggingService: LoggingService,
    @Inject(SubscriberApiService) public subscriberApiService: SubscriberApiService
  ) {
    super(loggingService);
    this.serviceName = 'SubscriberBusinessProviderService';
    this.loggingService.log(this.serviceName, Severity.Information, `Running the constructor for ${this.serviceName}`);
  }

  registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse> {
    const action = new RegisterSubscriberAction(subscriber);
    action.Do(this);
    return action.response;
  }

  confirmSubscriber(confirmationToken: ConfirmationToken) {
    const action = new ConfirmSubscriberAction(confirmationToken);
    action.Do(this);
    return action.response;
  }
}
