import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickPlayPage } from './quickplay-page';

@NgModule({
  declarations: [
    QuickPlayPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickPlayPage),
  ],
  exports: [
    QuickPlayPage
  ]
})
export class QuickPlayPageModule {}
