import { OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentBase } from 'buildmotion-core';
import { LoggingService } from 'buildmotion-logging';
import { Subscriber } from './../models/subscriber.model';
import { BuildMotionSecurityService } from './../security.service';
import { ServiceResponse, ErrorResponse } from 'buildmotion-foundation';
export declare class SubscribeComponent extends ComponentBase implements OnInit {
    private securityService;
    formBuilder: FormBuilder;
    subscribe: EventEmitter<ServiceResponse>;
    _form: FormGroup;
    subscriber: Subscriber;
    constructor(securityService: BuildMotionSecurityService, loggingService: LoggingService, formBuilder: FormBuilder, router: Router);
    ngOnInit(): void;
    buildForm(): void;
    submitForm(): void;
    subscribeUser(subscriber: Subscriber): void;
    handleSubscribeUser(response: ServiceResponse | ErrorResponse): void;
}
