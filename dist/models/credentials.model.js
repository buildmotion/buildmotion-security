/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Credentials = (function () {
    /**
     * Use to contain credentials for the login process.
     * @param username: The user name for the specified application user.
     * @param password: The password for the specified user.
     */
    function Credentials(username, password) {
        this.UserName = username;
        this.Password = password;
    }
    /**
     * @return {?}
     */
    Credentials.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "UserName: " + this.UserName + "; Password: ************";
    };
    return Credentials;
}());
export { Credentials };
function Credentials_tsickle_Closure_declarations() {
    /** @type {?} */
    Credentials.prototype.UserName;
    /** @type {?} */
    Credentials.prototype.Password;
}
//# sourceMappingURL=credentials.model.js.map