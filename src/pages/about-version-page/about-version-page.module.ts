import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutVersionPage } from './about-version-page';

@NgModule({
  declarations: [
    AboutVersionPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutVersionPage),
  ],
  exports: [
    AboutVersionPage
  ]
})
export class AboutVersionPageModule {}
