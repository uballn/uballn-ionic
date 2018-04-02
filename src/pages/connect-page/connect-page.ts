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
  users: any;
  userData: any;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {

      this.connect = 'friends';

      this.storage.get('friendData').then((val) => {
        this.friends = val;
      })

      this.storage.get('allUsers').then((val) => {
        this.users = val;
  
        this.userData = [];
        for (var key in this.users) {
          this.userData.push(this.users[key]);
        }
        this.storage.set('userData',this.userData);
    })
  
  }

  ionViewDidLoad() {
    
  }

  goToProfile(uid){
    this.navCtrl.push('PlayerPage', uid);
  }

}
