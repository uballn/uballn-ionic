import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindACourtPage } from './find-a-court-page';

@NgModule({
  declarations: [
    FindACourtPage,
  ],
  imports: [
    IonicPageModule.forChild(FindACourtPage),
  ],
  exports: [
    FindACourtPage
  ]
})
export class FindACourtPageModule {}
