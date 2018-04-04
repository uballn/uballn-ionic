import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyPage } from './policy-page';

@NgModule({
  declarations: [
    PolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(PolicyPage),
  ],
  exports: [
    PolicyPage
  ]
})
export class PolicyPageModule {}
