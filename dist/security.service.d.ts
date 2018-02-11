import { Observable } from 'rxjs/Observable';
import { ServiceBase, ServiceResponse } from 'buildmotion-foundation';
import { LoggingService } from 'buildmotion-logging';
import { Subscriber } from './models/subscriber.model';
import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';
export declare class SecurityService extends ServiceBase {
    private businessProvider;
    constructor(loggingService: LoggingService, businessProvider: SubscriberBusinessProviderService);
    registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse>;
}
