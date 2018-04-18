import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageDetailPage } from './message-detail-page';

@NgModule({
  declarations: [
    MessageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageDetailPage),
  ],
  exports: [
    MessageDetailPage
  ]
})
export class MessageDetailPageModule {}
