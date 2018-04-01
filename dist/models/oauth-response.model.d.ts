/**
 * Contains the response data from the OWIN OAuth provider.
 */
export declare class OAuthResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
    /**
     * Use to return a string representing the OAuthResponse.
     */
    toString(): string;
}
