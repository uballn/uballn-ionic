import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FirebaseService } from './../../providers/firebase-service';
import { ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game-page.html',
})
export class GamePage {
  public gameData: any = [];
  public players: any = [];
  public player: any;
  public playerData: any = [];
  public stats: any [];
  public gameID: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseService: FirebaseService,
    public storage: Storage,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController) {
      this.gameData = this.navParams;
      this.gameID = this.navParams.data.$key;
      this.players = this.gameData.data.players;
      localStorage.setItem('playerNum', this.players.length);
      this.updateGame();
        sessionStorage.setItem('gameID',this.gameID);
  }

  ionViewWillEnter(){
    if(sessionStorage.getItem('playing') === 'true'){
        $('#joinGame').css('display','none');
        $('#leaveGame').css('display','block');
      }else{
        $('#joinGame').css('display','block');
        $('#leaveGame').css('display','none');
      }
  }

  updateGame(){
    this.playerData = [];
    for (var key in this.players) {
      if (key === localStorage.getItem('uid')){
        sessionStorage.setItem('playing','true');
      }else{
        //do nothing
      }
      this.playerData.push(this.players[key]);
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  joinGame(){
    this.firebaseService.joinGame().then(() => {
      this.presentToast('You have joined the game!');
    })
    this.navCtrl.pop();
  }

  leaveGame(){
    sessionStorage.setItem('placeID', this.gameID);
    this.firebaseService.leaveGame(this.gameID).then(() => {
      this.presentToast('You have left the game!');
    })
    this.navCtrl.pop();
  }

  goToProfile(uid){
    this.navCtrl.push('PlayerPage', uid);
  }
    share(){
      let actionSheet = this.actionSheetCtrl.create({
      title: 'Game Options',
      buttons: [
        {
          text: 'Invite Friends',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Add to Calendar',
          handler: () => {
            console.log('Calendar clicked');
          }
        },{
          text: 'Get Directions',
          handler: () => {
            console.log('Directions clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
