var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LoggingService, Severity } from 'buildmotion-logging';
import { HttpBaseService } from 'buildmotion-foundation';
import { ServiceResponse } from 'buildmotion-foundation';
var SubscriberApiService = (function (_super) {
    __extends(SubscriberApiService, _super);
    function SubscriberApiService(http, httpService, loggingService) {
        var _this = _super.call(this, http, loggingService) || this;
        _this.http = http;
        _this.httpService = httpService;
        _this.loggingService = loggingService;
        _this.url = '/api/security';
        _this.serviceName = 'SecurityHttpService';
        // this.serviceContext = serviceContext;
        return _this;
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    SubscriberApiService.prototype.registerSubscriber = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        var /** @type {?} */ requestUrl = 'api/subscriber/register';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        /**
         * TEMPORARY IMPLEMENTATION
         */
        var /** @type {?} */ response = new ServiceResponse();
        response.IsSuccess = true;
        response.Message = "Fake message from " + this.serviceName;
        response.Data = true;
        var /** @type {?} */ subject = new BehaviorSubject(response);
        return subject.asObservable();
        /**TEMPORARY IMPLEMENTATION */
    };
    /**
     * @return {?}
     */
    SubscriberApiService.prototype.retrieveSubscribers = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ requestUrl = 'api/subscriber';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var /** @type {?} */ body = '';
        var /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Get, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    SubscriberApiService.prototype.removeSubscriber = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        var /** @type {?} */ requestUrl = 'api/subscriber/remove';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var /** @type {?} */ body = JSON.stringify(subscriber);
        var /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SubscriberApiService.ctorParameters = function () { return [
        { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
        { type: HttpBaseService, decorators: [{ type: Inject, args: [HttpBaseService,] },] },
        { type: LoggingService, },
    ]; };
    return SubscriberApiService;
}(HttpBaseService));
export { SubscriberApiService };
function SubscriberApiService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SubscriberApiService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SubscriberApiService.ctorParameters;
    /** @type {?} */
    SubscriberApiService.prototype.url;
    /** @type {?} */
    SubscriberApiService.prototype.data;
    /** @type {?} */
    SubscriberApiService.prototype.serviceName;
    /** @type {?} */
    SubscriberApiService.prototype.http;
    /** @type {?} */
    SubscriberApiService.prototype.httpService;
    /** @type {?} */
    SubscriberApiService.prototype.loggingService;
}
//# sourceMappingURL=subscriber-api.service.js.map