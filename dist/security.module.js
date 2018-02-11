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
var SecurityModule = (function () {
    function SecurityModule() {
    }
    SecurityModule.decorators = [
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
                    declarations: [SubscribeComponent],
                    exports: [
                        SubscribeComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    SecurityModule.ctorParameters = function () { return []; };
    return SecurityModule;
}());
export { SecurityModule };
function SecurityModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SecurityModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SecurityModule.ctorParameters;
}
//# sourceMappingURL=security.module.js.map