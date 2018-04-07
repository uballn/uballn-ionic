import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service';
import { Settings } from '../../providers/providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
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

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SchedulePage;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public firebaseService: FirebaseService,
    public formBuilder: FormBuilder,
    public navParams: NavParams) {

  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      timeStarts: [],
      timeEnds: []
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    this.avatar = localStorage.getItem('img');

    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    // this.translate.get(this.pageTitleKey).subscribe((res) => {
    //   this.pageTitle = res;
    // })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });

    let uid = localStorage.getItem('uid');
    this.firebaseService.checkMessages(uid);

  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  goToProfile() {
    this.navCtrl.push('ProfilePage');
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }


}
