import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FirebaseService } from './../../providers/firebase-service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as $ from 'jQuery';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages-page.html',
})
export class MessagesPage {
  MessageData: any;
  messageArray: any;
  unreadMessageNum: any;
  myID: string;
  clickedID: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afd: AngularFireDatabase,
    private storage: Storage) {
    }

  ionViewWillEnter(){
    this.storage.get('MessageData').then((val) => {
      this.MessageData = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');

  }
  denyFriend(message){

    let index = this.MessageData.indexOf(message);

    if (index > -1){
      $(index).html('Denied');
    }

    this.myID = localStorage.getItem('uid');
    
    // this.afd.object('/users/' + this.myID+'/friends/'+this.clickedID).update({
    //   img: null,
    //   squad: null,
    //   uid: null,
    //   username: null
    // })

    alert(JSON.stringify($('#'+this.clickedID).html('Denied')));
  
  }

  approveFriend(uid){
    this.myID = localStorage.getItem('uid');
    
    this.afd.object('/users/' + this.myID+'/friends/'+uid).update({
      img: sessionStorage.getItem('CurrPlayer.img'),
      squad: 'false',
      uid: sessionStorage.getItem('CurrPlayer.uid'),
      username: sessionStorage.getItem('CurrPlayer.username')
    })

    this.afd.object('/users/'+uid+'/friends/'+this.myID).update({
      img: sessionStorage.getItem('img'),
      squad: 'false',
      uid: sessionStorage.getItem('uid'),
      username: sessionStorage.getItem('username')
    })

    $('.confirmation').html('Approved');
    
  }

  goToProfile(uid){
    this.navCtrl.push('PlayerPage', uid);
  }

}
