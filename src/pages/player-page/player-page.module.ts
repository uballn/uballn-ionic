import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerPage } from './player-page';

@NgModule({
  declarations: [
    PlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerPage),
  ],
  exports: [
    PlayerPage
  ]
})
export class PlayerPageModule {}
