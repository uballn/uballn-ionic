webpackJsonp([7],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_page__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulePageModule = (function () {
    function SchedulePageModule() {
    }
    return SchedulePageModule;
}());
SchedulePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__schedule_page__["a" /* SchedulePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedule_page__["a" /* SchedulePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__schedule_page__["a" /* SchedulePage */]
        ]
    })
], SchedulePageModule);

//# sourceMappingURL=schedule-page.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchedulePage = (function () {
    function SchedulePage(navCtrl, settings, modalCtrl, firebaseService, navParams, storage) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.modalCtrl = modalCtrl;
        this.firebaseService = firebaseService;
        this.navParams = navParams;
        this.storage = storage;
        this.settingsReady = false;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
    };
    SchedulePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('selectedLocation').then(function (val) {
            var selectedLocation = val;
            if (val == undefined) {
                console.log('No location selected');
            }
            else {
                _this.location = val.name;
            }
        });
        this.avatar = localStorage.getItem('img');
        var uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid);
    };
    SchedulePage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SchedulePage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    SchedulePage.prototype.getCourt = function () {
        this.navCtrl.push('FindACourtPage');
    };
    SchedulePage.prototype.seeMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    SchedulePage.prototype.setupGame = function () {
        this.firebaseService.setupGame();
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/schedule-page/schedule-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start class="avatarContainer" (click)="goToProfile()">\n        <img class="avatar" src="{{avatar}}" />\n    </button>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end (click)="seeMessages()">\n        <img class="navIcon messages" src="assets/img/icons-message.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content block>\n  <div padding>\n    <p class="scheduleIntro">Take control of the court and schedule your next game.</p>\n  </div>\n\n  <div>\n    <ion-list>\n      <ion-item>\n        <ion-label>when are you hoopin?</ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="gameDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>at what time?</ion-label>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="gameStart"></ion-datetime>\n      </ion-item>\n\n      <div padding (click)="getCourt()">\n        <button ion-button block class="secondaryButton">Find a Court</button>\n      </div>\n\n      <ion-item>\n        <ion-label>on what court?</ion-label>\n        <ion-input type="text" [(ngModel)]="location"></ion-input>\n      </ion-item>\n\n      <ion-item class="noBG private">\n        <ion-label>Private Game?</ion-label>\n        <ion-toggle [(ngModel)]="option1"></ion-toggle>\n      </ion-item>\n\n      <div padding>\n        <button ion-button block class="secondaryButton">Invite Friends</button>\n      </div>\n\n      <div padding>\n        <button ion-button block class="primaryButton" (click)="setupGame()">Let\'s Do It</button>\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/schedule-page/schedule-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], SchedulePage);

//# sourceMappingURL=schedule-page.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map