import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/Rx';

import { Response } from '@angular/http';
import { ActionResult } from 'angular-actions';
import * as rules from 'angular-rules-engine';

import { HttpBaseService } from '@buildmotion/foundation';
import { Severity } from '@buildmotion/logging';
import { SubscriberActionBase } from './subscriber-action-base.action';

import { Subscriber } from './../../models/subscriber.model';


export class RetrieveSubscribersAction extends SubscriberActionBase {

    response: Observable<Response>;
    httpBase: HttpBaseService;

    constructor() {
        super();
        this.actionName = 'RetrieveSubscribersAction';
    }

    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     */
    preValidateAction() {
        console.log(`Running the [preValidateAction] for the ${this.actionName} action.`);
    }

    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     */
    performAction() {
        this.loggingService.log(this.actionName, Severity.Information, `Running the [performAction] for the ${this.actionName}.`)
        this.response = this.businessProvider.subscriberApiService.retrieveSubscribers();
    }
}
