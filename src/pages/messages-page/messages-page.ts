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
  requestorInfo: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afd: AngularFireDatabase,
    public firebaseService: FirebaseService,
    private storage: Storage) {
    }

  ionViewWillEnter(){
    this.storage.get('MessageData').then((val) => {
      this.MessageData = val.reverse();
    })

    if ($('ion-item').length < 1){
      $('ion-list').prepend('<p class="noMessages">No Messages</p>')
    }else{
      $('.noMessages').remove();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
  }


  // FRIEND REQUESTS /////////////////////////
  declineFriend(messageID){
    this.myID = localStorage.getItem('uid');
    
    this.afd.object('/users/'+this.myID+'/messages/'+messageID).update({
      read: 'true',
      response: 'declined'
    })  
  }

  approveFriend(requestorID,messageID){
    this.firebaseService.getRequestor(requestorID);
    this.myID = localStorage.getItem('uid');
    
    this.afd.object('/users/'+this.myID+'/friends/'+requestorID).update({
      img: sessionStorage.getItem('requestor-img'),
      squad: 'false',
      uid: sessionStorage.getItem('requestor-uid'),
      username: sessionStorage.getItem('requestor-username')
    })

    this.afd.object('/users/'+requestorID+'/friends/'+this.myID).update({
      img: localStorage.getItem('img'),
      squad: 'false',
      uid: localStorage.getItem('uid'),
      username: localStorage.getItem('username')
    })

    this.afd.object('/users/'+this.myID+'/messages/'+messageID).update({
      response: 'accepted',
      read: 'true'
    })
  }


  // SQUAD REQUESTS /////////////////////////
  declineSquad(messageID){
    this.myID = localStorage.getItem('uid');

    this.afd.object('/users/'+this.myID+'/messages/'+messageID).update({
      read: 'true',
      response: 'declined'
    })
  }

  approveSquad(requestorID,messageID){
    this.firebaseService.getRequestor(requestorID);
    this.myID = localStorage.getItem('uid');
    
    this.afd.object('/users/'+this.myID+'/friends/'+requestorID).update({
      squad: 'true'
    })

    this.afd.object('/users/'+requestorID+'/friends/'+this.myID).update({
      squad: 'true'
    })

    this.afd.object('/users/'+this.myID+'/messages/'+messageID).update({
      response: 'accepted',
      read: 'true'
    })
  }

  // GO TO PROFILE /////////////////////////
  goToProfile(uid){
    this.navCtrl.push('PlayerPage', uid);
  }

}
