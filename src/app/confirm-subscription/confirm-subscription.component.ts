import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentBase } from '@buildmotion/core';
// import { BuildMotionSecurityService, ConfirmationToken } from '..';
import { LoggingService, Severity } from '@buildmotion/logging';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceResponse, ErrorResponse } from '@buildmotion/foundation';
import { BuildMotionSecurityService } from './../security.service';

@Component({
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
})
export class ConfirmSubscriptionComponent extends ComponentBase implements OnInit {
  @Output() confirm = new EventEmitter<ServiceResponse>();
  _form: FormGroup;
  email: string = '';
  confirmationToken: string = '';

  constructor(
    private securityService: BuildMotionSecurityService,
    loggingService: LoggingService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    router: Router
  ) {  
    super(`ConfirmSubscriptionComponent`, loggingService, router);
  }

  ngOnInit() {
    this.loggingService.log(this.componentName, Severity.Information, `Running [ngOnInit] for ${this.componentName}`);
    this.retrieveQueryParams();
  }

  retrieveQueryParams() {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to retrieve the [queryParams] from ${this.componentName}.`);
    try {
      this.route.params
        .map((params: Params) => (params['email'])).subscribe(
        response => this.handleEmailParam(response),
        error => this.handleServiceErrors(error),
        () => this.finishRequest('retrieveQueryParams')
        );

      this.route.params
        .map((params: Params) => (params['confirmationToken'])).subscribe(
        response => this.handleConfirmationTokenParam(response),
        error => this.handleServiceErrors(error),
        () => this.finishRequest('retrieveQueryParams')
        );
    } catch (error) {
      this.handleServiceErrors(error);
    }
  }

  handleConfirmationTokenParam(token: string) {
    if (token) {
      this.confirmationToken = token;
      this.buildForm(); // begin form build after the params are retrieved from the url;
    }
  }

  handleEmailParam(emailParam: string) {
    if (emailParam) {
      this.email = emailParam;
    }
  }

  /**
   * Use to build the form for the specified target entity.
   */
  buildForm() {
    this._form = this.formBuilder.group({
      UserName: [this.email, Validators.required],
      ConfirmationToken: [this.confirmationToken, Validators.required]
    });
  }

  submitForm() {
    this.loggingService.log(this.componentName, Severity.Information, `Form: {form | json}`);
    this.resetAlertNotifications();
    let token = new ConfirmationToken(this._form.value.UserName, this._form.value.ConfirmationToken);
    this.securityService.confirmSubscriber(token).subscribe(
      response => this.handleSubmit(response),
      error => this.handleServiceErrors(error, this.securityService.serviceContext),
      () => this.finishRequest(this.componentName)
    );
  }

  handleSubmit(response: ServiceResponse | ErrorResponse ) {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to handle the response from the ${this.securityService.serviceName} in the ${this.componentName}.`);
    if (response) {
      if (response.IsSuccess) {
        this.loggingService.log(this.componentName, Severity.Information, `Successfully processed subscriber confirmation.`);
        this.confirm.emit(response as ServiceResponse);
      } else {
        this.loggingService.log(this.componentName, Severity.Error, `${this.componentName}; Status is fail.`);
        this.showResponseErrors(response as ErrorResponse);
      }
    } else {
      this.loggingService.log(this.componentName, Severity.Error, 'Unexpected service error...I guess the application pooped its pants, ouch!!');
    }
  }

}
