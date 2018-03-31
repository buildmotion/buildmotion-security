(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@buildmotion/foundation'), require('rxjs/add/observable/throw'), require('angular-rules-engine'), require('@buildmotion/logging'), require('@angular/core'), require('@angular/http'), require('rxjs/add/operator/map'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/observeOn'), require('rxjs/add/operator/toPromise'), require('@angular/router'), require('@angular/forms'), require('@buildmotion/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@buildmotion/security', ['exports', '@buildmotion/foundation', 'rxjs/add/observable/throw', 'angular-rules-engine', '@buildmotion/logging', '@angular/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/operator/observeOn', 'rxjs/add/operator/toPromise', '@angular/router', '@angular/forms', '@buildmotion/core', '@angular/common'], factory) :
	(factory((global.buildmotion = global.buildmotion || {}, global.buildmotion.security = {}),global.foundation,global.Rx.Observable,global.angularRulesEngine,global.logging,global.ng.core,global.ng.http,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.router,global.ng.forms,global.core$1,global.ng.common));
}(this, (function (exports,foundation,_throw,angularRulesEngine,logging,core,http,map,_catch,observeOn,toPromise,router,forms,core$1,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Subscriber = (function () {
    function Subscriber(subscriberName, subscriberEmail) {
        this.SubscriptionStart = new Date();
        this.Name = subscriberName;
        this.EmailAddress = subscriberEmail;
    }
    return Subscriber;
}());
var SubscriberActionBase = (function (_super) {
    __extends(SubscriberActionBase, _super);
    function SubscriberActionBase() {
        return _super.call(this) || this;
    }
    SubscriberActionBase.prototype.Do = function (businessProvider) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;
        this.execute();
    };
    return SubscriberActionBase;
}(foundation.ActionBase));
var ConfirmSubscriberAction = (function (_super) {
    __extends(ConfirmSubscriberAction, _super);
    function ConfirmSubscriberAction(confirmationToken) {
        var _this = _super.call(this) || this;
        _this.confirmationToken = confirmationToken;
        _this.actionName = 'ConfirmSubscriberAction';
        return _this;
    }
    ConfirmSubscriberAction.prototype.preValidateAction = function () {
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
        this.validationContext
            .addRule(new angularRulesEngine.StringIsNotNullEmptyRange('UserNameIsValid', 'The user name value is not valid. Must be between 1-80 characters.', this.confirmationToken.UserName, 1, 80, true))
            .addRule(new angularRulesEngine.StringIsNotNullEmptyRange('ConfirmationTokenIsValid', 'The confirmation token value is not valid.', this.confirmationToken.ConfirmationToken, 40, 40, true));
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
    };
    ConfirmSubscriberAction.prototype.performAction = function () {
        this.loggingService.log(this.actionName, logging.Severity.Information, "Running the [performAction] for the " + this.actionName + ".");
        this.response = this.businessProvider.subscriberApiService.confirmSubscriber(this.confirmationToken);
    };
    return ConfirmSubscriberAction;
}(SubscriberActionBase));
var RegisterSubscriberAction = (function (_super) {
    __extends(RegisterSubscriberAction, _super);
    function RegisterSubscriberAction(subscriber) {
        var _this = _super.call(this) || this;
        _this.subscriber = subscriber;
        _this.actionName = 'CreateUserSubscriptionAction';
        return _this;
    }
    RegisterSubscriberAction.prototype.preValidateAction = function () {
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
        this.validationContext
            .addRule(new angularRulesEngine.StringIsNotNullEmptyRange('NameIsValid', 'The name value is not valid. Must be between 1-40 characters.', this.subscriber.Name, 2, 40, true))
            .addRule(new angularRulesEngine.StringIsNotNullEmptyRange('EmailIsValid', 'The email address value is not valid. Must be between 8-60 characters.', this.subscriber.EmailAddress, 8, 60, true));
    };
    RegisterSubscriberAction.prototype.performAction = function () {
        this.loggingService.log(this.actionName, logging.Severity.Information, "Running the [performAction] for the " + this.actionName + ".");
        this.response = this.businessProvider.subscriberApiService.registerSubscriber(this.subscriber);
    };
    return RegisterSubscriberAction;
}(SubscriberActionBase));
var SubscriberApiService = (function (_super) {
    __extends(SubscriberApiService, _super);
    function SubscriberApiService(http$$1, httpService, loggingService) {
        var _this = _super.call(this, http$$1, loggingService) || this;
        _this.http = http$$1;
        _this.httpService = httpService;
        _this.loggingService = loggingService;
        _this.url = '/api/security';
        _this.serviceName = 'SecurityHttpService';
        return _this;
    }
    SubscriberApiService.prototype.registerSubscriber = function (subscriber) {
        var requestUrl = 'api/subscriber/register';
        this.loggingService.log(this.serviceName, logging.Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = JSON.stringify(subscriber);
        var options = this.httpService.createRequestOptions(http.RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.prototype.confirmSubscriber = function (confirmationToken) {
        var requestUrl = 'api/subscriber/confirmation';
        this.loggingService.log(this.serviceName, logging.Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = JSON.stringify(confirmationToken);
        var options = this.httpService.createRequestOptions(http.RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.prototype.retrieveSubscribers = function () {
        var requestUrl = 'api/subscriber';
        this.loggingService.log(this.serviceName, logging.Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = '';
        var options = this.httpService.createRequestOptions(http.RequestMethod.Get, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.prototype.removeSubscriber = function (subscriber) {
        var requestUrl = 'api/subscriber/remove';
        this.loggingService.log(this.serviceName, logging.Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = JSON.stringify(subscriber);
        var options = this.httpService.createRequestOptions(http.RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    return SubscriberApiService;
}(foundation.HttpBaseService));
SubscriberApiService.decorators = [
    { type: core.Injectable },
];
SubscriberApiService.ctorParameters = function () { return [
    { type: http.Http, decorators: [{ type: core.Inject, args: [http.Http,] },] },
    { type: foundation.HttpBaseService, decorators: [{ type: core.Inject, args: [foundation.HttpBaseService,] },] },
    { type: logging.LoggingService, },
]; };
var SubscriberBusinessProviderService = (function (_super) {
    __extends(SubscriberBusinessProviderService, _super);
    function SubscriberBusinessProviderService(loggingService, subscriberApiService) {
        var _this = _super.call(this, loggingService) || this;
        _this.loggingService = loggingService;
        _this.subscriberApiService = subscriberApiService;
        _this.serviceName = 'SubscriberBusinessProviderService';
        _this.loggingService.log(_this.serviceName, logging.Severity.Information, "Running the constructor for " + _this.serviceName);
        return _this;
    }
    SubscriberBusinessProviderService.prototype.registerSubscriber = function (subscriber) {
        var action = new RegisterSubscriberAction(subscriber);
        action.Do(this);
        return action.response;
    };
    SubscriberBusinessProviderService.prototype.confirmSubscriber = function (confirmationToken) {
        var action = new ConfirmSubscriberAction(confirmationToken);
        action.Do(this);
        return action.response;
    };
    return SubscriberBusinessProviderService;
}(foundation.ServiceBase));
SubscriberBusinessProviderService.decorators = [
    { type: core.Injectable },
];
SubscriberBusinessProviderService.ctorParameters = function () { return [
    { type: logging.LoggingService, },
    { type: SubscriberApiService, decorators: [{ type: core.Inject, args: [SubscriberApiService,] },] },
]; };
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
    BuildMotionSecurityService.prototype.registerSubscriber = function (subscriber) {
        this.loggingService.log(this.serviceName, logging.Severity.Information, this.serviceName + " preparing to create a new subscription.");
        return this.businessProvider.registerSubscriber(subscriber);
    };
    BuildMotionSecurityService.prototype.confirmSubscriber = function (confirmationToken) {
        this.loggingService.log(this.serviceName, logging.Severity.Information, "Preparing to confirm subscriber.");
        return this.businessProvider.confirmSubscriber(confirmationToken);
    };
    return BuildMotionSecurityService;
}(foundation.ServiceBase));
BuildMotionSecurityService.decorators = [
    { type: core.Injectable },
];
BuildMotionSecurityService.ctorParameters = function () { return [
    { type: logging.LoggingService, },
    { type: SubscriberBusinessProviderService, },
]; };
var SubscribeComponent = (function (_super) {
    __extends(SubscribeComponent, _super);
    function SubscribeComponent(securityService, loggingService, formBuilder, router$$1) {
        var _this = _super.call(this, 'SubscribeComponent', loggingService, router$$1) || this;
        _this.securityService = securityService;
        _this.formBuilder = formBuilder;
        _this.subscribe = new core.EventEmitter();
        return _this;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SubscribeComponent.prototype.buildForm = function () {
        this._form = this.formBuilder.group({
            subscriberName: ['', forms.Validators.required],
            emailAddress: ['', forms.Validators.required]
        });
    };
    SubscribeComponent.prototype.submitForm = function () {
        this.securityService.serviceContext.Messages = [];
        this.subscriber = new Subscriber(this._form.value.subscriberName, this._form.value.emailAddress);
        this.subscribeUser(this.subscriber);
    };
    SubscribeComponent.prototype.subscribeUser = function (subscriber) {
        var _this = this;
        this.securityService.registerSubscriber(subscriber).subscribe(function (response) { return _this.handleSubscribeUser(response); }, function (error) { return _this.handleServiceErrors(error, _this.securityService.serviceContext); }, function () { return _this.finishRequest(_this.componentName); });
    };
    SubscribeComponent.prototype.handleSubscribeUser = function (response) {
        var functionName = 'handleSubscribeUser';
        this.loggingService.log(this.componentName, logging.Severity.Information, "[" + functionName + "]: Preparing to handle the response from the [SecurityService] in the " + this.componentName + ".");
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, logging.Severity.Information, "Successfully processed request to create subscriber. Prepare to download...");
                this.subscribe.emit((response));
            }
            else {
                this.handleServiceErrors((response), this.securityService.serviceContext);
            }
        }
        else {
        }
    };
    return SubscribeComponent;
}(core$1.ComponentBase));
SubscribeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'bm-subscribe',
                template: "<buildmotion-alert [alertNotification]=\"alertNotification\" [hasMessage]=\"alertNotification.showAlert\"></buildmotion-alert>\n  <!-- SUBSCRIBE SIGN-UP FORM -->\n  <form [formGroup]=\"_form\" (ngSubmit)=\"submitForm()\">\n    <!-- SUBSCRIBER NAME -->\n    <div class=\"input-group form-group-no-border\">\n      <span class=\"input-group-addon\">\n        <i class=\"now-ui-icons users_circle-08\"></i>\n      </span>\n      <input type=\"text\" formControlName=\"subscriberName\" class=\"form-control\" placeholder=\"Name...\">\n    </div>\n    <!-- SUBSCRIBER EMAIL -->\n    <div class=\"input-group form-group-no-border\">\n      <span class=\"input-group-addon\">\n        <i class=\"now-ui-icons ui-1_email-85\"></i>\n      </span>\n      <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" placeholder=\"Email...\">\n    </div>\n    <!-- SUBSCRIBE BUTTON -->\n    <button class=\"btn btn-neutral btn-round btn-lg\">Subscribe\n      <i class=\"fa fa-check ml-1\"></i>\n    </button>\n  </form>\n  <!-- SUBSCRIBE SIGN-UP FORM -->"
            },] },
];
SubscribeComponent.ctorParameters = function () { return [
    { type: BuildMotionSecurityService, },
    { type: logging.LoggingService, },
    { type: forms.FormBuilder, },
    { type: router.Router, },
]; };
SubscribeComponent.propDecorators = {
    "subscribe": [{ type: core.Output },],
};
var ConfirmationToken = (function () {
    function ConfirmationToken(UserName, ConfirmationToken) {
        this.UserName = UserName;
        this.ConfirmationToken = ConfirmationToken;
    }
    return ConfirmationToken;
}());
var ConfirmSubscriptionComponent = (function (_super) {
    __extends(ConfirmSubscriptionComponent, _super);
    function ConfirmSubscriptionComponent(securityService, loggingService, formBuilder, route, router$$1) {
        var _this = _super.call(this, "ConfirmSubscriptionComponent", loggingService, router$$1) || this;
        _this.securityService = securityService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.confirm = new core.EventEmitter();
        _this.email = '';
        _this.confirmationToken = '';
        return _this;
    }
    ConfirmSubscriptionComponent.prototype.ngOnInit = function () {
        this.loggingService.log(this.componentName, logging.Severity.Information, "Running [ngOnInit] for " + this.componentName);
        this.retrieveQueryParams();
    };
    ConfirmSubscriptionComponent.prototype.retrieveQueryParams = function () {
        var _this = this;
        this.loggingService.log(this.componentName, logging.Severity.Information, "Preparing to retrieve the [queryParams] from " + this.componentName + ".");
        try {
            this.route.params
                .map(function (params) { return (params['email']); }).subscribe(function (response) { return _this.handleEmailParam(response); }, function (error) { return _this.handleServiceErrors(error); }, function () { return _this.finishRequest('retrieveQueryParams'); });
            this.route.params
                .map(function (params) { return (params['confirmationToken']); }).subscribe(function (response) { return _this.handleConfirmationTokenParam(response); }, function (error) { return _this.handleServiceErrors(error); }, function () { return _this.finishRequest('retrieveQueryParams'); });
        }
        catch (error) {
            this.handleServiceErrors(error);
        }
    };
    ConfirmSubscriptionComponent.prototype.handleConfirmationTokenParam = function (token) {
        if (token) {
            this.confirmationToken = token;
            this.buildForm();
        }
    };
    ConfirmSubscriptionComponent.prototype.handleEmailParam = function (emailParam) {
        if (emailParam) {
            this.email = emailParam;
        }
    };
    ConfirmSubscriptionComponent.prototype.buildForm = function () {
        this._form = this.formBuilder.group({
            UserName: [this.email, forms.Validators.required],
            ConfirmationToken: [this.confirmationToken, forms.Validators.required]
        });
    };
    ConfirmSubscriptionComponent.prototype.submitForm = function () {
        var _this = this;
        this.loggingService.log(this.componentName, logging.Severity.Information, "Form: {form | json}");
        this.resetAlertNotifications();
        var token = new ConfirmationToken(this._form.value.UserName, this._form.value.ConfirmationToken);
        this.securityService.confirmSubscriber(token).subscribe(function (response) { return _this.handleSubmit(response); }, function (error) { return _this.handleServiceErrors(error, _this.securityService.serviceContext); }, function () { return _this.finishRequest(_this.componentName); });
    };
    ConfirmSubscriptionComponent.prototype.handleSubmit = function (response) {
        this.loggingService.log(this.componentName, logging.Severity.Information, "Preparing to handle the response from the " + this.securityService.serviceName + " in the " + this.componentName + ".");
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, logging.Severity.Information, "Successfully processed subscriber confirmation.");
                this.confirm.emit((response));
            }
            else {
                this.loggingService.log(this.componentName, logging.Severity.Error, this.componentName + "; Status is fail.");
                this.showResponseErrors((response));
            }
        }
        else {
            this.loggingService.log(this.componentName, logging.Severity.Error, 'Unexpected service error...I guess the application pooped its pants, ouch!!');
        }
    };
    return ConfirmSubscriptionComponent;
}(core$1.ComponentBase));
ConfirmSubscriptionComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'bm-confirm-subscription',
                template: "<buildmotion-alert [alertNotification]=\"alertNotification\" [hasMessage]=\"alertNotification.showAlert\"></buildmotion-alert>\n  <form [formGroup]=\"_form\" (ngSubmit)=\"submitForm()\">\n    <div class=\"md-form\">\n      <i class=\"fa fa-envelope prefix\"></i>\n      <input type=\"text\" id=\"UserName\" class=\"form-control\" formControlName=\"UserName\">\n      <label for=\"UserName\">Your email address.</label>\n    </div>\n    <div class=\"md-form\">\n      <i class=\"fa fa-person prefix\"></i>\n      <input type=\"text\" id=\"ConfirmationToken\" class=\"form-control\" formControlName=\"ConfirmationToken\">\n      <label for=\"ConfirmationToken\">Enter token from email.</label>\n    </div>\n    <div class=\"text-xs-center\">\n      <button class=\"btn btn-lime\" type=\"submit\">Confirm Account</button>\n    </div>\n  </form>"
            },] },
];
ConfirmSubscriptionComponent.ctorParameters = function () { return [
    { type: BuildMotionSecurityService, },
    { type: logging.LoggingService, },
    { type: forms.FormBuilder, },
    { type: router.ActivatedRoute, },
    { type: router.Router, },
]; };
ConfirmSubscriptionComponent.propDecorators = {
    "confirm": [{ type: core.Output },],
};
var BuildMotionSecurityModule = (function () {
    function BuildMotionSecurityModule() {
    }
    return BuildMotionSecurityModule;
}());
BuildMotionSecurityModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    core$1.BuildMotionCoreModule,
                    foundation.BuildMotionFoundationModule,
                    logging.BuildMotionLoggingModule,
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    http.HttpModule,
                    router.RouterModule
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
BuildMotionSecurityModule.ctorParameters = function () { return []; };
var Credentials = (function () {
    function Credentials(username, password) {
        this.UserName = username;
        this.Password = password;
    }
    Credentials.prototype.toString = function () {
        return "UserName: " + this.UserName + "; Password: ************";
    };
    return Credentials;
}());
var OAuthResponse = (function () {
    function OAuthResponse() {
    }
    OAuthResponse.prototype.toString = function () {
        return "access_token: " + this.access_token + "; expires_in: " + this.expires_in + "; token_type: " + this.token_type;
    };
    return OAuthResponse;
}());
var SubscriberItem = (function () {
    function SubscriberItem() {
        this.SubscriptionStart = new Date();
    }
    return SubscriberItem;
}());
var UserAccount = (function () {
    function UserAccount() {
    }
    return UserAccount;
}());

exports.BuildMotionSecurityModule = BuildMotionSecurityModule;
exports.BuildMotionSecurityService = BuildMotionSecurityService;
exports.SubscribeComponent = SubscribeComponent;
exports.ConfirmationToken = ConfirmationToken;
exports.Credentials = Credentials;
exports.OAuthResponse = OAuthResponse;
exports.Subscriber = Subscriber;
exports.SubscriberItem = SubscriberItem;
exports.UserAccount = UserAccount;
exports.ɵb = SubscriberApiService;
exports.ɵa = SubscriberBusinessProviderService;
exports.ɵc = ConfirmSubscriptionComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=buildmotion-security.umd.js.map
