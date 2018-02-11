import { Observable } from 'rxjs/Observable';
import { LoggingService } from 'buildmotion-logging';
import { ServiceBase, ServiceResponse } from 'buildmotion-foundation';
import { Subscriber } from './../models/subscriber.model';
import { SubscriberApiService } from './subscriber-api.service';
export declare class SubscriberBusinessProviderService extends ServiceBase {
    loggingService: LoggingService;
    subscriberApiService: SubscriberApiService;
    constructor(loggingService: LoggingService, subscriberApiService: SubscriberApiService);
    registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse>;
}
