import { ActionBase, HttpBaseService, ServiceBase, BuildMotionFoundationModule } from '@buildmotion/foundation';
import 'rxjs/add/observable/throw';
import { StringIsNotNullEmptyRange } from 'angular-rules-engine';
import { Severity, LoggingService, BuildMotionLoggingModule } from '@buildmotion/logging';
import { Inject, Injectable, Component, Output, EventEmitter, NgModule } from '@angular/core';
import { Http, RequestMethod, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentBase, BuildMotionCoreModule } from '@buildmotion/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Subscriber = (function () {
    /**
     * Use to create a new subscriber for the application. This is not an account - only
     * a subscription to resources from the application.
     * @param subscriberName\
     * @param subscriberEmail
     */
    function Subscriber(subscriberName, subscriberEmail) {
        this.SubscriptionStart = new Date();
        this.Name = subscriberName;
        this.EmailAddress = subscriberEmail;
    }
    return Subscriber;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SubscriberActionBase = (function (_super) {
    __extends(SubscriberActionBase, _super);
    function SubscriberActionBase() {
        return _super.call(this) || this;
    }
    /**
    * Use the [Do] method to perform the action.
    */
    /**
     * Use the [Do] method to perform the action.
     * @param {?} businessProvider
     * @return {?}
     */
    SubscriberActionBase.prototype.Do = /**
     * Use the [Do] method to perform the action.
     * @param {?} businessProvider
     * @return {?}
     */
    function (businessProvider) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;
        this.execute();
    };
    return SubscriberActionBase;
}(ActionBase));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConfirmSubscriberAction = (function (_super) {
    __extends$1(ConfirmSubscriberAction, _super);
    function ConfirmSubscriberAction(confirmationToken) {
        var _this = _super.call(this) || this;
        _this.confirmationToken = confirmationToken;
        _this.actionName = 'ConfirmSubscriberAction';
        return _this;
    }
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     */
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     * @return {?}
     */
    ConfirmSubscriberAction.prototype.preValidateAction = /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     * @return {?}
     */
    function () {
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
        this.validationContext
            .addRule(new StringIsNotNullEmptyRange('UserNameIsValid', 'The user name value is not valid. Must be between 1-80 characters.', this.confirmationToken.UserName, 1, 80, true))
            .addRule(new StringIsNotNullEmptyRange('ConfirmationTokenIsValid', 'The confirmation token value is not valid.', this.confirmationToken.ConfirmationToken, 40, 40, true));
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
    };
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     */
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     * @return {?}
     */
    ConfirmSubscriberAction.prototype.performAction = /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     * @return {?}
     */
    function () {
        this.loggingService.log(this.actionName, Severity.Information, "Running the [performAction] for the " + this.actionName + ".");
        this.response = this.businessProvider.subscriberApiService.confirmSubscriber(this.confirmationToken);
    };
    return ConfirmSubscriberAction;
}(SubscriberActionBase));

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RegisterSubscriberAction = (function (_super) {
    __extends$2(RegisterSubscriberAction, _super);
    function RegisterSubscriberAction(subscriber) {
        var _this = _super.call(this) || this;
        _this.subscriber = subscriber;
        _this.actionName = 'CreateUserSubscriptionAction';
        return _this;
    }
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     */
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     * @return {?}
     */
    RegisterSubscriberAction.prototype.preValidateAction = /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     * @return {?}
     */
    function () {
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
        this.validationContext
            .addRule(new StringIsNotNullEmptyRange('NameIsValid', 'The name value is not valid. Must be between 1-40 characters.', this.subscriber.Name, 2, 40, true))
            .addRule(new StringIsNotNullEmptyRange('EmailIsValid', 'The email address value is not valid. Must be between 8-60 characters.', this.subscriber.EmailAddress, 8, 60, true));
    };
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     */
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     * @return {?}
     */
    RegisterSubscriberAction.prototype.performAction = /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     * @return {?}
     */
    function () {
        this.loggingService.log(this.actionName, Severity.Information, "Running the [performAction] for the " + this.actionName + ".");
        this.response = this.businessProvider.subscriberApiService.registerSubscriber(this.subscriber);
    };
    return RegisterSubscriberAction;
}(SubscriberActionBase));

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SubscriberApiService = (function (_super) {
    __extends$3(SubscriberApiService, _super);
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
     * Use to register a new subscriber.
     * @param {?} subscriber contains the subscriber's name and email address. Must be a valid email address.
     * @return {?}
     */
    SubscriberApiService.prototype.registerSubscriber = /**
     * Use to register a new subscriber.
     * @param {?} subscriber contains the subscriber's name and email address. Must be a valid email address.
     * @return {?}
     */
    function (subscriber) {
        var /** @type {?} */ requestUrl = 'api/subscriber/register';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var /** @type {?} */ body = JSON.stringify(subscriber);
        var /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
        /**TEMPORARY IMPLEMENTATION */
        // let response = new ServiceResponse();
        // response.IsSuccess = true;
        // response.Message = `Fake message from ${this.serviceName}`;
        // response.Data = true;
        // let subject: BehaviorSubject<any> = new BehaviorSubject(response);
        // return subject.asObservable();
        /**TEMPORARY IMPLEMENTATION */
    };
    /**
     * Use to process the confirmation token from a new subscriber.
     * @param {?} confirmationToken
     * @return {?}
     */
    SubscriberApiService.prototype.confirmSubscriber = /**
     * Use to process the confirmation token from a new subscriber.
     * @param {?} confirmationToken
     * @return {?}
     */
    function (confirmationToken) {
        var /** @type {?} */ requestUrl = 'api/subscriber/confirmation';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var /** @type {?} */ body = JSON.stringify(confirmationToken);
        var /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
        /**TEMPORARY IMPLEMENTATION */
        // let response = { IsSuccess: false, Message: `Fake message from ${this.serviceName}` };
        // let subject: BehaviorSubject<any> = new BehaviorSubject(response);
        // return subject.asObservable();
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

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SubscriberBusinessProviderService = (function (_super) {
    __extends$4(SubscriberBusinessProviderService, _super);
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
    /**
     * @param {?} confirmationToken
     * @return {?}
     */
    SubscriberBusinessProviderService.prototype.confirmSubscriber = /**
     * @param {?} confirmationToken
     * @return {?}
     */
    function (confirmationToken) {
        var /** @type {?} */ action = new ConfirmSubscriberAction(confirmationToken);
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

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BuildMotionSecurityService = (function (_super) {
    __extends$5(BuildMotionSecurityService, _super);
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

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SubscribeComponent = (function (_super) {
    __extends$6(SubscribeComponent, _super);
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
        this.securityService.serviceContext.Messages = [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Use the model for account confirmation information.
 */
var  /**
 * Use the model for account confirmation information.
 */
ConfirmationToken = (function () {
    /**
     * Constructor for the account confirmation token information.
     */
    function ConfirmationToken(UserName, ConfirmationToken) {
        this.UserName = UserName;
        this.ConfirmationToken = ConfirmationToken;
    }
    return ConfirmationToken;
}());

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConfirmSubscriptionComponent = (function (_super) {
    __extends$7(ConfirmSubscriptionComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BuildMotionSecurityModule = (function () {
    function BuildMotionSecurityModule() {
    }
    BuildMotionSecurityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BuildMotionCoreModule,
                        BuildMotionFoundationModule,
                        BuildMotionLoggingModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpModule,
                        RouterModule
                    ],
                    declarations: [SubscribeComponent, ConfirmSubscriptionComponent],
                    exports: [
                        ConfirmSubscriptionComponent,
                        SubscribeComponent
                    ],
                    providers: [
                        SubscriberApiService,
                        SubscriberBusinessProviderService
                    ]
                },] },
    ];
    /** @nocollapse */
    BuildMotionSecurityModule.ctorParameters = function () { return []; };
    return BuildMotionSecurityModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Credentials = (function () {
    /**
     * Use to contain credentials for the login process.
     * @param username: The user name for the specified application user.
     * @param password: The password for the specified user.
     */
    function Credentials(username, password) {
        this.UserName = username;
        this.Password = password;
    }
    /**
     * @return {?}
     */
    Credentials.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "UserName: " + this.UserName + "; Password: ************";
    };
    return Credentials;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Contains the response data from the OWIN OAuth provider.
 */
var  /**
 * Contains the response data from the OWIN OAuth provider.
 */
OAuthResponse = (function () {
    function OAuthResponse() {
    }
    /**
     * Use to return a string representing the OAuthResponse.
     */
    /**
     * Use to return a string representing the OAuthResponse.
     * @return {?}
     */
    OAuthResponse.prototype.toString = /**
     * Use to return a string representing the OAuthResponse.
     * @return {?}
     */
    function () {
        return "access_token: " + this.access_token + "; expires_in: " + this.expires_in + "; token_type: " + this.token_type;
    };
    return OAuthResponse;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SubscriberItem = (function () {
    function SubscriberItem() {
        this.SubscriptionStart = new Date();
    }
    return SubscriberItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Use to transport data to create a new account.
 */
var  /**
 * Use to transport data to create a new account.
 */
UserAccount = (function () {
    function UserAccount() {
    }
    return UserAccount;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BuildMotionSecurityModule, BuildMotionSecurityService, SubscribeComponent, ConfirmationToken, Credentials, OAuthResponse, Subscriber, SubscriberItem, UserAccount, SubscriberApiService as ɵb, SubscriberBusinessProviderService as ɵa, ConfirmSubscriptionComponent as ɵc };
