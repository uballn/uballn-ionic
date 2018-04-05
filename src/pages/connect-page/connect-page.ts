import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FirebaseService } from './../../providers/firebase-service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import * as $ from 'jquery';

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
  userID: any;
  key:any;
  messageID: number;
  myUsername: string;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public afd: AngularFireDatabase,
    public navParams: NavParams,
    public FirebaseService: FirebaseService) {
  
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

  showContacts(){
    $('.secondaryButton').hide();
    $('.contactList').show();
  }

  requestRemoveSquad(uid) {
    this.userID = localStorage.getItem('uid');
    if ($(event.target).hasClass('true')){
      $($(event.target).removeClass('true'));
      $($(event.target).addClass('false'));
      return this.afd.object('/users/' + this.userID + '/friends/' + uid).update({
        squad: 'false'
      })
    } else if ($(event.target).hasClass('pending')){
      //do nothing
    } else {
      $($(event.target).addClass('pending'));
      $($(event.target).removeClass('false'));
      
      this.sendSquadRequest(uid);
      return this.afd.object('/users/' + this.userID + '/friends/' + uid).update({
        squad: 'pending'
      })
    }
  }

  sendSquadRequest(uid){
    this.myUsername = localStorage.getItem('currUserName');
    this.messageID = Math.floor(10000000000000000000 + Math.random() * 90000000000000000000);
    return this.afd.object('/users/' + uid + '/messages/' + this.messageID).update({
      header: 'Squad Request',
      message: this.myUsername + ' wants you to join their squad!',
      messageID: this.messageID
    })
  }

  // Still working on friend stuff for this page
  // requestRemoveFriend(uid) {
  //   this.userID = localStorage.getItem('uid');
  //   if ($(event.target).hasClass('true')){
  //     $($(event.target).removeClass('true'));
  //     $($(event.target).addClass('false'));
  //     return this.afd.object('/users/' + this.userID + '/friends/' + uid).update({
  //       img: null,
  //       squad: null,
  //       uid: null,
  //       username: null
  //     })
  //   } else if ($(event.target).hasClass('pending')){
  //     //do nothing
  //   } else {
  //     $($(event.target).addClass('pending'));
  //     $($(event.target).removeClass('false'));
      
  //     this.sendSquadRequest(uid);
  //     return this.afd.object('/users/' + this.userID + '/friends/' + uid).update({
  //       squad: 'pending'
  //     })
  //   }
  // }

  // sendfriendRequest(uid){
  //   this.myUsername = localStorage.getItem('currUserName');
  //   this.messageID = Math.floor(10000000000000000000 + Math.random() * 90000000000000000000);
  //   return this.afd.object('/users/' + uid + '/messages/' + this.messageID).update({
  //     header: 'Friend Request',
  //     message: this.myUsername + ' wants to be friends.'
  //   })
  // }


}
