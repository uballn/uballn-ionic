import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule-page';

@NgModule({
  declarations: [
    SchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(SchedulePage),
  ],
  exports: [
    SchedulePage
  ]
})
export class SchedulePageModule {}
