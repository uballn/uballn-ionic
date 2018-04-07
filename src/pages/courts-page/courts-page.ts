import { Component, ViewChild, ElementRef } from '@angular/core';
import { mapStyle } from './mapStyle';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseService } from './../../providers/firebase-service';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
declare var google;

@IonicPage()
@Component({
  selector: 'courts-page',
  templateUrl: 'courts-page.html'
})
export class CourtsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  myLocation: any;
  google: any;
  myPlaces: any;
  uid: string;
  avatar: string;

  constructor(
    public navCtrl: NavController,
    public geo: Geolocation,
    public storage: Storage,
    public firebaseService: FirebaseService,
    public afd: AngularFireDatabase) {
    }

    ionViewWillEnter(){
        this.loadMap();
        let uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid); 
        
        this.avatar = localStorage.getItem('img');
    }

    goToProfile() {
      this.navCtrl.push('ProfilePage');
    }
  
  loadMap(){
    // this.geo.getCurrentPosition().then((resp) => {
    // let lat = JSON.stringify(resp.coords.latitude);
    // let lng = JSON.stringify(resp.coords.longitude);

    // let watch = this.geo.watchPosition();
    // watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
    // });

    this.storage.get('courts').then((val) => {
      this.myPlaces = val;

    let latLng = new google.maps.LatLng('33.2083057','-96.8940848');

    let mapOptions = {
        center: latLng,
        zoom: 10,
        scroll: true,
        rotate: true,
        mapTypeControl: false,
        fullscreenControl:false,
        styles:mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    for (let place of this.myPlaces) {
      this.addMarker(place);
    }
  })
  }



  addMarker(place){
    let position = new google.maps.LatLng(place.lat, place.lng);
    let markerIcon = {
        url: 'assets/img/marker.svg', // url
        scaledSize: new google.maps.Size(20,20), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0,0) // anchor
    };

    let marker = new google.maps.Marker({
      map: this.map,
      icon: markerIcon,
      position: position
    });

    let markerInfo = '<img class="mapImage" src="'+place.img+'" /><b>' + place.name + '</b><p>'+place.address+'</p>';
    this.addInfoWindow(marker, markerInfo);
  }

  addInfoWindow(marker, markerInfo){
    let infoWindow = new google.maps.InfoWindow({
      content: markerInfo
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }

}
