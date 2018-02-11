import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { BuildMotionCoreModule } from 'buildmotion-core';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
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
})
export class SecurityModule { }
