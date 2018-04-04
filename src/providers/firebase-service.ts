import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Injectable()
export class FirebaseService {
  user: firebase.User;
  authState: Observable<firebase.User>;
  users$: FirebaseListObservable<any>;
  currUser: any;
  gameID: any;
  playerID: any;
  age: any;
  alias: any;
  experience: any;
  img: any;
  friendData: any;
  friends: any;
  friendNum: any;

  constructor(
    private afAuth: AngularFireAuth,
    public afd: AngularFireDatabase,
    private storage: Storage) {
    this.authState = afAuth.authState;

    this.authState.subscribe(user => {
      this.user = user;
    });
  }

  signUp(email, password, name) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      this.afd.list('/users').update(newUser.uid, {email: email, name: name});
    });
  }

  loginUser(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

  resetPassword(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  createNewList(name) {
    return this.afd.list('/games').push({name: name, creator: this.user.email});
  }

  getGames() {
    return this.afd.list('/games');
  }

  getGameDetails() {
    return this.afd.list('/games'+this.gameID)
  }

  removeList(id) {
    this.afd.list('/games/').remove(id);
  }

  addListItem(listId, item) {
    return this.afd.list('/games/' + listId + '/players').push({name: item});
  }

  removegameItem(listId, itemId) {
    this.afd.list('/games/' + listId + '/players').remove(itemId);
  }

  shareList(listId, listName, shareWith) {
    return this.afd.list('/invitations').push({listId: listId, listName: listName, toEmail: shareWith, fromEmail: this.user.email});
  }

  getUserInvitations() {
    return this.afd.list('/invitations', {
      query: {
        orderByChild: 'toEmail',
        equalTo: this.user.email
      }
    })
  }

  acceptInvitation(invitation) {
    // Remove the notification
    this.discardInvitation(invitation.$key);
    let data = {
      [this.user.uid]: true
    }
    return this.afd.object('/games/' + invitation.listId).update(data);
  }

  discardInvitation(invitationId) {
    this.afd.list('/invitations').remove(invitationId);
  }

  getSharedLists() {
    return this.afd.list('/games', {
      query: {
        orderByChild: this.user.uid,
        equalTo: true
      }
    })
  }

  getUserData(uid) {
    let currUser = this.afd.list('/users/'+uid);
    console.log(currUser);
    return currUser;
  }

  updateUserProfile() {
    return this.afd.object('/users/' + this.user.uid).update({
      name: localStorage.getItem('name'),
      height: localStorage.getItem('height'),
      weight: localStorage.getItem('weight'),
      experience: localStorage.getItem('experience'),
      birthday: localStorage.getItem('birthday'),
      gender: localStorage.getItem('gender')
    });
  }

  addRemoveFriend(uid) {
    if ($(event.target).hasClass('trueFriends')){
      $('#friendButton').removeClass('trueFriends');
      $('#friendButton').html('Add Friend');
      return this.afd.object('/users/' + this.user.uid+'/friends/'+uid).update({
        img: null,
        squad: null,
        uid: null,
        username: null
      })
    } else {
      $('#friendButton').addClass('trueFriends');
      $('#friendButton').html('Unfriend');
      return this.afd.object('/users/' + this.user.uid+'/friends/'+uid).update({
        img: sessionStorage.getItem('CurrPlayer.img'),
        squad: 'false',
        uid: sessionStorage.getItem('CurrPlayer.uid'),
        username: sessionStorage.getItem('CurrPlayer.username')
      })
    }
  }

  joinGame(gameID) {
    this.playerID = localStorage.getItem('uid');
    this.gameID = sessionStorage.getItem('gameID');

    return this.afd.object('/games/' + this.gameID+'/players/'+this.playerID).update({  
      alias: localStorage.getItem('name'),
      age: localStorage.getItem('age'),
      uid: localStorage.getItem('uid'),
      experience: localStorage.getItem('experience'),
      img: localStorage.getItem('img')
    });
  }

  leaveGame(gameID) {
    this.playerID = localStorage.getItem('uid');
    this.gameID = sessionStorage.getItem('gameID');

    return this.afd.object('/games/' + this.gameID+'/players/'+this.playerID).update({  
      alias: null,
      age: null,
      uid: null,
      experience: null,
      img: null
    });
  }

  updateFriends(uid){
    this.afd.list('/users/'+uid, { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          localStorage.setItem(snapshot.key, snapshot.val());
          if (snapshot.key === 'friends'){
            this.storage.set('myFriends', snapshot.val());
          }
        });
        this.saveFriendData();
    })
  }

  saveFriendData(){
      this.storage.get('myFriends').then((val) => {
        this.friends = val;

        this.friendData = [];
        for (var key in this.friends) {
          this.friendData.push(this.friends[key]);
        }
        this.friendNum = this.friendData.length;
        localStorage.setItem('friendNum',this.friendNum);
        this.storage.set('friendData',this.friendData);
    })

  }

}
