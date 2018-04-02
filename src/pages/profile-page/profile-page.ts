import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './../../providers/firebase-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {
  nameForm: FormGroup;
  invitations: Observable<any[]>;
  profileData: any;
  currUserName: string;
  name: string;
  experience: string;
  gender: string;
  height: string;
  weight: string;
  birthday: string;
  uid: string;
  updateUserIMG: string;
  experienceNumber: string;
  age: string;
  points: string;
  played: string;
  friends: any;
  friendData: any[];
  friendNum:any;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public storage: Storage,
    public toastCtrl: ToastController) {

      this.storage.get('myFriends').then((val) => {
        this.friends = val;

        this.friendData = [];
        for (var key in this.friends) {
          this.friendData.push(this.friends[key]);
        }
        this.friendNum = this.friendData.length;
        this.storage.set('friendData',this.friendData);
        
      if (this.friendNum < 4){
        $('.playerContainer.more').hide();
      }
    })

  }

  ionViewWillEnter() {
    if (localStorage.getItem('gender') === 'male'){
      this.gender = 'M';
    }else {
      this.gender = 'F';
    }

    this.name = localStorage.getItem('name');
    this.birthday = localStorage.getItem('birthday');
    this.experience = localStorage.getItem('experience');
    this.height = localStorage.getItem('height');
    this.weight = localStorage.getItem('weight');
    this.updateUserIMG = localStorage.getItem('img');
    this.age = localStorage.getItem('ageCount');
    this.played = localStorage.getItem('played');
    this.experienceNumber = localStorage.getItem('experience');
    this.points = '300';
}

  updateUser() {
    localStorage.setItem('name',this.name);
    localStorage.setItem('height', this.height);
    localStorage.setItem('weight', this.weight);
    localStorage.setItem('experience', this.experience);
    localStorage.setItem('gender', this.gender);
    localStorage.setItem('birthday', this.birthday);

    this.firebaseService.updateUserProfile().then(() => {
      this.presentToast('Profile Updated!');
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  accepInvitation(invitation) {
    this.firebaseService.acceptInvitation(invitation).then(() => {
      this.presentToast('Invitation accepted!');
    })
  }

  discardInvitation(invitationId) {
    this.firebaseService.discardInvitation(invitationId);
  }

  logOut() {
    this.firebaseService.logoutUser().then(() => {
      localStorage.clear();
      this.navCtrl.setRoot('LoginPage');
    });
  }
  goToSettings(){
    this.navCtrl.push('ProfileSettingsPage');
  }
  goToProfile(uid){
    this.navCtrl.push('PlayerPage', uid);
  }

  goToConnect(){
    this.navCtrl.push('ConnectPage');
  }

}