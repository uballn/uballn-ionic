import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  loading: Loading;
  userData: any;
  currUserFriends: any;
  myPlaces: any;
  uid: any;
  allUsers: any;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public afd: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private storage: Storage,
    public modalCtrl: ModalController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      // this.loading = this.loadingCtrl.create();
      // this.loading.present();

      let currUserFriends;

      this.firebaseService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(authData => {
          localStorage.setItem('currUserEmail', authData.email);
          localStorage.setItem('currUserName', authData.displayName);
          localStorage.setItem('emailVerified', authData.emailVerified);
          localStorage.setItem('userID', authData.uid);

          this.afd.list('/users/'+authData.uid, { preserveSnapshot: true})
          .subscribe(snapshots=>{
              snapshots.forEach(snapshot => {
                localStorage.setItem(snapshot.key, snapshot.val());
                if (snapshot.key === 'friends'){
                  this.storage.set('myFriends', snapshot.val());
                }
              });
          })

          this.afd.list('/courts', { preserveSnapshot: true})
          .subscribe(snapshots=>{
            this.myPlaces = [];
              snapshots.forEach(snapshot => {
                  this.myPlaces.push(snapshot.val());
              });
              this.storage.set('courts',this.myPlaces);
          })

          this.afd.list('/users', { preserveSnapshot: true})
          .subscribe(snapshots=>{
            this.userData = [];
              snapshots.forEach(snapshot => {
                  this.userData.push(snapshot.val());
              });
              this.storage.set('allUsers',this.userData);
          })

          if (localStorage.getItem('img') == null){
            localStorage.setItem('img',null);
          };

          this.firebaseService.getCourts();
        
            if (localStorage.getItem('setupNeeded') == 'true'){
              let modal = this.modalCtrl.create('SetupProfilePage');
              modal.present();
            }else{
              this.navCtrl.setRoot('TabsPage', currUserFriends);
            }
        }, error => {
            let alert = this.alertCtrl.create({
              title: 'Error',
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
      })
    }
  }

  goToSignup() {
    this.navCtrl.push('RegisterPage');
  }

  resetPassword() {
    let prompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: 'Enter your email below',
      inputs: [
        {
          name: 'email',
          placeholder: 'My Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Reset',
          handler: data => {
            this.firebaseService.resetPassword(data.email).then(data => {
              console.log('reset: ', data);
              this.showBasicAlert('Success', 'Check your email for further instructions.');
            })
              .catch(err => {
                this.showBasicAlert('Error', err.message);
              })
          }
        }
      ]
    });
    prompt.present();
  }

  showBasicAlert(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  showPrivacyPolicy() {
    let modal = this.modalCtrl.create('PolicyPage');
    modal.present();
  }

  showTerms() {
    let modal = this.modalCtrl.create('TermsPage');
    modal.present();
  }

  back(){
    this.navCtrl.pop();
  }
  
}
