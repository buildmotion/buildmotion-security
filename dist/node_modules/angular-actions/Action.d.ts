import { ValidationContext } from 'angular-rules-engine';
import { IAction } from './IAction';
import { ActionResult } from './ActionResult';
/**
 * This is the framework Action class that provides the pipeline of pre/post
 * execution methods. This class implements the [Template Method] pattern.
 *
 * The pre-execute functions that can be implemented are:
 *		1. start();
 *		2. audit();
 *		3. preValidateAction();
 *		4. evaluateRules();
 *		5. postValidateAction();
 *		6. preExecuteAction();
 *
 *If the status of action is good, the business logic will be executed using the:
 *		1. processAction();
 *
 * The post-execution functions that can be implemented are:
 *		1. postExecuteAction();
 *		2. validateActionResult();
 *		3. finish();
 */
export declare class Action implements IAction {
    allowExecution: boolean;
    private _validationContext;
    actionResult: ActionResult;
    constructor();
    readonly validationContext: ValidationContext;
    /**
     * Use this method to execute a concrete action. A concrete action must implement
     * the [processAction] and the [validateActionResult] functions to be a valid
     * action.
     */
    execute(): void;
    private processActionPipeline();
    private startAction();
    private finishAction();
    private processAction();
    /**
     * All action must implement this function. This is where your
     * [business logic] should be implemented. This function is called if
     * there are no validation rule exceptions.
     */
    performAction(): void;
    /**
     * Override/Implement this function to perform an early operation in the action pipeline.
     * This function belongs to the pre-execute functions of the action pipeline.
     */
    start(): void;
    /**
     * Implement this function to perform any auditing features during the pre-exectuion of the
     * business logic.
     */
    audit(): void;
    /**
     * Use this function to setup any validation rules before the validation happens. This
     * function is called before [evaluateRules].
     */
    preValidateAction(): void;
    /**
     * Use this function to implement the execution of the validation and business rules. This
     * function is called after [preValidateAction].
     */
    evaluateRules(): void;
    /**
     * Use to determine or handle the results of the rule evalation. This
     * function is called after the [evaluateRules].
     */
    postValidateAction(): void;
    /**
     * Use this function to perform any setup before the action is executed.
     */
    preExecuteAction(): void;
    /**
     * Use this funciton to evaluate the action after the the business logic within
     * the [performAction] has executed.
     */
    postExecuteAction(): void;
    /**
     * This function requires implementation to determin the state and result of the action.
     * Use this opportunity to validate the results.
     */
    validateActionResult(): ActionResult;
    /**
     * Use this function to perform any cleanup, logging, or disposing of resources used
     * by the action. This is the last function called during the pipeline.
     */
    finish(): void;
    /**
     * Implement this function to perform validation of business rules and data.
     */
    validateAction(): ValidationContext;
}
