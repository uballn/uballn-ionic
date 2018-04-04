import { FirebaseService } from './../../providers/firebase-service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

@IonicPage()
@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings-page.html',
})
export class ProfileSettingsPage {
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

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {

      this.name = localStorage.getItem('name');
      this.birthday = localStorage.getItem('birthday');
      this.experience = localStorage.getItem('experience');
      this.gender = localStorage.getItem('gender');
      this.height = localStorage.getItem('height');
      this.weight = localStorage.getItem('weight');
      this.updateUserIMG = localStorage.getItem('img');
  }

  ionViewWillEnter() {
  }

  ionViewWillLeave(){
    this.updateUser();
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

  showVersionInfo() {
    let modal = this.modalCtrl.create('AboutVersionPage');
    modal.present();
  }

  showPrivacyPolicy() {
    let modal = this.modalCtrl.create('PolicyPage');
    modal.present();
  }

  showTerms() {
    let modal = this.modalCtrl.create('TermsPage');
    modal.present();
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
}
