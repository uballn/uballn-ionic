import { FirebaseService } from './../../providers/firebase-service';
import { EmailValidator } from './../../validators/email';
import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-page',
  templateUrl: 'register-page.html',
})
export class RegisterPage {
  public signupForm: FormGroup;
  loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public firebaseService: FirebaseService,
    public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      name: ['', Validators.compose([Validators.minLength(1), Validators.required])],
    });
  }

  signupUser() {
    if (this.signupForm.valid) {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      this.firebaseService.signUp(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.name)
        .then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot('LoginPage');
          });
        }, (error) => {
          this.loading.dismiss().then(() => {
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
          });
        });
    }
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
