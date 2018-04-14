import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-page',
  templateUrl: 'tabs-page.html',
})
export class TabsPage {
  tab1 = 'QuickPlayPage';
  tab2 = 'CourtsPage';
  tab3 = 'SchedulePage';

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService) { }

  ionViewDidLoad() {
   
  }

}
