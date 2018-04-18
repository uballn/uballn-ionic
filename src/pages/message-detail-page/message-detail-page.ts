import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail-page.html',
})
export class MessageDetailPage {
  message: object;

  constructor(
    public navCtrl: NavController,
    private storage: Storage, 
    public navParams: NavParams) {
      this.message = this.navParams;
    }

  ionViewDidEnter() {
  }

}
