import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-find-a-court',
  templateUrl: 'find-a-court-page.html',
})
export class FindACourtPage {
  courts: any;
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController,
    public afd: AngularFireDatabase,
    public navParams: NavParams,
    private storage: Storage) {
      this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindACourtPage');
  }

  ionViewWillEnter(){
    this.storage.set('selectedLocation', null);
  }

  initializeItems() {
    this.courts = [
        { 
          "address" : "2700 E Eldorado Pkwy Ste 300, Little Elm, TX 75068",
          "img" : "http://clubsolutionsmagazine.com/wp-content/uploads/2017/05/Southglenn-Gym-Centennial-Colorado.-620x400.png",
          "lat" : "33.175896",
          "lng" : "-96.8911934",
          "name" : "24HrFitness - Little Elm",
          "uid" : "29x2xbf5z1e64ngris3d5gfcnxb8"
        },
        {
          "address" : "6601 NE Loop 820, North Richland Hills, TX 76180",
          "img" : "https://www.24hourfitness.com/images/clubs/club_slideshows/816/album1/xlarge/image1.jpg",
          "lat" : "32.8420716",
          "lng" : "-97.24122919999999",
          "name" : "24HrFitness - North Richland Hills",
          "uid" : "3a2msjilsimavr4btpih82kfck21"
        },
        {
          "address" : "3865 Preston Rd, Frisco, TX 75034",
          "img" : "//geo1.ggpht.com/cbk?panoid=bQiDHenhLEaGmrJHey4Kag&output=thumbnail&cb_client=unknown_client.imagery_viewer.gps&thumb=2&w=203&h=100&yaw=277.5091&pitch=0&thumbfov=100",
          "lat" : "33.1113431",
          "lng" : "-96.8095955",
          "name" : "24HrFitness - Frisco",
          "uid" : "7aex0hdit22fngm6er47nuil9r68"
        },
        {
          "address" : "724 W Main St #190, Lewisville, TX 75067",
          "img" : "https://lh5.googleusercontent.com/p/AF1QipM5Fnl0B_hqiGnlxxkFCgQQcDysxxZaYj4FdNA5=w203-h140-k-no",
          "lat" : "33.0550825",
          "lng" : "-96.9816676",
          "name" : "24Fitness - Lewisville",
          "uid" : "7bbvll64eewec7hw2z1emzdfoyl8"
        },
        {
          "address" : "301 N. Nolen Drive, Southlake, TX 76092",
          "img" : "https://lh5.googleusercontent.com/p/AF1QipMzFHJnZsyellBH4qQ6mfMKDBfBJ-_azEGdDfDv=w203-h100-k-no",
          "lat" : "32.9412612",
          "lng" : "-97.1106216",
          "name" : "24HrFitness - Grapevine",
          "uid" : "9mckeq9g3rssggab9yj4yejr2r0x"
        },
        {
          "address" : "4600 W Park Blvd, Plano, TX 75093",
          "img" : "https://media.superpages.com/media/photos/92e8/9461/8325/2851/64ab/abe9/f3c3/d283/image/92e894618325285164ababe9f3c3d283.jpeg",
          "lat" : "33.0259727",
          "lng" : "-96.7875141",
          "name" : "24HrFitness - Plano",
          "uid" : "bmsfkzdice4icvg8dg5rvsm3t7g2"
        },
        {
          "address" : "2770 E Trinity Mills Rd, Carrollton, TX 75006",
          "img" : "https://lh5.googleusercontent.com/p/AF1QipNu2CbFzc85VjtW7yJD6P9DhNo-VsYtkPWCsuVo=w203-h152-k-no",
          "lat" : "32.9856774",
          "lng" : "-96.8581071",
          "name" : "24HrFitness - Carrollton",
          "uid" : "jf23jw3566fka2k4ci23llytng6g"
        }  
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.courts = this.courts.filter((court) => {
        return (court.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  sendLocation(court){
    this.storage.set('selectedLocation', court);
    this.navCtrl.pop();
  }

  close(){
    this.navCtrl.pop();
  }

}
