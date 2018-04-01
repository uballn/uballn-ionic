import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shared-page',
  templateUrl: 'shared-page.html',
})
export class SharedPage {
  sharedLists : Observable<any[]>;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.firebaseService.authState.subscribe(user => {
      if (user) {
        this.sharedLists = this.firebaseService.getSharedLists();
      }
    })
  }

  addItemToList(listId, listName) {
    let prompt = this.alertCtrl.create({
      title: 'New item for "' + listName + '"',
      message: 'Enter a name for your new item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Milk'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Add Item',
          handler: data => {
            this.firebaseService.addListItem(listId, data.name).then(data => {
              this.presentToast('New item added!');
            });
          }
        }
      ]
    });
    prompt.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
