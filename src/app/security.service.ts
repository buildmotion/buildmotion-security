import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ServiceBase, ServiceResponse } from '@buildmotion/foundation';
import { LoggingService, Severity } from '@buildmotion/logging';
import { Subscriber } from './models/subscriber.model';

import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';
import { ConfirmationToken } from '.';

@Injectable()
export class BuildMotionSecurityService extends ServiceBase {

  constructor(
    loggingService: LoggingService,
    private businessProvider: SubscriberBusinessProviderService
  ) {
    super(loggingService)
    this.serviceName = 'SecurityService';
    this.businessProvider.serviceContext = this.serviceContext;


    this.businessProvider.loggingService = this.loggingService;
   }

   /**
    * Use to register a new subscriber to the application.
    * @param subscriber contains the user name and email address for the subscriber.
    */
   registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse> {
    this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to create a new subscription.`);
    return this.businessProvider.registerSubscriber(subscriber);
  }

  /**
   * Use to confirm a new subscriber.
   * @param confirmationToken contains the user name and a [Hash] value that is used to confirm the user. 
   */
  confirmSubscriber(confirmationToken: ConfirmationToken) {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to confirm subscriber.`);
    return this.businessProvider.confirmSubscriber(confirmationToken)
  }
}
