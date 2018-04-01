import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourtsPage } from './courts-page';

@NgModule({
  declarations: [
    CourtsPage,
  ],
  imports: [
    IonicPageModule.forChild(CourtsPage),
  ],
  exports: [
    CourtsPage
  ]
})
export class CourtsPageModule {}
