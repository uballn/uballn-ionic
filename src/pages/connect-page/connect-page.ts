import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect-page.html',
})

export class ConnectPage {
  friends: any;
  connect: any;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
      this.connect = 'friends';
      this.storage.get('friendData').then((val) => {
        this.friends = val;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
  }

}
