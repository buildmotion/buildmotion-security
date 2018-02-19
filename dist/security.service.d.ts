import { Observable } from 'rxjs/Observable';
import { ServiceBase, ServiceResponse } from 'buildmotion-foundation';
import { LoggingService } from 'buildmotion-logging';
import { Subscriber } from './models/subscriber.model';
import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';
import { ConfirmationToken } from '.';
export declare class BuildMotionSecurityService extends ServiceBase {
    private businessProvider;
    constructor(loggingService: LoggingService, businessProvider: SubscriberBusinessProviderService);
    /**
     * Use to register a new subscriber to the application.
     * @param subscriber contains the user name and email address for the subscriber.
     */
    registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse>;
    /**
     * Use to confirm a new subscriber.
     * @param confirmationToken contains the user name and a [Hash] value that is used to confirm the user.
     */
    confirmSubscriber(confirmationToken: ConfirmationToken): Observable<ServiceResponse>;
}
