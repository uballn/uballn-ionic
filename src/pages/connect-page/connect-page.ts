import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FirebaseService } from './../../providers/firebase-service';
import { AngularFireDatabase, } from 'angularfire2/database';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect-page.html',
})

export class ConnectPage {
  friends: any;
  pendingFriends: any;
  connect: any;
  users: any;
  userData: any;
  userID: any;
  key:any;
  messageID: number;
  myUsername: string;
  contactsfound = [];
  ContactFieldType: any;
  search = false;
  // contactlist: any;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public afd: AngularFireDatabase,
    public navParams: NavParams,
    public FirebaseService: FirebaseService,
    public platform: Platform) {

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
      avatar: localStorage.getItem('img'),
      previewHeader: 'Squad Request',
      previewMessage: this.myUsername + ' wants you to join their squad!',
      messageID: this.messageID,
      read: 'false',
      requestorID: uid,
      type: 'squadRequest'
    })
  }

}
