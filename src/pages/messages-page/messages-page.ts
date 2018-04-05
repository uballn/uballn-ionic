import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {
  messages: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
    }

  ionViewWillEnter(){
    this.storage.get('messageData').then((val) => {
      this.messages = val;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
      // return this.afd.object('/users/' + this.user.uid+'/friends/'+uid).update({
      //   img: sessionStorage.getItem('CurrPlayer.img'),
      //   squad: 'false',
      //   uid: sessionStorage.getItem('CurrPlayer.uid'),
      //   username: sessionStorage.getItem('CurrPlayer.username')
      // })

  }
  denyFriend(requestorName){
    alert('No way ' + requestorName + '!');
  }

  approveFriend(requestorName){
    alert('Okay ' + requestorName + '!');
  }

  goToProfile(uid){
    this.navCtrl.push('PlayerPage', uid);
  }

}
