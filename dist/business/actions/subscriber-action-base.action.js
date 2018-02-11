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
import { ActionBase } from 'buildmotion-foundation';
var SubscriberActionBase = (function (_super) {
    __extends(SubscriberActionBase, _super);
    function SubscriberActionBase() {
        return _super.call(this) || this;
    }
    /**
    * Use the [Do] method to perform the action.
    */
    /**
     * Use the [Do] method to perform the action.
     * @param {?} businessProvider
     * @return {?}
     */
    SubscriberActionBase.prototype.Do = /**
     * Use the [Do] method to perform the action.
     * @param {?} businessProvider
     * @return {?}
     */
    function (businessProvider) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;
        this.execute();
    };
    return SubscriberActionBase;
}(ActionBase));
export { SubscriberActionBase };
function SubscriberActionBase_tsickle_Closure_declarations() {
    /** @type {?} */
    SubscriberActionBase.prototype.businessProvider;
    /** @type {?} */
    SubscriberActionBase.prototype.loggingService;
}
//# sourceMappingURL=subscriber-action-base.action.js.map