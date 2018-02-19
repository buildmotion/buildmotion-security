/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { BuildMotionCoreModule } from 'buildmotion-core';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';
import { SubscriberApiService } from './business/subscriber-api.service';
import { ConfirmSubscriptionComponent } from './confirm-subscription/confirm-subscription.component';
var BuildMotionSecurityModule = (function () {
    function BuildMotionSecurityModule() {
    }
    BuildMotionSecurityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BuildMotionCoreModule,
                        BuildMotionFoundationModule,
                        BuildMotionLoggingModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpModule,
                        RouterModule
                    ],
                    declarations: [SubscribeComponent, ConfirmSubscriptionComponent],
                    exports: [
                        ConfirmSubscriptionComponent,
                        SubscribeComponent
                    ],
                    providers: [
                        SubscriberApiService,
                        SubscriberBusinessProviderService
                    ]
                },] },
    ];
    /** @nocollapse */
    BuildMotionSecurityModule.ctorParameters = function () { return []; };
    return BuildMotionSecurityModule;
}());
export { BuildMotionSecurityModule };
function BuildMotionSecurityModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BuildMotionSecurityModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BuildMotionSecurityModule.ctorParameters;
}
//# sourceMappingURL=security.module.js.map