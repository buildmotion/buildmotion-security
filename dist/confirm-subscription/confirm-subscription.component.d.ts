import { OnInit, EventEmitter } from '@angular/core';
import { ComponentBase } from '@buildmotion/core';
import { BuildMotionSecurityService } from '..';
import { LoggingService } from '@buildmotion/logging';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceResponse, ErrorResponse } from '@buildmotion/foundation';
export declare class ConfirmSubscriptionComponent extends ComponentBase implements OnInit {
    private securityService;
    formBuilder: FormBuilder;
    private route;
    confirm: EventEmitter<ServiceResponse>;
    _form: FormGroup;
    email: string;
    confirmationToken: string;
    constructor(securityService: BuildMotionSecurityService, loggingService: LoggingService, formBuilder: FormBuilder, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    retrieveQueryParams(): void;
    handleConfirmationTokenParam(token: string): void;
    handleEmailParam(emailParam: string): void;
    /**
     * Use to build the form for the specified target entity.
     */
    buildForm(): void;
    submitForm(): void;
    handleSubmit(response: ServiceResponse | ErrorResponse): void;
}
