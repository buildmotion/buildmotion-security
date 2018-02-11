import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ComponentBase } from 'buildmotion-core';
import { LoggingService, Severity } from 'buildmotion-logging';
import { Subscriber } from './../models/subscriber.model';
import { SecurityService } from './../security.service';
import { ServiceResponse, ErrorResponse } from 'buildmotion-foundation';

@Component({
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
})
export class SubscribeComponent extends ComponentBase implements OnInit {
  @Output() subscribe = new EventEmitter<ServiceResponse>();
  _form: FormGroup;
  subscriber: Subscriber;
  

  constructor(
    private securityService: SecurityService,
    loggingService: LoggingService,
    public formBuilder: FormBuilder,
    router: Router
  ) {
    super('SubscribeComponent', loggingService, router)
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this._form = this.formBuilder.group({
      subscriberName: ['', Validators.required],
      emailAddress: ['', Validators.required]
    });
  }

  submitForm() {
    this.subscriber = new Subscriber(this._form.value.subscriberName, this._form.value.emailAddress);
    this.subscribeUser(this.subscriber);
  }

  subscribeUser(subscriber: Subscriber) {
    this.securityService.registerSubscriber(subscriber).subscribe(
      response => this.handleSubscribeUser(response),
      error => this.handleServiceErrors(error, this.securityService.serviceContext),
      () => this.finishRequest(this.componentName)
    );
  }

  handleSubscribeUser(response: ServiceResponse | ErrorResponse) {
    const functionName = 'handleSubscribeUser';
    this.loggingService.log(this.componentName, Severity.Information, `[${functionName}]: Preparing to handle the response from the [SecurityService] in the ${this.componentName}.`);
    if (response) {
      if (response.IsSuccess) {
        this.loggingService.log(this.componentName, Severity.Information, `Successfully processed request to create subscriber. Prepare to download...`);
        this.subscribe.emit(response as ServiceResponse);
      } else {
        this.handleServiceErrors(response as ErrorResponse, this.securityService.serviceContext);
      }
    } else {
      // TODO: NEED TO HANDLE
    }
  }
}
