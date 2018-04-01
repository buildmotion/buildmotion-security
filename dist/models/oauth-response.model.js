/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Contains the response data from the OWIN OAuth provider.
 */
var /**
 * Contains the response data from the OWIN OAuth provider.
 */
OAuthResponse = (function () {
    function OAuthResponse() {
    }
    /**
     * Use to return a string representing the OAuthResponse.
     */
    /**
     * Use to return a string representing the OAuthResponse.
     * @return {?}
     */
    OAuthResponse.prototype.toString = /**
     * Use to return a string representing the OAuthResponse.
     * @return {?}
     */
    function () {
        return "access_token: " + this.access_token + "; expires_in: " + this.expires_in + "; token_type: " + this.token_type;
    };
    return OAuthResponse;
}());
/**
 * Contains the response data from the OWIN OAuth provider.
 */
export { OAuthResponse };
function OAuthResponse_tsickle_Closure_declarations() {
    /** @type {?} */
    OAuthResponse.prototype.access_token;
    /** @type {?} */
    OAuthResponse.prototype.expires_in;
    /** @type {?} */
    OAuthResponse.prototype.token_type;
}
//# sourceMappingURL=oauth-response.model.js.map