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
import { Injectable, Inject } from '@angular/core';
import { LoggingService, Severity } from 'buildmotion-logging';
import { ServiceBase } from 'buildmotion-foundation';
import { RegisterSubscriberAction } from './actions/register-subscriber.action';
import { SubscriberApiService } from './subscriber-api.service';
var SubscriberBusinessProviderService = (function (_super) {
    __extends(SubscriberBusinessProviderService, _super);
    function SubscriberBusinessProviderService(loggingService, subscriberApiService) {
        var _this = _super.call(this, loggingService) || this;
        _this.loggingService = loggingService;
        _this.subscriberApiService = subscriberApiService;
        _this.serviceName = 'SubscriberBusinessProviderService';
        _this.loggingService.log(_this.serviceName, Severity.Information, "Running the constructor for " + _this.serviceName);
        return _this;
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    SubscriberBusinessProviderService.prototype.registerSubscriber = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        var /** @type {?} */ action = new RegisterSubscriberAction(subscriber);
        action.Do(this);
        return action.response;
    };
    SubscriberBusinessProviderService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SubscriberBusinessProviderService.ctorParameters = function () { return [
        { type: LoggingService, },
        { type: SubscriberApiService, decorators: [{ type: Inject, args: [SubscriberApiService,] },] },
    ]; };
    return SubscriberBusinessProviderService;
}(ServiceBase));
export { SubscriberBusinessProviderService };
function SubscriberBusinessProviderService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SubscriberBusinessProviderService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SubscriberBusinessProviderService.ctorParameters;
    /** @type {?} */
    SubscriberBusinessProviderService.prototype.loggingService;
    /** @type {?} */
    SubscriberBusinessProviderService.prototype.subscriberApiService;
}
//# sourceMappingURL=subscriber-business-provider.service.js.map