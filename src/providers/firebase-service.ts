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
  myUsername: string;
  myID: string;
  messages: any;
  messageID: number;
  MessageData: any;
  messageNum: any;
  unreadMessages: any;
  userDOB: any;
  Date: any;



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

  getGamePlayers(){
    return this.afd.list('/games'+this.gameID+'/players')
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

  getCourts(){
    this.afd.list('/courts', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          this.storage.set('courts', snapshot.val());
        });
      })
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
    let birthday = localStorage.getItem('birthday');
    const yearsFromToday  = new Date(+new Date - +new Date(birthday)).getFullYear()-1970
    const numYears = yearsFromToday.toString();
  
    return this.afd.object('/users/' + this.user.uid).update({
      ageCount: numYears,
      name: localStorage.getItem('name'),
      height: localStorage.getItem('height'),
      weight: localStorage.getItem('weight'),
      experience: localStorage.getItem('experience'),
      birthday: localStorage.getItem('birthday'),
      gender: localStorage.getItem('gender'),
      img: localStorage.getItem('img')
    });
  }

  addRemoveFriend(uid) {
    if ($(event.target).hasClass('trueFriends')){
      $('#friendButton').removeClass('trueFriends');
      $('#friendButton').html('Add Friend');
      return this.afd.object('/users/' + this.user.uid+'/friends/'+uid).update({
        img: null,
        squad: null,
        status: null,
        uid: null,
        username: null
      })
    } else {
      $('#friendButton').addClass('pending');
      $('#friendButton').html('Pending');
      this.myID = localStorage.getItem('uid');
      this.sendfriendRequest(uid);
      return this.afd.object('/users/' + this.myID + '/friends/' + uid).update({
        img: sessionStorage.getItem('CurrPlayer.img'),
        squad: 'false',
        status: 'pending',
        uid: sessionStorage.getItem('CurrPlayer.uid'),
        username: sessionStorage.getItem('CurrPlayer.username')
      })
    }
  }

  sendfriendRequest(uid){
    this.myUsername = localStorage.getItem('currUserName');
    this.messageID = Math.floor(10000000000000000000 + Math.random() * 90000000000000000000);
    return this.afd.object('/users/' + uid + '/messages/' + this.messageID).update({
      avatar: sessionStorage.getItem('CurrPlayer.img'),
      header: 'Friend Request',
      message: this.myUsername + ' wants to be friends.',
      messageID: this.messageID,
      requestorID: sessionStorage.getItem('CurrPlayer.uid'),
      requestorName: sessionStorage.getItem('CurrPlayer.username')
    })
  }

  joinGame() {
    this.playerID = localStorage.getItem('uid');
    this.gameID = sessionStorage.getItem('gameID');

    return this.afd.object('/games/' + this.gameID + '/players/' + this.playerID).update({  
      alias: localStorage.getItem('name'),
      age: parseInt(localStorage.getItem('ageCount')),
      uid: localStorage.getItem('uid'),
      experience: parseInt(localStorage.getItem('experience')),
      img: localStorage.getItem('img')
    });
  }

  leaveGame(gameID) {
    this.playerID = localStorage.getItem('uid');
    this.gameID = sessionStorage.getItem('gameID');

    return this.afd.object('/games/' + this.gameID + '/players/' + this.playerID).update({  
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

  checkMessages(uid){
    this.MessageData = [];
    this.unreadMessages = [];
    this.afd.list('/users/'+ uid + '/messages', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          if (snapshot.val().read == "false"){
              this.unreadMessages.push(snapshot.key)
          }
          this.MessageData.push(snapshot.val());
        });

        this.messageNum; let i = 0; let num = 1;
        for (var key in this.MessageData) {
          if (this.MessageData[i].read === "false"){
            this.messageNum = num++
          }else{
            //do nothing
          }
          i++;
        }  

        if (this.messageNum > 0){
          $('.notify').remove();
          $('.navIcon.messages').after('<span class="notify"></span>');
        }else{
          $('.notify').remove();        
        }
        localStorage.setItem('MessageNum',this.messageNum);
        this.storage.set('MessageData',this.MessageData);
    })
  }

}
