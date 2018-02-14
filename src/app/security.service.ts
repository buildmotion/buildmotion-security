import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServiceBase, ServiceResponse } from 'buildmotion-foundation';
import { LoggingService, Severity } from 'buildmotion-logging';
import { Subscriber } from './models/subscriber.model';

import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';

@Injectable()
export class SecurityService extends ServiceBase {

  constructor(
    loggingService: LoggingService,
    private businessProvider: SubscriberBusinessProviderService
  ) {
    super(loggingService)
    this.serviceName = '';
    this.businessProvider.serviceContext = this.serviceContext;
    this.businessProvider.loggingService = this.loggingService;
   }

   registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse> {
    this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to create a new subscription.`);
    return this.businessProvider.registerSubscriber(subscriber);
  }
}
