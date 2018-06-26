import { Component, ViewChild, ElementRef } from '@angular/core';
import { mapStyle } from './mapStyle';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseService } from './../../providers/firebase-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { GeofenceService } from '../../geofence-module/providers/geofence-service';
import { GeolocationService } from '../../geofence-module/providers/geolocation-service';

declare var google;

@IonicPage()
@Component({
  selector: 'courts-page',
  templateUrl: 'courts-page.html'
})
export class CourtsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  google: any;
  myPlaces: any;
  uid: string;
  avatar: string;
  currentPosition: any;

  constructor(
    public navCtrl: NavController,
    public geo: Geolocation,
    public storage: Storage,
    public firebaseService: FirebaseService,
    public afd: AngularFireDatabase,
    public geofenceService: GeofenceService,
    public geolocationService: GeolocationService) {
    }

    ionViewDidLoad(){
      this.loadMap();
    }

    ionViewWillEnter(){
        let uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid); 
        this.avatar = localStorage.getItem('img');
    }
  
  loadMap(){
    this.storage.get('courts').then((val) => {
      this.myPlaces = val;
      let fences = [];

      this.geofenceService.init().then( () => {

        // build geofences from courts returned from localStorage
        let count = 1;
        val.forEach(court => {
          let fence = {
            id: count,
            radius: 50,
            latitude: court.lat,
            longitude: court.lng,
            transitionType: 3,
            notification: {
              id: count, 
              title : "Court Nearby",
              text : "Court Nearby: " + court.name,
              openAppOnClick : true
              }
          }
          // push this fence to the fences array
          fences.push(fence);
          count++;
        })
        // now add all fences to the geofence plugin...
        this.geofenceService.addOrUpdate(fences).then( 
          () => console.log('SUCCESS => FENCES ADDED'), 
          (err) => { console.log("Add or update geofence error: ", err)})
      }, (err) => {
        console.log('GEOFENCE SERVICE INIT ERROR: ', err);
      })

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

      this.geolocationService.watchPosition().subscribe( location => {
        console.log("we rcvd a new position: " + JSON.stringify(location));
          this.plotPositionOnMap(location);
      }, (err) => {console.log('GEOLOCATION ERROR: ', err)});
  
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

  plotPositionOnMap(position){
    let markerIcon = {
      url: 'assets/img/location-marker.svg', // url
      scaledSize: new google.maps.Size(20,20), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0,0) // anchor
  };
    let myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    if(this.currentPosition !== undefined){
      this.currentPosition.setPosition(myPosition);
      this.map.setCenter(myPosition);
      console.log('plotPositionOnMap');
    }else{
        this.currentPosition = new google.maps.Marker({
            position: myPosition,
            map: this.map,
            icon: markerIcon
        });
        console.log('initial attempt to plotPositionOnMap')
    }
  }

  seeMessages(){
    this.navCtrl.push('MessagesPage');
  }

  goToProfile() {
    this.navCtrl.push('ProfilePage');
  }

}
