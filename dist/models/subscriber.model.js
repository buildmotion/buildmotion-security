/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Subscriber = (function () {
    /**
     * Use to create a new subscriber for the application. This is not an account - only
     * a subscription to resources from the application.
     * @param subscriberName\
     * @param subscriberEmail
     */
    function Subscriber(subscriberName, subscriberEmail) {
        this.SubscriptionStart = new Date();
        this.Name = subscriberName;
        this.EmailAddress = subscriberEmail;
    }
    return Subscriber;
}());
export { Subscriber };
function Subscriber_tsickle_Closure_declarations() {
    /** @type {?} */
    Subscriber.prototype.Name;
    /** @type {?} */
    Subscriber.prototype.EmailAddress;
    /** @type {?} */
    Subscriber.prototype.SubscriptionStart;
}
//# sourceMappingURL=subscriber.model.js.map