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
import { Injectable } from "@angular/core";
import { ServiceBase } from "@buildmotion/foundation";
import { LoggingService, Severity } from "@buildmotion/logging";
import { SubscriberBusinessProviderService } from "./business/subscriber-business-provider.service";
var BuildMotionSecurityService = (function (_super) {
    __extends(BuildMotionSecurityService, _super);
    function BuildMotionSecurityService(loggingService, businessProvider) {
        var _this = _super.call(this, loggingService) || this;
        _this.businessProvider = businessProvider;
        _this.serviceName = 'SecurityService';
        _this.businessProvider.serviceContext = _this.serviceContext;
        _this.businessProvider.loggingService = _this.loggingService;
        return _this;
    }
    /**
     * Use to register a new subscriber to the application.
     * @param subscriber contains the user name and email address for the subscriber.
     */
    /**
     * Use to register a new subscriber to the application.
     * @param {?} subscriber contains the user name and email address for the subscriber.
     * @return {?}
     */
    BuildMotionSecurityService.prototype.registerSubscriber = /**
     * Use to register a new subscriber to the application.
     * @param {?} subscriber contains the user name and email address for the subscriber.
     * @return {?}
     */
    function (subscriber) {
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to create a new subscription.");
        return this.businessProvider.registerSubscriber(subscriber);
    };
    /**
     * Use to confirm a new subscriber.
     * @param confirmationToken contains the user name and a [Hash] value that is used to confirm the user.
     */
    /**
     * Use to confirm a new subscriber.
     * @param {?} confirmationToken contains the user name and a [Hash] value that is used to confirm the user.
     * @return {?}
     */
    BuildMotionSecurityService.prototype.confirmSubscriber = /**
     * Use to confirm a new subscriber.
     * @param {?} confirmationToken contains the user name and a [Hash] value that is used to confirm the user.
     * @return {?}
     */
    function (confirmationToken) {
        this.loggingService.log(this.serviceName, Severity.Information, "Preparing to confirm subscriber.");
        return this.businessProvider.confirmSubscriber(confirmationToken);
    };
    BuildMotionSecurityService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BuildMotionSecurityService.ctorParameters = function () { return [
        { type: LoggingService, },
        { type: SubscriberBusinessProviderService, },
    ]; };
    return BuildMotionSecurityService;
}(ServiceBase));
export { BuildMotionSecurityService };
function BuildMotionSecurityService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BuildMotionSecurityService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BuildMotionSecurityService.ctorParameters;
    /** @type {?} */
    BuildMotionSecurityService.prototype.businessProvider;
}
//# sourceMappingURL=security.service.js.map