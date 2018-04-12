import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends-page.html',
})
export class InviteFriendsPage {
  friends: any;
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController,
    public afd: AngularFireDatabase,
    public navParams: NavParams,
    private storage: Storage) {
      this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindACourtPage');
  }

  ionViewWillEnter(){
    this.storage.set('selectedLocation', null);
  }

  initializeItems() {
    this.storage.get('friendData').then((val) => {
      this.friends = val;
      console.log(this.friends);
    })
  }

  findFriend(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.friends = this.friends.filter((friend) => {
        return (friend.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  inviteFriend(friend){
    alert('You invited '+friend.username+'!')
  }

  close(){
    this.navCtrl.pop();
  }

}
