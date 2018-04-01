import { __extends } from 'tslib';
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
}(ActionBase));
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
            .addRule(new StringIsNotNullEmptyRange('UserNameIsValid', 'The user name value is not valid. Must be between 1-80 characters.', this.confirmationToken.UserName, 1, 80, true))
            .addRule(new StringIsNotNullEmptyRange('ConfirmationTokenIsValid', 'The confirmation token value is not valid.', this.confirmationToken.ConfirmationToken, 40, 40, true));
        console.log("Running the [preValidateAction] for the " + this.actionName + " action.");
    };
    ConfirmSubscriberAction.prototype.performAction = function () {
        this.loggingService.log(this.actionName, Severity.Information, "Running the [performAction] for the " + this.actionName + ".");
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
            .addRule(new StringIsNotNullEmptyRange('NameIsValid', 'The name value is not valid. Must be between 1-40 characters.', this.subscriber.Name, 2, 40, true))
            .addRule(new StringIsNotNullEmptyRange('EmailIsValid', 'The email address value is not valid. Must be between 8-60 characters.', this.subscriber.EmailAddress, 8, 60, true));
    };
    RegisterSubscriberAction.prototype.performAction = function () {
        this.loggingService.log(this.actionName, Severity.Information, "Running the [performAction] for the " + this.actionName + ".");
        this.response = this.businessProvider.subscriberApiService.registerSubscriber(this.subscriber);
    };
    return RegisterSubscriberAction;
}(SubscriberActionBase));
var SubscriberApiService = (function (_super) {
    __extends(SubscriberApiService, _super);
    function SubscriberApiService(http, httpService, loggingService) {
        var _this = _super.call(this, http, loggingService) || this;
        _this.http = http;
        _this.httpService = httpService;
        _this.loggingService = loggingService;
        _this.url = '/api/security';
        _this.serviceName = 'SecurityHttpService';
        return _this;
    }
    SubscriberApiService.prototype.registerSubscriber = function (subscriber) {
        var requestUrl = 'api/subscriber/register';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = JSON.stringify(subscriber);
        var options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.prototype.confirmSubscriber = function (confirmationToken) {
        var requestUrl = 'api/subscriber/confirmation';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = JSON.stringify(confirmationToken);
        var options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.prototype.retrieveSubscribers = function () {
        var requestUrl = 'api/subscriber';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = '';
        var options = this.httpService.createRequestOptions(RequestMethod.Get, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    SubscriberApiService.prototype.removeSubscriber = function (subscriber) {
        var requestUrl = 'api/subscriber/remove';
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to call: " + requestUrl);
        var body = JSON.stringify(subscriber);
        var options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    };
    return SubscriberApiService;
}(HttpBaseService));
SubscriberApiService.decorators = [
    { type: Injectable },
];
SubscriberApiService.ctorParameters = function () { return [
    { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
    { type: HttpBaseService, decorators: [{ type: Inject, args: [HttpBaseService,] },] },
    { type: LoggingService, },
]; };
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
}(ServiceBase));
SubscriberBusinessProviderService.decorators = [
    { type: Injectable },
];
SubscriberBusinessProviderService.ctorParameters = function () { return [
    { type: LoggingService, },
    { type: SubscriberApiService, decorators: [{ type: Inject, args: [SubscriberApiService,] },] },
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
        this.loggingService.log(this.serviceName, Severity.Information, this.serviceName + " preparing to create a new subscription.");
        return this.businessProvider.registerSubscriber(subscriber);
    };
    BuildMotionSecurityService.prototype.confirmSubscriber = function (confirmationToken) {
        this.loggingService.log(this.serviceName, Severity.Information, "Preparing to confirm subscriber.");
        return this.businessProvider.confirmSubscriber(confirmationToken);
    };
    return BuildMotionSecurityService;
}(ServiceBase));
BuildMotionSecurityService.decorators = [
    { type: Injectable },
];
BuildMotionSecurityService.ctorParameters = function () { return [
    { type: LoggingService, },
    { type: SubscriberBusinessProviderService, },
]; };
var SubscribeComponent = (function (_super) {
    __extends(SubscribeComponent, _super);
    function SubscribeComponent(securityService, loggingService, formBuilder, router) {
        var _this = _super.call(this, 'SubscribeComponent', loggingService, router) || this;
        _this.securityService = securityService;
        _this.formBuilder = formBuilder;
        _this.subscribe = new EventEmitter();
        return _this;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SubscribeComponent.prototype.buildForm = function () {
        this._form = this.formBuilder.group({
            subscriberName: ['', Validators.required],
            emailAddress: ['', Validators.required]
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
        this.loggingService.log(this.componentName, Severity.Information, "[" + functionName + "]: Preparing to handle the response from the [SecurityService] in the " + this.componentName + ".");
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, Severity.Information, "Successfully processed request to create subscriber. Prepare to download...");
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
}(ComponentBase));
SubscribeComponent.decorators = [
    { type: Component, args: [{
                selector: 'bm-subscribe',
                template: "<buildmotion-alert [alertNotification]=\"alertNotification\" [hasMessage]=\"alertNotification.showAlert\"></buildmotion-alert>\n  <!-- SUBSCRIBE SIGN-UP FORM -->\n  <form [formGroup]=\"_form\" (ngSubmit)=\"submitForm()\">\n    <!-- SUBSCRIBER NAME -->\n    <div class=\"input-group form-group-no-border\">\n      <span class=\"input-group-addon\">\n        <i class=\"now-ui-icons users_circle-08\"></i>\n      </span>\n      <input type=\"text\" formControlName=\"subscriberName\" class=\"form-control\" placeholder=\"Name...\">\n    </div>\n    <!-- SUBSCRIBER EMAIL -->\n    <div class=\"input-group form-group-no-border\">\n      <span class=\"input-group-addon\">\n        <i class=\"now-ui-icons ui-1_email-85\"></i>\n      </span>\n      <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" placeholder=\"Email...\">\n    </div>\n    <!-- SUBSCRIBE BUTTON -->\n    <button class=\"btn btn-neutral btn-round btn-lg\">Subscribe\n      <i class=\"fa fa-check ml-1\"></i>\n    </button>\n  </form>\n  <!-- SUBSCRIBE SIGN-UP FORM -->"
            },] },
];
SubscribeComponent.ctorParameters = function () { return [
    { type: BuildMotionSecurityService, },
    { type: LoggingService, },
    { type: FormBuilder, },
    { type: Router, },
]; };
SubscribeComponent.propDecorators = {
    "subscribe": [{ type: Output },],
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
    ConfirmSubscriptionComponent.prototype.ngOnInit = function () {
        this.loggingService.log(this.componentName, Severity.Information, "Running [ngOnInit] for " + this.componentName);
        this.retrieveQueryParams();
    };
    ConfirmSubscriptionComponent.prototype.retrieveQueryParams = function () {
        var _this = this;
        this.loggingService.log(this.componentName, Severity.Information, "Preparing to retrieve the [queryParams] from " + this.componentName + ".");
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
            UserName: [this.email, Validators.required],
            ConfirmationToken: [this.confirmationToken, Validators.required]
        });
    };
    ConfirmSubscriptionComponent.prototype.submitForm = function () {
        var _this = this;
        this.loggingService.log(this.componentName, Severity.Information, "Form: {form | json}");
        this.resetAlertNotifications();
        var token = new ConfirmationToken(this._form.value.UserName, this._form.value.ConfirmationToken);
        this.securityService.confirmSubscriber(token).subscribe(function (response) { return _this.handleSubmit(response); }, function (error) { return _this.handleServiceErrors(error, _this.securityService.serviceContext); }, function () { return _this.finishRequest(_this.componentName); });
    };
    ConfirmSubscriptionComponent.prototype.handleSubmit = function (response) {
        this.loggingService.log(this.componentName, Severity.Information, "Preparing to handle the response from the " + this.securityService.serviceName + " in the " + this.componentName + ".");
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, Severity.Information, "Successfully processed subscriber confirmation.");
                this.confirm.emit((response));
            }
            else {
                this.loggingService.log(this.componentName, Severity.Error, this.componentName + "; Status is fail.");
                this.showResponseErrors((response));
            }
        }
        else {
            this.loggingService.log(this.componentName, Severity.Error, 'Unexpected service error...I guess the application pooped its pants, ouch!!');
        }
    };
    return ConfirmSubscriptionComponent;
}(ComponentBase));
ConfirmSubscriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'bm-confirm-subscription',
                template: "<buildmotion-alert [alertNotification]=\"alertNotification\" [hasMessage]=\"alertNotification.showAlert\"></buildmotion-alert>\n  <form [formGroup]=\"_form\" (ngSubmit)=\"submitForm()\">\n    <div class=\"md-form\">\n      <i class=\"fa fa-envelope prefix\"></i>\n      <input type=\"text\" id=\"UserName\" class=\"form-control\" formControlName=\"UserName\">\n      <label for=\"UserName\">Your email address.</label>\n    </div>\n    <div class=\"md-form\">\n      <i class=\"fa fa-person prefix\"></i>\n      <input type=\"text\" id=\"ConfirmationToken\" class=\"form-control\" formControlName=\"ConfirmationToken\">\n      <label for=\"ConfirmationToken\">Enter token from email.</label>\n    </div>\n    <div class=\"text-xs-center\">\n      <button class=\"btn btn-lime\" type=\"submit\">Confirm Account</button>\n    </div>\n  </form>"
            },] },
];
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
var BuildMotionSecurityModule = (function () {
    function BuildMotionSecurityModule() {
    }
    return BuildMotionSecurityModule;
}());
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

export { BuildMotionSecurityModule, BuildMotionSecurityService, SubscribeComponent, ConfirmationToken, Credentials, OAuthResponse, Subscriber, SubscriberItem, UserAccount, SubscriberApiService as ɵb, SubscriberBusinessProviderService as ɵa, ConfirmSubscriptionComponent as ɵc };
//# sourceMappingURL=buildmotion-security.js.map
