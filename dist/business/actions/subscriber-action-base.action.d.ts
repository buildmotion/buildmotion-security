import { LoggingService } from '@buildmotion/logging';
import { ActionBase } from '@buildmotion/foundation';
import { SubscriberBusinessProviderService } from './../subscriber-business-provider.service';
export declare class SubscriberActionBase extends ActionBase {
    businessProvider: SubscriberBusinessProviderService;
    loggingService: LoggingService;
    constructor();
    /**
    * Use the [Do] method to perform the action.
    */
    Do(businessProvider: SubscriberBusinessProviderService): void;
}
