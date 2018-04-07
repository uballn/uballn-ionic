webpackJsonp([6],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_page__ = __webpack_require__(340);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SchedulePage = SchedulePage_1 = (function () {
    function SchedulePage(navCtrl, settings, firebaseService, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.firebaseService = firebaseService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SchedulePage_1;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    SchedulePage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            option1: [this.options.option1],
            timeStarts: [],
            timeEnds: []
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SchedulePage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SchedulePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.avatar = localStorage.getItem('img');
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        // this.translate.get(this.pageTitleKey).subscribe((res) => {
        //   this.pageTitle = res;
        // })
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
        var uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid);
    };
    SchedulePage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    SchedulePage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    SchedulePage.prototype.seeMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    return SchedulePage;
}());
SchedulePage = SchedulePage_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/schedule-page/schedule-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goToProfile()">\n      <img class="avatar" src="{{avatar}}" />\n    </button>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end (click)="seeMessages()">\n        <img class="navIcon messages" src="assets/img/icons-message.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content block>\n  <div padding>\n    <p class="scheduleIntro">Take control of the court and schedule your next game.</p>\n  </div>\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n    <ion-list *ngIf="page == \'main\'">\n      <ion-item>\n        <ion-label>when are you hoopin?</ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" formControlName="timeEnds"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>at what time?</ion-label>\n        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" formControlName="timeStarts"></ion-datetime>\n      </ion-item>\n\n      <!-- <div padding>\n        <button ion-button block class="secondaryButton">Add a location</button>\n      </div> -->\n\n      <ion-item>\n        <ion-label>on what court?</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item class="noBG private">\n        <ion-label>Private Game?</ion-label>\n        <ion-toggle formControlName="option1"></ion-toggle>\n      </ion-item>\n\n      <div padding>\n        <button ion-button block class="secondaryButton">Invite Friends</button>\n      </div>\n\n      <div padding>\n        <button ion-button block class="primaryButton">Let\'s Do It</button>\n      </div>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/schedule-page/schedule-page.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Settings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _e || Object])
], SchedulePage);

var SchedulePage_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=schedule-page.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map