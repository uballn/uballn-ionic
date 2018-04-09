import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service';
import { Settings } from '../../providers/providers';
import { ModalPage } from './modal-page';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule-page.html'
})
export class SchedulePage {
  // Our local settings object
  options: any;
  chosenCourt: string;
  settingsReady = false;
  form: FormGroup;
  avatar: string;
  location: string;

  // profileSettings = {
  //   page: 'profile',
  //   pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  // };

  // page: string = 'main';
  // pageTitleKey: string = 'SETTINGS_TITLE';
  // pageTitle: string;

  // subSettings: any = SchedulePage;

  // public event = {
  //   month: '1990-02-19',
  //   timeStarts: '07:43',
  //   timeEnds: '1990-02-20'
  // }

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public modalCtrl: ModalController,
    public firebaseService: FirebaseService,
    public navParams: NavParams,
    private storage: Storage) {

  }

  // _buildForm() {
  //   let group: any = {
  //     option1: [this.options.option1],
  //     timeStarts: [],
  //     timeEnds: []
  //   };

  //   switch (this.page) {
  //     case 'main':
  //       break;
  //     case 'profile':
  //       group = {
  //         option4: [this.options.option4]
  //       };
  //       break;
  //   }
  //   this.form = this.formBuilder.group(group);

  //   // Watch the form for changes, and
  //   this.form.valueChanges.subscribe((v) => {
  //     this.settings.merge(this.form.value);
  //   });
  // }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    // this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {

    this.storage.get('selectedLocation').then((val) => {
      let selectedLocation = val;

    if (val == null){
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
    let modal = this.modalCtrl.create('FindACourtPage');
    modal.present();
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }


}
