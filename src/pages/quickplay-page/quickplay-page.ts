import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-quickplay-page',
  templateUrl: 'quickPlay-page.html',
})
export class QuickPlayPage {
  gameLists: Observable<any[]>;
  user: any;
  editMode = false;
  avatar: any;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    }

  ionViewDidLoad() {
    this.gameLists = this.firebaseService.getGames();
    console.log(this.gameLists);
  }

  ionViewWillEnter(){
    this.avatar = localStorage.getItem('img');
    let uid = localStorage.getItem('uid');
    this.firebaseService.checkMessages(uid);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  goToProfile() {
    this.navCtrl.push('ProfilePage');
  }

  openGame(game) {
    this.navCtrl.push('GamePage', game);
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }

}
