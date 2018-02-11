import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { BuildMotionCoreModule } from 'buildmotion-core';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  imports: [
    BuildMotionCoreModule,
    BuildMotionFoundationModule,
    BuildMotionLoggingModule,
    CommonModule
  ],
  declarations: [SubscribeComponent],
  exports: [
    SubscribeComponent
  ]
})
export class SecurityModule { }
