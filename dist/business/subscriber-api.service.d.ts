import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { LoggingService } from 'buildmotion-logging';
import { HttpBaseService } from 'buildmotion-foundation';
import { Subscriber } from './../models/subscriber.model';
import { SubscriberItem } from './../models/subscriber-item.model';
import { ServiceResponse } from 'buildmotion-foundation';
export declare class SubscriberApiService extends HttpBaseService {
    http: Http;
    httpService: HttpBaseService;
    loggingService: LoggingService;
    url: string;
    data: Observable<Response>;
    serviceName: string;
    constructor(http: Http, httpService: HttpBaseService, loggingService: LoggingService);
    registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse>;
    retrieveSubscribers(): Observable<any>;
    removeSubscriber(subscriber: SubscriberItem): Observable<any>;
}
