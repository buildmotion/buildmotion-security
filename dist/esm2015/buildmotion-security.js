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
class Subscriber {
    /**
     * Use to create a new subscriber for the application. This is not an account - only
     * a subscription to resources from the application.
     * @param {?} subscriberName
     * @param {?} subscriberEmail
     */
    constructor(subscriberName, subscriberEmail) {
        this.SubscriptionStart = new Date();
        this.Name = subscriberName;
        this.EmailAddress = subscriberEmail;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubscriberActionBase extends ActionBase {
    constructor() {
        super();
    }
    /**
     * Use the [Do] method to perform the action.
     * @param {?} businessProvider
     * @return {?}
     */
    Do(businessProvider) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;
        this.execute();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ConfirmSubscriberAction extends SubscriberActionBase {
    /**
     * @param {?} confirmationToken
     */
    constructor(confirmationToken) {
        super();
        this.confirmationToken = confirmationToken;
        this.actionName = 'ConfirmSubscriberAction';
    }
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     * @return {?}
     */
    preValidateAction() {
        console.log(`Running the [preValidateAction] for the ${this.actionName} action.`);
        this.validationContext
            .addRule(new StringIsNotNullEmptyRange('UserNameIsValid', 'The user name value is not valid. Must be between 1-80 characters.', this.confirmationToken.UserName, 1, 80, true))
            .addRule(new StringIsNotNullEmptyRange('ConfirmationTokenIsValid', 'The confirmation token value is not valid.', this.confirmationToken.ConfirmationToken, 40, 40, true));
        console.log(`Running the [preValidateAction] for the ${this.actionName} action.`);
    }
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     * @return {?}
     */
    performAction() {
        this.loggingService.log(this.actionName, Severity.Information, `Running the [performAction] for the ${this.actionName}.`);
        this.response = this.businessProvider.subscriberApiService.confirmSubscriber(this.confirmationToken);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RegisterSubscriberAction extends SubscriberActionBase {
    /**
     * @param {?} subscriber
     */
    constructor(subscriber) {
        super();
        this.subscriber = subscriber;
        this.actionName = 'CreateUserSubscriptionAction';
    }
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     * @return {?}
     */
    preValidateAction() {
        console.log(`Running the [preValidateAction] for the ${this.actionName} action.`);
        this.validationContext
            .addRule(new StringIsNotNullEmptyRange('NameIsValid', 'The name value is not valid. Must be between 1-40 characters.', this.subscriber.Name, 2, 40, true))
            .addRule(new StringIsNotNullEmptyRange('EmailIsValid', 'The email address value is not valid. Must be between 8-60 characters.', this.subscriber.EmailAddress, 8, 60, true));
    }
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     * @return {?}
     */
    performAction() {
        this.loggingService.log(this.actionName, Severity.Information, `Running the [performAction] for the ${this.actionName}.`);
        this.response = this.businessProvider.subscriberApiService.registerSubscriber(this.subscriber);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubscriberApiService extends HttpBaseService {
    /**
     * @param {?} http
     * @param {?} httpService
     * @param {?} loggingService
     */
    constructor(http, httpService, loggingService) {
        super(http, loggingService);
        this.http = http;
        this.httpService = httpService;
        this.loggingService = loggingService;
        this.url = '/api/security';
        this.serviceName = 'SecurityHttpService';
        // this.serviceContext = serviceContext;
    }
    /**
     * Use to register a new subscriber.
     * @param {?} subscriber contains the subscriber's name and email address. Must be a valid email address.
     * @return {?}
     */
    registerSubscriber(subscriber) {
        let /** @type {?} */ requestUrl = 'api/subscriber/register';
        this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);
        let /** @type {?} */ body = JSON.stringify(subscriber);
        let /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
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
     * @param {?} confirmationToken
     * @return {?}
     */
    confirmSubscriber(confirmationToken) {
        let /** @type {?} */ requestUrl = 'api/subscriber/confirmation';
        this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);
        let /** @type {?} */ body = JSON.stringify(confirmationToken);
        let /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
        /**TEMPORARY IMPLEMENTATION */
        // let response = { IsSuccess: false, Message: `Fake message from ${this.serviceName}` };
        // let subject: BehaviorSubject<any> = new BehaviorSubject(response);
        // return subject.asObservable();
        /**TEMPORARY IMPLEMENTATION */
    }
    /**
     * @return {?}
     */
    retrieveSubscribers() {
        const /** @type {?} */ requestUrl = 'api/subscriber';
        this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);
        const /** @type {?} */ body = '';
        const /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Get, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    removeSubscriber(subscriber) {
        const /** @type {?} */ requestUrl = 'api/subscriber/remove';
        this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to call: ${requestUrl}`);
        const /** @type {?} */ body = JSON.stringify(subscriber);
        const /** @type {?} */ options = this.httpService.createRequestOptions(RequestMethod.Post, this.httpService.createHeader(false), requestUrl, body);
        return this.httpService.executeRequest(options);
    }
}
SubscriberApiService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SubscriberApiService.ctorParameters = () => [
    { type: Http, decorators: [{ type: Inject, args: [Http,] },] },
    { type: HttpBaseService, decorators: [{ type: Inject, args: [HttpBaseService,] },] },
    { type: LoggingService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubscriberBusinessProviderService extends ServiceBase {
    /**
     * @param {?} loggingService
     * @param {?} subscriberApiService
     */
    constructor(loggingService, subscriberApiService) {
        super(loggingService);
        this.loggingService = loggingService;
        this.subscriberApiService = subscriberApiService;
        this.serviceName = 'SubscriberBusinessProviderService';
        this.loggingService.log(this.serviceName, Severity.Information, `Running the constructor for ${this.serviceName}`);
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    registerSubscriber(subscriber) {
        const /** @type {?} */ action = new RegisterSubscriberAction(subscriber);
        action.Do(this);
        return action.response;
    }
    /**
     * @param {?} confirmationToken
     * @return {?}
     */
    confirmSubscriber(confirmationToken) {
        const /** @type {?} */ action = new ConfirmSubscriberAction(confirmationToken);
        action.Do(this);
        return action.response;
    }
}
SubscriberBusinessProviderService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SubscriberBusinessProviderService.ctorParameters = () => [
    { type: LoggingService, },
    { type: SubscriberApiService, decorators: [{ type: Inject, args: [SubscriberApiService,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BuildMotionSecurityService extends ServiceBase {
    /**
     * @param {?} loggingService
     * @param {?} businessProvider
     */
    constructor(loggingService, businessProvider) {
        super(loggingService);
        this.businessProvider = businessProvider;
        this.serviceName = 'SecurityService';
        this.businessProvider.serviceContext = this.serviceContext;
        this.businessProvider.loggingService = this.loggingService;
    }
    /**
     * Use to register a new subscriber to the application.
     * @param {?} subscriber contains the user name and email address for the subscriber.
     * @return {?}
     */
    registerSubscriber(subscriber) {
        this.loggingService.log(this.serviceName, Severity.Information, `${this.serviceName} preparing to create a new subscription.`);
        return this.businessProvider.registerSubscriber(subscriber);
    }
    /**
     * Use to confirm a new subscriber.
     * @param {?} confirmationToken contains the user name and a [Hash] value that is used to confirm the user.
     * @return {?}
     */
    confirmSubscriber(confirmationToken) {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to confirm subscriber.`);
        return this.businessProvider.confirmSubscriber(confirmationToken);
    }
}
BuildMotionSecurityService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BuildMotionSecurityService.ctorParameters = () => [
    { type: LoggingService, },
    { type: SubscriberBusinessProviderService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubscribeComponent extends ComponentBase {
    /**
     * @param {?} securityService
     * @param {?} loggingService
     * @param {?} formBuilder
     * @param {?} router
     */
    constructor(securityService, loggingService, formBuilder, router) {
        super('SubscribeComponent', loggingService, router);
        this.securityService = securityService;
        this.formBuilder = formBuilder;
        this.subscribe = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.buildForm();
    }
    /**
     * @return {?}
     */
    buildForm() {
        this._form = this.formBuilder.group({
            subscriberName: ['', Validators.required],
            emailAddress: ['', Validators.required]
        });
    }
    /**
     * @return {?}
     */
    submitForm() {
        this.securityService.serviceContext.Messages = [];
        this.subscriber = new Subscriber(this._form.value.subscriberName, this._form.value.emailAddress);
        this.subscribeUser(this.subscriber);
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    subscribeUser(subscriber) {
        this.securityService.registerSubscriber(subscriber).subscribe(response => this.handleSubscribeUser(response), error => this.handleServiceErrors(error, this.securityService.serviceContext), () => this.finishRequest(this.componentName));
    }
    /**
     * @param {?} response
     * @return {?}
     */
    handleSubscribeUser(response) {
        const /** @type {?} */ functionName = 'handleSubscribeUser';
        this.loggingService.log(this.componentName, Severity.Information, `[${functionName}]: Preparing to handle the response from the [SecurityService] in the ${this.componentName}.`);
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, Severity.Information, `Successfully processed request to create subscriber. Prepare to download...`);
                this.subscribe.emit(/** @type {?} */ (response));
            }
            else {
                this.handleServiceErrors(/** @type {?} */ (response), this.securityService.serviceContext);
            }
        }
        else {
            // TODO: NEED TO HANDLE
        }
    }
}
SubscribeComponent.decorators = [
    { type: Component, args: [{
                selector: 'bm-subscribe',
                template: `<buildmotion-alert [alertNotification]="alertNotification" [hasMessage]="alertNotification.showAlert"></buildmotion-alert>
  <!-- SUBSCRIBE SIGN-UP FORM -->
  <form [formGroup]="_form" (ngSubmit)="submitForm()">
    <!-- SUBSCRIBER NAME -->
    <div class="input-group form-group-no-border">
      <span class="input-group-addon">
        <i class="now-ui-icons users_circle-08"></i>
      </span>
      <input type="text" formControlName="subscriberName" class="form-control" placeholder="Name...">
    </div>
    <!-- SUBSCRIBER EMAIL -->
    <div class="input-group form-group-no-border">
      <span class="input-group-addon">
        <i class="now-ui-icons ui-1_email-85"></i>
      </span>
      <input type="text" formControlName="emailAddress" class="form-control" placeholder="Email...">
    </div>
    <!-- SUBSCRIBE BUTTON -->
    <button class="btn btn-neutral btn-round btn-lg">Subscribe
      <i class="fa fa-check ml-1"></i>
    </button>
  </form>
  <!-- SUBSCRIBE SIGN-UP FORM -->`
            },] },
];
/** @nocollapse */
SubscribeComponent.ctorParameters = () => [
    { type: BuildMotionSecurityService, },
    { type: LoggingService, },
    { type: FormBuilder, },
    { type: Router, },
];
SubscribeComponent.propDecorators = {
    "subscribe": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Use the model for account confirmation information.
 */
class ConfirmationToken {
    /**
     * Constructor for the account confirmation token information.
     * @param {?} UserName
     * @param {?} ConfirmationToken
     */
    constructor(UserName, ConfirmationToken) {
        this.UserName = UserName;
        this.ConfirmationToken = ConfirmationToken;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// import { BuildMotionSecurityService, ConfirmationToken } from '..';
class ConfirmSubscriptionComponent extends ComponentBase {
    /**
     * @param {?} securityService
     * @param {?} loggingService
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} router
     */
    constructor(securityService, loggingService, formBuilder, route, router) {
        super(`ConfirmSubscriptionComponent`, loggingService, router);
        this.securityService = securityService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.confirm = new EventEmitter();
        this.email = '';
        this.confirmationToken = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loggingService.log(this.componentName, Severity.Information, `Running [ngOnInit] for ${this.componentName}`);
        this.retrieveQueryParams();
    }
    /**
     * @return {?}
     */
    retrieveQueryParams() {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to retrieve the [queryParams] from ${this.componentName}.`);
        try {
            this.route.params
                .map((params) => (params['email'])).subscribe(response => this.handleEmailParam(response), error => this.handleServiceErrors(error), () => this.finishRequest('retrieveQueryParams'));
            this.route.params
                .map((params) => (params['confirmationToken'])).subscribe(response => this.handleConfirmationTokenParam(response), error => this.handleServiceErrors(error), () => this.finishRequest('retrieveQueryParams'));
        }
        catch (/** @type {?} */ error) {
            this.handleServiceErrors(error);
        }
    }
    /**
     * @param {?} token
     * @return {?}
     */
    handleConfirmationTokenParam(token) {
        if (token) {
            this.confirmationToken = token;
            this.buildForm(); // begin form build after the params are retrieved from the url;
        }
    }
    /**
     * @param {?} emailParam
     * @return {?}
     */
    handleEmailParam(emailParam) {
        if (emailParam) {
            this.email = emailParam;
        }
    }
    /**
     * Use to build the form for the specified target entity.
     * @return {?}
     */
    buildForm() {
        this._form = this.formBuilder.group({
            UserName: [this.email, Validators.required],
            ConfirmationToken: [this.confirmationToken, Validators.required]
        });
    }
    /**
     * @return {?}
     */
    submitForm() {
        this.loggingService.log(this.componentName, Severity.Information, `Form: {form | json}`);
        this.resetAlertNotifications();
        let /** @type {?} */ token = new ConfirmationToken(this._form.value.UserName, this._form.value.ConfirmationToken);
        this.securityService.confirmSubscriber(token).subscribe(response => this.handleSubmit(response), error => this.handleServiceErrors(error, this.securityService.serviceContext), () => this.finishRequest(this.componentName));
    }
    /**
     * @param {?} response
     * @return {?}
     */
    handleSubmit(response) {
        this.loggingService.log(this.componentName, Severity.Information, `Preparing to handle the response from the ${this.securityService.serviceName} in the ${this.componentName}.`);
        if (response) {
            if (response.IsSuccess) {
                this.loggingService.log(this.componentName, Severity.Information, `Successfully processed subscriber confirmation.`);
                this.confirm.emit(/** @type {?} */ (response));
            }
            else {
                this.loggingService.log(this.componentName, Severity.Error, `${this.componentName}; Status is fail.`);
                this.showResponseErrors(/** @type {?} */ (response));
            }
        }
        else {
            this.loggingService.log(this.componentName, Severity.Error, 'Unexpected service error...I guess the application pooped its pants, ouch!!');
        }
    }
}
ConfirmSubscriptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'bm-confirm-subscription',
                template: `<buildmotion-alert [alertNotification]="alertNotification" [hasMessage]="alertNotification.showAlert"></buildmotion-alert>
  <form [formGroup]="_form" (ngSubmit)="submitForm()">
    <div class="md-form">
      <i class="fa fa-envelope prefix"></i>
      <input type="text" id="UserName" class="form-control" formControlName="UserName">
      <label for="UserName">Your email address.</label>
    </div>
    <div class="md-form">
      <i class="fa fa-person prefix"></i>
      <input type="text" id="ConfirmationToken" class="form-control" formControlName="ConfirmationToken">
      <label for="ConfirmationToken">Enter token from email.</label>
    </div>
    <div class="text-xs-center">
      <button class="btn btn-lime" type="submit">Confirm Account</button>
    </div>
  </form>`
            },] },
];
/** @nocollapse */
ConfirmSubscriptionComponent.ctorParameters = () => [
    { type: BuildMotionSecurityService, },
    { type: LoggingService, },
    { type: FormBuilder, },
    { type: ActivatedRoute, },
    { type: Router, },
];
ConfirmSubscriptionComponent.propDecorators = {
    "confirm": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// INTERNAL INJECTABLE SERVICES
class BuildMotionSecurityModule {
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
BuildMotionSecurityModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Credentials {
    /**
     * Use to contain credentials for the login process.
     * @param {?} username
     * @param {?} password
     */
    constructor(username, password) {
        this.UserName = username;
        this.Password = password;
    }
    /**
     * @return {?}
     */
    toString() {
        return `UserName: ${this.UserName}; Password: ************`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Contains the response data from the OWIN OAuth provider.
 */
class OAuthResponse {
    /**
     * Use to return a string representing the OAuthResponse.
     * @return {?}
     */
    toString() {
        return `access_token: ${this.access_token}; expires_in: ${this.expires_in}; token_type: ${this.token_type}`;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SubscriberItem {
    constructor() {
        this.SubscriptionStart = new Date();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Use to transport data to create a new account.
 */
class UserAccount {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { BuildMotionSecurityModule, BuildMotionSecurityService, SubscribeComponent, ConfirmationToken, Credentials, OAuthResponse, Subscriber, SubscriberItem, UserAccount, SubscriberApiService as ɵb, SubscriberBusinessProviderService as ɵa, ConfirmSubscriptionComponent as ɵc };
//# sourceMappingURL=buildmotion-security.js.map
