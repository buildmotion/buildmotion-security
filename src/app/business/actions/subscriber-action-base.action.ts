import { Action, ActionResult } from 'angular-actions';
import { ServiceMessage, ServiceContext, MessageType } from 'angular-rules-engine';

import { LoggingService, Severity } from 'buildmotion-logging';
import { ActionBase } from 'buildmotion-foundation';
import { SubscriberBusinessProviderService } from './../subscriber-business-provider.service';

export class SubscriberActionBase extends ActionBase {

    businessProvider: SubscriberBusinessProviderService;
    loggingService: LoggingService;

    constructor() {
        super();
    }

     /**
     * Use the [Do] method to perform the action.
     */
    Do(businessProvider: SubscriberBusinessProviderService) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;

        this.execute();
    }
}