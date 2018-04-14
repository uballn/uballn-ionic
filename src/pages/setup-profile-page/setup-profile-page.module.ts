import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetupProfilePage } from './setup-profile-page';

@NgModule({
  declarations: [
    SetupProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SetupProfilePage),
  ],
  exports: [
    SetupProfilePage
  ]
})
export class SetupProfilePageModule {}
