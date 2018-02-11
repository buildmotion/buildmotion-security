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
import { Injectable } from '@angular/core';
import { ServiceBase } from 'buildmotion-foundation';
import { LoggingService, Severity } from 'buildmotion-logging';
import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';
var SecurityService = (function (_super) {
    __extends(SecurityService, _super);
    function SecurityService(loggingService, businessProvider) {
        var _this = _super.call(this, loggingService) || this;
        _this.businessProvider = businessProvider;
        return _this;
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    SecurityService.prototype.registerSubscriber = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to create a new subscription.");
        return this.businessProvider.registerSubscriber(subscriber);
    };
    SecurityService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SecurityService.ctorParameters = function () { return [
        { type: LoggingService, },
        { type: SubscriberBusinessProviderService, },
    ]; };
    return SecurityService;
}(ServiceBase));
export { SecurityService };
function SecurityService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SecurityService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SecurityService.ctorParameters;
    /** @type {?} */
    SecurityService.prototype.businessProvider;
}
//# sourceMappingURL=security.service.js.map