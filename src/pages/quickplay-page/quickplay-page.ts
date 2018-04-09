import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
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

  removeList(id) {
    this.firebaseService.removeList(id);
  }

  removeItem(itemId, listId) {
    this.firebaseService.removegameItem(listId, itemId);
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
