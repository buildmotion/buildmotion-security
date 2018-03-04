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
import { Component, Output, EventEmitter } from "@angular/core";
import { ComponentBase } from "@buildmotion/core";
import { BuildMotionSecurityService, ConfirmationToken } from "..";
import { LoggingService, Severity } from "@buildmotion/logging";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
var ConfirmSubscriptionComponent = (function (_super) {
    __extends(ConfirmSubscriptionComponent, _super);
    function ConfirmSubscriptionComponent(securityService, loggingService, formBuilder, route, router) {
        var _this = _super.call(this, "ConfirmSubscriptionComponent", loggingService, router) || this;
        _this.securityService = securityService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.confirm = new EventEmitter();
        _this.email = '';
        _this.confirmationToken = '';
        return _this;
    }
    /**
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loggingService.log(this.componentName, Severity.Information, "Running [ngOnInit] for " + this.componentName);
        this.retrieveQueryParams();
    };
    /**
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.retrieveQueryParams = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loggingService.log(this.componentName, Severity.Information, "Preparing to retrieve the [queryParams] from " + this.componentName + ".");
        try {
            this.route.params
                .map(function (params) { return (params['email']); }).subscribe(function (response) { return _this.handleEmailParam(response); }, function (error) { return _this.handleServiceErrors(error); }, function () { return _this.finishRequest('retrieveQueryParams'); });
            this.route.params
                .map(function (params) { return (params['confirmationToken']); }).subscribe(function (response) { return _this.handleConfirmationTokenParam(response); }, function (error) { return _this.handleServiceErrors(error); }, function () { return _this.finishRequest('retrieveQueryParams'); });
        }
        catch (/** @type {?} */ error) {
            this.handleServiceErrors(error);
        }
    };
    /**
     * @param {?} token
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.handleConfirmationTokenParam = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        if (token) {
            this.confirmationToken = token;
            this.buildForm(); // begin form build after the params are retrieved from the url;
        }
    };
    /**
     * @param {?} emailParam
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.handleEmailParam = /**
     * @param {?} emailParam
     * @return {?}
     */
    function (emailParam) {
        if (emailParam) {
            this.email = emailParam;
        }
    };
    /**
     * Use to build the form for the specified target entity.
     */
    /**
     * Use to build the form for the specified target entity.
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.buildForm = /**
     * Use to build the form for the specified target entity.
     * @return {?}
     */
    function () {
        this._form = this.formBuilder.group({
            UserName: [this.email, Validators.required],
            ConfirmationToken: [this.confirmationToken, Validators.required]
        });
    };
    /**
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.submitForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loggingService.log(this.componentName, Severity.Information, "Form: {form | json}");
        this.resetAlertNotifications();
        var /** @type {?} */ token = new ConfirmationToken(this._form.value.UserName, this._form.value.ConfirmationToken);
        this.securityService.confirmSubscriber(token).subscribe(function (response) { return _this.handleSubmit(response); }, function (error) { return _this.handleServiceErrors(error, _this.securityService.serviceContext); }, function () { return _this.finishRequest(_this.componentName); });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    ConfirmSubscriptionComponent.prototype.handleSubmit = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        this.loggingService.log(this.componentName, Severity.Information, "Preparing to handle the response from the " + this.securityService.serviceName + " in the " + this.componentName + ".");
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, Severity.Information, "Successfully processed subscriber confirmation.");
                this.confirm.emit(/** @type {?} */ (response));
            }
            else {
                this.loggingService.log(this.componentName, Severity.Error, this.componentName + "; Status is fail.");
                this.showResponseErrors(/** @type {?} */ (response));
            }
        }
        else {
            this.loggingService.log(this.componentName, Severity.Error, 'Unexpected service error...I guess the application pooped its pants, ouch!!');
        }
    };
    ConfirmSubscriptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bm-confirm-subscription',
                    template: "<buildmotion-alert [alertNotification]=\"alertNotification\" [hasMessage]=\"alertNotification.showAlert\"></buildmotion-alert>\n  <form [formGroup]=\"_form\" (ngSubmit)=\"submitForm()\">\n    <div class=\"md-form\">\n      <i class=\"fa fa-envelope prefix\"></i>\n      <input type=\"text\" id=\"UserName\" class=\"form-control\" formControlName=\"UserName\">\n      <label for=\"UserName\">Your email address.</label>\n    </div>\n  \n    <div class=\"md-form\">\n      <i class=\"fa fa-person prefix\"></i>\n      <input type=\"text\" id=\"ConfirmationToken\" class=\"form-control\" formControlName=\"ConfirmationToken\">\n      <label for=\"ConfirmationToken\">Enter token from email.</label>\n    </div>\n  \n    <div class=\"text-xs-center\">\n      <button class=\"btn btn-lime\" type=\"submit\">Confirm Account</button>\n    </div>\n  </form>"
                },] },
    ];
    /** @nocollapse */
    ConfirmSubscriptionComponent.ctorParameters = function () { return [
        { type: BuildMotionSecurityService, },
        { type: LoggingService, },
        { type: FormBuilder, },
        { type: ActivatedRoute, },
        { type: Router, },
    ]; };
    ConfirmSubscriptionComponent.propDecorators = {
        "confirm": [{ type: Output },],
    };
    return ConfirmSubscriptionComponent;
}(ComponentBase));
export { ConfirmSubscriptionComponent };
function ConfirmSubscriptionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ConfirmSubscriptionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ConfirmSubscriptionComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ConfirmSubscriptionComponent.propDecorators;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype.confirm;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype._form;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype.email;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype.confirmationToken;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype.securityService;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype.formBuilder;
    /** @type {?} */
    ConfirmSubscriptionComponent.prototype.route;
}
//# sourceMappingURL=confirm-subscription.component.js.map