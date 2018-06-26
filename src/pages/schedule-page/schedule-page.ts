import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service';
import { Settings } from '../../providers/providers';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule-page.html'
})
export class SchedulePage {
  options: any;
  chosenCourt: string;
  settingsReady = false;
  avatar: string;
  location: string;
  gameDate: string;
  gameStart: string;
  private: boolean;
  selectedLocation: any;
  myID: string;
  gameID: any;


  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public modalCtrl: ModalController,
    public firebaseService: FirebaseService,
    public afd: AngularFireDatabase,
    public navParams: NavParams,
    private storage: Storage,
    public toastCtrl: ToastController) {

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

  inviteFriends() {
    this.navCtrl.push('InviteFriendsPage');
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }

  setupGame(){
    if (this.location === undefined || this.gameDate === undefined || this.gameStart === undefined) {
        let toast = this.toastCtrl.create({
          message: 'Oops! All fields required.',
          duration: 2000,
          position: 'top'
        });
        toast.present();

    } else {
      $('.error').hide();      

      this.myID = localStorage.getItem('uid');
      this.gameID = Math.floor(10000000000000000000 + Math.random() * 90000000000000000000);
      sessionStorage.setItem('gameID', this.gameID);
      this.storage.get('selectedLocation').then((val) => {
        this.selectedLocation = val;
      
        this.afd.object('/games/' + this.gameID).update({
            address: this.selectedLocation.address,
            created: JSON.stringify(+Date.now()),
            creator: localStorage.getItem('uid'),
            creatorIMG: localStorage.getItem('img'),
            gameDate: this.gameDate,
            gameStart: this.gameStart,
            img: this.selectedLocation.img,
            name: this.location
          })                   
          .then(() => {
            this.firebaseService.joinGame()
          })
          .then(() => {
            this.storage.set('selectedLocation', undefined);
            this.location = null;
            this.gameDate = null;
            this.gameStart = null;
          })
          .then(() => {
            let modal = this.modalCtrl.create('AdPage');
            modal.present();
          })
      })
    }
  }
  
}
