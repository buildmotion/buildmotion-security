import { Inject, Injectable } from '@angular/core';
import {
  Http,
  RequestMethod,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/cache';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LoggingService, Severity } from 'buildmotion-logging';

import { HttpBaseService } from 'buildmotion-foundation';
import { Subscriber } from './../models/subscriber.model';
import { SubscriberItem } from './../models/subscriber-item.model';
import { ServiceResponse } from 'buildmotion-foundation';
import { ServiceContext } from 'angular-rules-engine';
import { ConfirmationToken } from '..';

@Injectable()
export class SubscriberApiService extends HttpBaseService {
  url: string = '/api/security';
  serviceName: string;

  constructor(
    @Inject(Http) public http: Http,
    @Inject(HttpBaseService) public httpService: HttpBaseService,
    // @Inject(ServiceContext) serviceContext: ServiceContext,
    public loggingService: LoggingService
  ) {
    super(http, loggingService);
    this.serviceName = 'SecurityHttpService';
    // this.serviceContext = serviceContext;
  }

  /**
   * Use to register a new subscriber. 
   * @param subscriber contains the subscriber's name and email address. Must be a valid email address.
   */
  public registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse> {
    let requestUrl = 'api/subscriber/register';
    this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);

    let body = JSON.stringify(subscriber);
    let options = this.httpService.createRequestOptions(
      RequestMethod.Post,
      this.httpService.createHeader(false),
      requestUrl,
      body);
    return this.httpService.executeRequest(options);

    /**TEMPORARY IMPLEMENTATION */
    // let response = new ServiceResponse();
    // response.IsSuccess = true;
    // response.Message = `Fake message from ${this.serviceName}`;
    // response.Data = true;
    // let subject: BehaviorSubject<any> = new BehaviorSubject(response);
    // return subject.asObservable();
    /**TEMPORARY IMPLEMENTATION */
  }

  /**
   * Use to process the confirmation token from a new subscriber. 
   * @param confirmationToken 
   */
  public confirmSubscriber(confirmationToken: ConfirmationToken) {
    let requestUrl = 'api/subscriber/confirmation';
    this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);

    let body = JSON.stringify(confirmationToken);
    let options = this.httpService.createRequestOptions(
      RequestMethod.Post,
      this.httpService.createHeader(false),
      requestUrl,
      body);
    return this.httpService.executeRequest(options);

    /**TEMPORARY IMPLEMENTATION */
    // let response = { IsSuccess: false, Message: `Fake message from ${this.serviceName}` };
    // let subject: BehaviorSubject<any> = new BehaviorSubject(response);
    // return subject.asObservable();
    /**TEMPORARY IMPLEMENTATION */
  }

  public retrieveSubscribers() {
    const requestUrl = 'api/subscriber';
    this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);

    const body = '';
    const options = this.httpService.createRequestOptions(
      RequestMethod.Get,
      this.httpService.createHeader(false),
      requestUrl,
      body);
    return this.httpService.executeRequest(options);
  }

  public removeSubscriber(subscriber: SubscriberItem) {
    const requestUrl = 'api/subscriber/remove';
    this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);

    const body = JSON.stringify(subscriber);
    const options = this.httpService.createRequestOptions(
      RequestMethod.Post,
      this.httpService.createHeader(false),
      requestUrl,
      body);
    return this.httpService.executeRequest(options);
  }
}
