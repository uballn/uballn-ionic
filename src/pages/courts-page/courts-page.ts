import { Component, ViewChild, ElementRef } from '@angular/core';
import { mapStyle } from './mapStyle';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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

  myPlaces = [
      {'name':'24HrFitness - Little Elm',
        'lat': '33.175896',
        'lng': '-96.8911934'
      },
      {'name': '24HrFitness - Frisco',
        'lat': '33.1113431',
        'lng': '-96.8095955'
      },
      {'name':'2424HrFitness - Carrollton',
        'lat': '32.9856774',
        'lng': '-96.8581071'
      },
      {'name':'24HrFitness - Plano',
        'lat': '33.0259727',
        'lng': '-96.7875141'
      },
      {'name':'24HrFitness - North Richland Hills',
        'lat': '32.8420716',
        'lng': '-97.24122919999999'
      },
      {'name':'24Fitness - Lewisville',
        'lat':'33.0650424',
        'lng': '-96.8844226'
      },
      {'name':'24HrFitness - Grapevine',
        'lat':'32.9412612',
        'lng':'-97.1106216'
      }
    ]


  constructor(
    public navCtrl: NavController,
    public geo: Geolocation) {
  }

  ionViewDidEnter(){
    this.loadMap();
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

    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
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

    let markerInfo = '<b style="color:#333">' + place.name + '</b>';
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

}
