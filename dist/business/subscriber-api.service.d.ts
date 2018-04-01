import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { LoggingService } from '@buildmotion/logging';
import { HttpBaseService } from '@buildmotion/foundation';
import { Subscriber } from './../models/subscriber.model';
import { SubscriberItem } from './../models/subscriber-item.model';
import { ServiceResponse } from '@buildmotion/foundation';
import { ConfirmationToken } from '..';
export declare class SubscriberApiService extends HttpBaseService {
    http: Http;
    httpService: HttpBaseService;
    loggingService: LoggingService;
    url: string;
    serviceName: string;
    constructor(http: Http, httpService: HttpBaseService, loggingService: LoggingService);
    /**
     * Use to register a new subscriber.
     * @param subscriber contains the subscriber's name and email address. Must be a valid email address.
     */
    registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse>;
    /**
     * Use to process the confirmation token from a new subscriber.
     * @param confirmationToken
     */
    confirmSubscriber(confirmationToken: ConfirmationToken): Observable<any>;
    retrieveSubscribers(): Observable<any>;
    removeSubscriber(subscriber: SubscriberItem): Observable<any>;
}
