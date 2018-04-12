import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdPage } from './ad-page';

@NgModule({
  declarations: [
    AdPage,
  ],
  imports: [
    IonicPageModule.forChild(AdPage),
  ],
  exports: [
    AdPage
  ]
})
export class AdPageModule {}
