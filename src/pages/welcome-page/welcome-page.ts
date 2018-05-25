import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome-page.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  goToLogin() {
    let modal = this.modalCtrl.create('LoginPage');
    modal.present();
  }

  goToSignup() {
    let modal = this.modalCtrl.create('RegisterPage');
    modal.present();
  }

}
