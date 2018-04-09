webpackJsonp([15],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindACourtPageModule", function() { return FindACourtPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_a_court_page__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindACourtPageModule = (function () {
    function FindACourtPageModule() {
    }
    return FindACourtPageModule;
}());
FindACourtPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__find_a_court_page__["a" /* FindACourtPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_a_court_page__["a" /* FindACourtPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__find_a_court_page__["a" /* FindACourtPage */]
        ]
    })
], FindACourtPageModule);

//# sourceMappingURL=find-a-court-page.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindACourtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindACourtPage = (function () {
    function FindACourtPage(navCtrl, afd, navParams, storage) {
        this.navCtrl = navCtrl;
        this.afd = afd;
        this.navParams = navParams;
        this.storage = storage;
        this.searchQuery = '';
        this.initializeItems();
    }
    FindACourtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindACourtPage');
    };
    FindACourtPage.prototype.ionViewWillEnter = function () {
        this.storage.set('selectedLocation', null);
    };
    FindACourtPage.prototype.initializeItems = function () {
        this.courts = [
            {
                "address": "2700 E Eldorado Pkwy Ste 300, Little Elm, TX 75068",
                "img": "http://clubsolutionsmagazine.com/wp-content/uploads/2017/05/Southglenn-Gym-Centennial-Colorado.-620x400.png",
                "lat": "33.175896",
                "lng": "-96.8911934",
                "name": "24HrFitness - Little Elm",
                "uid": "29x2xbf5z1e64ngris3d5gfcnxb8"
            },
            {
                "address": "6601 NE Loop 820, North Richland Hills, TX 76180",
                "img": "https://www.24hourfitness.com/images/clubs/club_slideshows/816/album1/xlarge/image1.jpg",
                "lat": "32.8420716",
                "lng": "-97.24122919999999",
                "name": "24HrFitness - North Richland Hills",
                "uid": "3a2msjilsimavr4btpih82kfck21"
            },
            {
                "address": "3865 Preston Rd, Frisco, TX 75034",
                "img": "//geo1.ggpht.com/cbk?panoid=bQiDHenhLEaGmrJHey4Kag&output=thumbnail&cb_client=unknown_client.imagery_viewer.gps&thumb=2&w=203&h=100&yaw=277.5091&pitch=0&thumbfov=100",
                "lat": "33.1113431",
                "lng": "-96.8095955",
                "name": "24HrFitness - Frisco",
                "uid": "7aex0hdit22fngm6er47nuil9r68"
            },
            {
                "address": "724 W Main St #190, Lewisville, TX 75067",
                "img": "https://lh5.googleusercontent.com/p/AF1QipM5Fnl0B_hqiGnlxxkFCgQQcDysxxZaYj4FdNA5=w203-h140-k-no",
                "lat": "33.0550825",
                "lng": "-96.9816676",
                "name": "24Fitness - Lewisville",
                "uid": "7bbvll64eewec7hw2z1emzdfoyl8"
            },
            {
                "address": "301 N. Nolen Drive, Southlake, TX 76092",
                "img": "https://lh5.googleusercontent.com/p/AF1QipMzFHJnZsyellBH4qQ6mfMKDBfBJ-_azEGdDfDv=w203-h100-k-no",
                "lat": "32.9412612",
                "lng": "-97.1106216",
                "name": "24HrFitness - Grapevine",
                "uid": "9mckeq9g3rssggab9yj4yejr2r0x"
            },
            {
                "address": "4600 W Park Blvd, Plano, TX 75093",
                "img": "https://media.superpages.com/media/photos/92e8/9461/8325/2851/64ab/abe9/f3c3/d283/image/92e894618325285164ababe9f3c3d283.jpeg",
                "lat": "33.0259727",
                "lng": "-96.7875141",
                "name": "24HrFitness - Plano",
                "uid": "bmsfkzdice4icvg8dg5rvsm3t7g2"
            },
            {
                "address": "2770 E Trinity Mills Rd, Carrollton, TX 75006",
                "img": "https://lh5.googleusercontent.com/p/AF1QipNu2CbFzc85VjtW7yJD6P9DhNo-VsYtkPWCsuVo=w203-h152-k-no",
                "lat": "32.9856774",
                "lng": "-96.8581071",
                "name": "24HrFitness - Carrollton",
                "uid": "jf23jw3566fka2k4ci23llytng6g"
            }
        ];
    };
    FindACourtPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.courts = this.courts.filter(function (court) {
                return (court.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    FindACourtPage.prototype.sendLocation = function (court) {
        this.storage.set('selectedLocation', court);
        this.navCtrl.pop();
    };
    FindACourtPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return FindACourtPage;
}());
FindACourtPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-find-a-court',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/find-a-court-page/find-a-court-page.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n        Find A Court\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="placeholder"></ion-searchbar>\n    <ion-list>\n      <button ion-item *ngFor="let court of courts" (click)="sendLocation(court)">\n        <ion-avatar item-start>\n          <img [src]="court.img" />\n        </ion-avatar>\n        <h2>{{court.name}}</h2>\n        <p>{{court.address}}</p>\n      </button>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/find-a-court-page/find-a-court-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], FindACourtPage);

var _a, _b, _c, _d;
//# sourceMappingURL=find-a-court-page.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map