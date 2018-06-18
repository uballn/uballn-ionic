webpackJsonp([3],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourtsPageModule", function() { return CourtsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courts_page__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CourtsPageModule = (function () {
    function CourtsPageModule() {
    }
    return CourtsPageModule;
}());
CourtsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__courts_page__["a" /* CourtsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__courts_page__["a" /* CourtsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__courts_page__["a" /* CourtsPage */]
        ]
    })
], CourtsPageModule);

//# sourceMappingURL=courts-page.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapStyle__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geofence_module_providers_geofence_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__geofence_module_providers_geolocation_service__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CourtsPage = (function () {
    function CourtsPage(navCtrl, geo, storage, firebaseService, afd, geofenceService, loadingCtrl, geolocationService) {
        this.navCtrl = navCtrl;
        this.geo = geo;
        this.storage = storage;
        this.firebaseService = firebaseService;
        this.afd = afd;
        this.geofenceService = geofenceService;
        this.loadingCtrl = loadingCtrl;
        this.geolocationService = geolocationService;
    }
    CourtsPage.prototype.ionViewWillEnter = function () {
        this.loadMap();
        var uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid);
        this.avatar = localStorage.getItem('img');
    };
    CourtsPage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    CourtsPage.prototype.loadMap = function () {
        var _this = this;
        this.storage.get('courts').then(function (val) {
            _this.myPlaces = val;
            var fences = [];
            _this.geofenceService.init().then(function () {
                var gpw = {
                    "id": "2",
                    "radius": 30,
                    "longitude": -111.857776,
                    "transitionType": 3,
                    "latitude": 40.745289,
                    "notification": {
                        "id": '19283912739128379192837',
                        "title": "You Crossed a Fence",
                        "openAppOnClick": true,
                        "text": "Garden Park Ward"
                    }
                };
                fences.push(gpw);
                // build geofences from courts returned from localStorage
                var count = 1;
                val.forEach(function (court) {
                    var fence = {
                        id: count,
                        radius: 10,
                        latitude: court.lat,
                        longitude: court.lng,
                        transitionType: 3,
                        notification: {
                            id: count,
                            title: "You're Near A UBALLN Court",
                            text: "Jump into the app",
                            openAppOnClick: true
                        }
                    };
                    // push this fence to the fences array
                    fences.push(fence);
                    count++;
                });
                // now add all fences to the geofence plugin...
                _this.geofenceService.addOrUpdate(fences).then(function () { return console.log('SUCCESS => FENCES ADDED'); }, function (err) { console.log("Add or update geofence error: ", err); });
            }, function (err) {
                console.log('GEOFENCE SERVICE INIT ERROR: ', err);
            });
            var latLng = new google.maps.LatLng('33.2083057', '-96.8940848');
            var mapOptions = {
                center: latLng,
                zoom: 10,
                scroll: true,
                rotate: true,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: __WEBPACK_IMPORTED_MODULE_1__mapStyle__["a" /* mapStyle */],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            for (var _i = 0, _a = _this.myPlaces; _i < _a.length; _i++) {
                var place = _a[_i];
                _this.addMarker(place);
            }
            _this.geolocationService.watchPosition().subscribe(function (location) {
                console.log("we rcvd a new position: " + JSON.stringify(location));
                _this.plotPositionOnMap(location);
            }, function (err) { console.log('GEOLOCATION ERROR: ', err); });
        });
    };
    CourtsPage.prototype.addMarker = function (place) {
        var position = new google.maps.LatLng(place.lat, place.lng);
        var markerIcon = {
            url: 'assets/img/marker.svg',
            scaledSize: new google.maps.Size(20, 20),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var marker = new google.maps.Marker({
            map: this.map,
            icon: markerIcon,
            position: position
        });
        var markerInfo = '<img class="mapImage" src="' + place.img + '" /><b>' + place.name + '</b><p>' + place.address + '</p>';
        this.addInfoWindow(marker, markerInfo);
    };
    CourtsPage.prototype.addInfoWindow = function (marker, markerInfo) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: markerInfo
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    CourtsPage.prototype.seeMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    CourtsPage.prototype.plotPositionOnMap = function (position) {
        var markerIcon = {
            url: 'assets/img/location-marker.svg',
            scaledSize: new google.maps.Size(20, 20),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        if (this.currentPosition !== undefined) {
            this.currentPosition.setPosition(myPosition);
            this.map.setCenter(myPosition);
            console.log('plotPositionOnMap');
        }
        else {
            this.currentPosition = new google.maps.Marker({
                position: myPosition,
                map: this.map,
                icon: markerIcon
            });
            console.log('initial attempt to plotPositionOnMap');
        }
    };
    return CourtsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], CourtsPage.prototype, "mapElement", void 0);
CourtsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'courts-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic/src/pages/courts-page/courts-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start class="avatarContainer" (click)="goToProfile()">\n      <img class="avatar" src="{{avatar}}" />\n    </button>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end (click)="seeMessages()">\n        <img class="navIcon messages" src="assets/img/icons-message.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic/src/pages/courts-page/courts-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_7__geofence_module_providers_geofence_service__["a" /* GeofenceService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__geofence_module_providers_geolocation_service__["a" /* GeolocationService */]])
], CourtsPage);

//# sourceMappingURL=courts-page.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapStyle; });
var mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];
//# sourceMappingURL=mapStyle.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map