import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ad',
  templateUrl: 'ad-page.html',
})
export class AdPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdPage');
  }

  ionViewWillEnter(){
    localStorage.setItem('adShown','true');
  }

  close(){
    this.navCtrl.pop();
    this.presentToast('Game Added!');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

}