webpackJsonp([2],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourtsPageModule", function() { return CourtsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courts_page__ = __webpack_require__(329);
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapStyle__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(56);
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
    function CourtsPage(navCtrl, geo, storage, firebaseService, afd) {
        this.navCtrl = navCtrl;
        this.geo = geo;
        this.storage = storage;
        this.firebaseService = firebaseService;
        this.afd = afd;
    }
    CourtsPage.prototype.ionViewWillEnter = function () {
        this.loadMap();
        var uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid);
    };
    CourtsPage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    CourtsPage.prototype.loadMap = function () {
        // this.geo.getCurrentPosition().then((resp) => {
        // let lat = JSON.stringify(resp.coords.latitude);
        // let lng = JSON.stringify(resp.coords.longitude);
        var _this = this;
        // let watch = this.geo.watchPosition();
        // watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
        // });
        this.storage.get('courts').then(function (val) {
            _this.myPlaces = val;
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
    return CourtsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]) === "function" && _a || Object)
], CourtsPage.prototype, "mapElement", void 0);
CourtsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'courts-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/courts-page/courts-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goToProfile()">\n      <ion-icon name="contact"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end (click)="seeMessages()">\n        <img class="navIcon messages" src="assets/img/icons-message.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/courts-page/courts-page.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service__["a" /* FirebaseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _f || Object])
], CourtsPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=courts-page.js.map

/***/ }),

/***/ 330:
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
//# sourceMappingURL=2.main.js.map