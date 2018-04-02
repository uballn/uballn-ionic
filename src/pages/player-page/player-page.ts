import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player-page.html',
})


export class PlayerPage {
  playerID: any;
  user: any;
  player: any;
  playerDetails: Observable<any[]>;
  data: string;
  playerRequests: any;
  playerIMG: any;
  playerName: string;
  playerExperience: string;
  playerGender: string;
  playerHeight: string;
  playerWeight: string;
  playerAge: string;
  playerPoints: string;
  playerPlayed: string;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public afd: AngularFireDatabase,
    public navParams: NavParams,
    private storage: Storage) {
      this.playerID = this.navParams.data;
      this.playerIMG;

      if (localStorage.getItem('gender') == 'male'){
        this.playerGender = 'M';
      }else {
        this.playerGender = 'F';
      }

      this.afd.list('/users/'+this.playerID, { preserveSnapshot: true})
      .subscribe(snapshots=>{
          snapshots.forEach(snapshot => {
            sessionStorage.setItem('CurrPlayer.'+snapshot.key, snapshot.val());
          });
          this.playerName = sessionStorage.getItem('CurrPlayer.username');
          this.playerExperience = sessionStorage.getItem('CurrPlayer.experience');
          this.playerHeight = sessionStorage.getItem('CurrPlayer.height');
          this.playerWeight = sessionStorage.getItem('CurrPlayer.weight');
          this.playerIMG = sessionStorage.getItem('CurrPlayer.img');
          this.playerAge = sessionStorage.getItem('CurrPlayer.ageCount'); 
          this.playerPlayed = sessionStorage.getItem('CurrPlayer.played');
          this.playerPoints = '300';   
      })
    }

    ionViewDidLoad(){
      this.storage.get('myFriends').then((val) => {
        let myFriends = val;
  
      if (this.playerID == localStorage.getItem('uid')){
        $('#friendButton').css('display','none');
      }else{
        for (var key in myFriends) {
          if (key === this.playerID){
            $('#friendButton').addClass('trueFriends');
            $('#friendButton').html('Unfriend');
          }
        }
      }
    });
    }

    ionViewDidLeave() {
      sessionStorage.clear();
    }
}