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
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ComponentBase } from 'buildmotion-core';
import { LoggingService, Severity } from 'buildmotion-logging';
import { Subscriber } from './../models/subscriber.model';
import { BuildMotionSecurityService } from './../security.service';
var SubscribeComponent = (function (_super) {
    __extends(SubscribeComponent, _super);
    function SubscribeComponent(securityService, loggingService, formBuilder, router) {
        var _this = _super.call(this, 'SubscribeComponent', loggingService, router) || this;
        _this.securityService = securityService;
        _this.formBuilder = formBuilder;
        _this.subscribe = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    SubscribeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.buildForm();
    };
    /**
     * @return {?}
     */
    SubscribeComponent.prototype.buildForm = /**
     * @return {?}
     */
    function () {
        this._form = this.formBuilder.group({
            subscriberName: ['', Validators.required],
            emailAddress: ['', Validators.required]
        });
    };
    /**
     * @return {?}
     */
    SubscribeComponent.prototype.submitForm = /**
     * @return {?}
     */
    function () {
        this.subscriber = new Subscriber(this._form.value.subscriberName, this._form.value.emailAddress);
        this.subscribeUser(this.subscriber);
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    SubscribeComponent.prototype.subscribeUser = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        var _this = this;
        this.securityService.registerSubscriber(subscriber).subscribe(function (response) { return _this.handleSubscribeUser(response); }, function (error) { return _this.handleServiceErrors(error, _this.securityService.serviceContext); }, function () { return _this.finishRequest(_this.componentName); });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    SubscribeComponent.prototype.handleSubscribeUser = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var /** @type {?} */ functionName = 'handleSubscribeUser';
        this.loggingService.log(this.componentName, Severity.Information, "[" + functionName + "]: Preparing to handle the response from the [SecurityService] in the " + this.componentName + ".");
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, Severity.Information, "Successfully processed request to create subscriber. Prepare to download...");
                this.subscribe.emit(/** @type {?} */ (response));
            }
            else {
                this.handleServiceErrors(/** @type {?} */ (response), this.securityService.serviceContext);
            }
        }
        else {
            // TODO: NEED TO HANDLE
        }
    };
    SubscribeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bm-subscribe',
                    template: "<buildmotion-alert [alertNotification]=\"alertNotification\" [hasMessage]=\"alertNotification.showAlert\"></buildmotion-alert>\n  <!-- SUBSCRIBE SIGN-UP FORM -->\n  <form [formGroup]=\"_form\" (ngSubmit)=\"submitForm()\">\n    <!-- SUBSCRIBER NAME -->\n    <div class=\"input-group form-group-no-border\">\n      <span class=\"input-group-addon\">\n        <i class=\"now-ui-icons users_circle-08\"></i>\n      </span>\n      <input type=\"text\" formControlName=\"subscriberName\" class=\"form-control\" placeholder=\"Name...\">\n    </div>\n    <!-- SUBSCRIBER EMAIL -->\n    <div class=\"input-group form-group-no-border\">\n      <span class=\"input-group-addon\">\n        <i class=\"now-ui-icons ui-1_email-85\"></i>\n      </span>\n      <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" placeholder=\"Email...\">\n    </div>\n    <!-- SUBSCRIBE BUTTON -->\n    <button class=\"btn btn-neutral btn-round btn-lg\">Subscribe\n      <i class=\"fa fa-check ml-1\"></i>\n    </button>\n  </form>\n  <!-- SUBSCRIBE SIGN-UP FORM -->"
                },] },
    ];
    /** @nocollapse */
    SubscribeComponent.ctorParameters = function () { return [
        { type: BuildMotionSecurityService, },
        { type: LoggingService, },
        { type: FormBuilder, },
        { type: Router, },
    ]; };
    SubscribeComponent.propDecorators = {
        "subscribe": [{ type: Output },],
    };
    return SubscribeComponent;
}(ComponentBase));
export { SubscribeComponent };
function SubscribeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SubscribeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SubscribeComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SubscribeComponent.propDecorators;
    /** @type {?} */
    SubscribeComponent.prototype.subscribe;
    /** @type {?} */
    SubscribeComponent.prototype._form;
    /** @type {?} */
    SubscribeComponent.prototype.subscriber;
    /** @type {?} */
    SubscribeComponent.prototype.securityService;
    /** @type {?} */
    SubscribeComponent.prototype.formBuilder;
}
//# sourceMappingURL=subscribe.component.js.map