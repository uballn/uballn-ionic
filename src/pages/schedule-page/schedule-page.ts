import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service';
import { Settings } from '../../providers/providers';
import { ModalPage } from './modal-page';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule-page.html'
})
export class SchedulePage {
  options: any;
  chosenCourt: string;
  settingsReady = false;
  form: FormGroup;
  avatar: string;
  location: string;

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public modalCtrl: ModalController,
    public firebaseService: FirebaseService,
    public navParams: NavParams,
    private storage: Storage) {

  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {

    this.storage.get('selectedLocation').then((val) => {
      let selectedLocation = val;

    if (val == undefined){
      console.log('No location selected')
    }else {
      this.location = val.name;
    }
    })

    this.avatar = localStorage.getItem('img');

    let uid = localStorage.getItem('uid');
    this.firebaseService.checkMessages(uid);

  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  goToProfile() {
    this.navCtrl.push('ProfilePage');
  }

  getCourt() {
    this.navCtrl.push('FindACourtPage');
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }

  setupGame(){
    this.firebaseService.setupGame();
  }

}
