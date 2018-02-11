import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpBaseService, ServiceResponse } from 'buildmotion-foundation';
import { SubscriberActionBase } from './subscriber-action-base.action';
import { Subscriber } from './../../models/subscriber.model';
export declare class RegisterSubscriberAction extends SubscriberActionBase {
    private subscriber;
    response: Observable<ServiceResponse>;
    httpBase: HttpBaseService;
    constructor(subscriber: Subscriber);
    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     */
    preValidateAction(): void;
    /**
     * Use this method to provide business logic implementation - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     */
    performAction(): void;
}
