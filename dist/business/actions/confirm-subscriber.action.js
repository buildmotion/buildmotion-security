var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import 'rxjs/add/observable/throw';
import * as rules from 'angular-rules-engine';
import { Severity } from 'buildmotion-logging';
import { SubscriberActionBase } from './subscriber-action-base.action';
var ConfirmSubscriberAction = (function (_super) {
    __extends(ConfirmSubscriberAction, _super);
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
            .addRule(new rules.StringIsNotNullEmptyRange('UserNameIsValid', 'The user name value is not valid. Must be between 1-80 characters.', this.confirmationToken.UserName, 1, 80, true))
            .addRule(new rules.StringIsNotNullEmptyRange('ConfirmationTokenIsValid', 'The confirmation token value is not valid.', this.confirmationToken.ConfirmationToken, 40, 40, true));
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
export { ConfirmSubscriberAction };
function ConfirmSubscriberAction_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmSubscriberAction.prototype.response;
    /** @type {?} */
    ConfirmSubscriberAction.prototype.confirmationToken;
}
//# sourceMappingURL=confirm-subscriber.action.js.map