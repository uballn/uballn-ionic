import { 
    Component, 
    Input, 
    Renderer2, 
    ElementRef, 
    Inject, 
    ViewChild
 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
//import { Plugins } from '@capacitor/core';
import { GeolocationService } from '../../providers/geolocation-service';

declare var google;

@Component({
  selector: 'geofence-map',
  templateUrl: 'geofence-map.html'
})
export class GeofenceMapComponent{

    @Input('apiKey') apiKey: string;
    @Input('mapPoints') mapPoints:Array<any>;

    @ViewChild('map') mapElement: ElementRef;

    private currentPosition = null;
    public map: any;
    public markers: any[] = [];
    private mapsLoaded: boolean = false;
    //private networkHandler = null;
 
    constructor(private geolocationService:GeolocationService, private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private _document){
 
    }

    ngOnInit(){
        this.init().then((res) => {
            console.log("Google Maps ready.")
            //this.currentPosition = new google.maps.Marker();
            this.geolocationService.watchPosition().subscribe( (data) => {
                if(data) {
                    //this.currentPostition = data;
                    //console.log(JSON.stringify(data));
                    this.plotPositionOnMap(data)
                }
            })
        }, (err) => {   
            console.log(err);
        });
    }

    private init(): Promise<any> {
 
        return new Promise((resolve, reject) => {
 
            this.loadSDK().then((res) => {
 
                this.initMap().then((res) => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
 
            }, (err) => {
 
                reject(err);
 
            });
 
        });
 
    }

    private loadSDK(): Promise<any> {
        return new Promise((resolve, reject)=>{
            if(!this.mapsLoaded){
                this.injectSDK().then((res) => {
                    this.mapsLoaded = true;
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
            }else{
                console.log('Maps already loaded');
            }
        })
    }

    private injectSDK(): Promise<any> {
 
        return new Promise((resolve, reject) => {

            // if mapInit is definded, then google maps script is loaded //
            if( window['mapInit'] === undefined){
 
                window['mapInit'] = () => {
                    //console.log('HEREHERE');
                    this.mapsLoaded = true;
                    resolve(true);
                }
    
                let script = this.renderer.createElement('script');
                script.id = 'googleMaps';
    
                if(this.apiKey){
                    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
                } else {
                    script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';      
                }
    
                this.renderer.appendChild(this._document.body, script);
            }else{
                resolve(true);
            }
        });
 
    }

    private initMap(): Promise<any> {
 
        return new Promise((resolve, reject) => {
 
           // Geolocation.getCurrentPosition().then((position) => {
 
                //console.log(position);

                let center = {lat: 37.09024, lon: -95.712891}
 
                let latLng = new google.maps.LatLng(center.lat, center.lon);
 
                let mapOptions = {
                    center: latLng,
                    zoom: 3
                };
 
                this.map = new google.maps.Map(this.element.nativeElement, mapOptions);

                this.mapPoints.forEach( (point) => {
                    this.addMarker(
                        point.geofence.latitude, point.geofence.longitude
                    )
                })

                //this.addMarker(this.mapPoints.geofence.latitude, this.mapPoints.geofence.longitude);
                resolve(true);
 
           // }, (err) => {
 
            //    reject('Could not initialise map');
 
            //});
 
        });
 
    }

    public addMarker(lat: number, lng: number): void {
 
        let latLng = new google.maps.LatLng(lat, lng);
 
        let marker = new google.maps.Marker({
            map: this.map,
            //animation: google.maps.Animation.DROP,
            position: latLng
        });
 
        this.markers.push(marker);

        let circle = new google.maps.Circle({
            map: this.map,
            //radius: this.fence.geofence.radius,
            fillColor: 'red',
            fillOpacity: 0.1,
            strokeColor: 'red',
            strokeOpacity: 0.2,
            strokeWeight: 0.5
        })

        circle.bindTo('center', marker, 'position');
 
    }

    plotPositionOnMap(position){

        console.log('this.currentPosition: ', this.currentPosition);
        if(this.currentPosition !== null){
            console.log('Setting current position on map')
            //this.currentPosition.setMap(null);
            this.currentPosition.setPosition({lat: position.coords.latitude, lng: position.coords.longitude });
        }else{
            console.log('initializing current position')
            this.currentPosition = new google.maps.Marker({
                position: {lat: position.coords.latitude, lng: position.coords.longitude },
                map: this.map,
                icon: 'assets/imgs/blue-dot-2.png'
            });

            this.map.setZoom(15);
        }

        

        //this.map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude });
        //this.map.setZoom(15);
        this.map.panTo({lat: position.coords.latitude, lng: position.coords.longitude })

        //this.currentPosition = new google.maps.Circle({
        //    strokeColor: '#0000FF',
        //    strokeOpacity: 0,
        //    strokeWeight: 0,
        //    fillColor: '#0000FF',
        //    fillOpacity: .75,
        //    map: this.map,
        //    center: {lat: position.coords.latitude, lng: position.coords.longitude },
        //    radius: 25
        //  });
    }

}
