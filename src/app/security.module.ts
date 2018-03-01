import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { BuildMotionCoreModule } from 'buildmotion-core';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';
import { SubscribeComponent } from './subscribe/subscribe.component';

// INTERNAL INJECTABLE SERVICES
import { SubscriberBusinessProviderService } from './business/subscriber-business-provider.service';
import { SubscriberApiService } from './business/subscriber-api.service';
import { ConfirmSubscriptionComponent } from './confirm-subscription/confirm-subscription.component';

@NgModule({
  imports: [
    BuildMotionCoreModule,
    BuildMotionFoundationModule,
    BuildMotionLoggingModule
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpModule,
    // RouterModule
  ],
  declarations: [SubscribeComponent, ConfirmSubscriptionComponent],
  exports: [
    ConfirmSubscriptionComponent,
    SubscribeComponent
  ],
  providers: [
    SubscriberApiService, //PROVIDE INTERNAL SERVICES FOR THE MODULE; SCOPED TO THIS MODULE;
    SubscriberBusinessProviderService //PROVIDE INTERNAL SERVICES FOR THE MODULE; SCOPED TO THIS MODULE;
  ]
})
export class BuildMotionSecurityModule { }
