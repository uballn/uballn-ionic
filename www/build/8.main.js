webpackJsonp([8],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsPageModule", function() { return ProfileSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_settings_page__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileSettingsPageModule = (function () {
    function ProfileSettingsPageModule() {
    }
    return ProfileSettingsPageModule;
}());
ProfileSettingsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_settings_page__["a" /* ProfileSettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_settings_page__["a" /* ProfileSettingsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_settings_page__["a" /* ProfileSettingsPage */]
        ]
    })
], ProfileSettingsPageModule);

//# sourceMappingURL=profile-settings-page.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileSettingsPage = (function () {
    function ProfileSettingsPage(navCtrl, firebaseService, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.name = localStorage.getItem('name');
        this.birthday = localStorage.getItem('birthday');
        this.experience = localStorage.getItem('experience');
        this.gender = localStorage.getItem('gender');
        this.height = localStorage.getItem('height');
        this.weight = localStorage.getItem('weight');
        this.updateUserIMG = localStorage.getItem('img');
    }
    ProfileSettingsPage.prototype.ionViewWillEnter = function () {
    };
    ProfileSettingsPage.prototype.ionViewWillLeave = function () {
        this.updateUser();
    };
    ProfileSettingsPage.prototype.updateUser = function () {
        var _this = this;
        localStorage.setItem('name', this.name);
        localStorage.setItem('height', this.height);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('experience', this.experience);
        localStorage.setItem('gender', this.gender);
        localStorage.setItem('birthday', this.birthday);
        this.firebaseService.updateUserProfile().then(function () {
            _this.presentToast('Profile Updated!');
        });
    };
    ProfileSettingsPage.prototype.showVersionInfo = function () {
        var modal = this.modalCtrl.create('AboutVersionPage');
        modal.present();
    };
    ProfileSettingsPage.prototype.showPrivacyPolicy = function () {
        var modal = this.modalCtrl.create('PolicyPage');
        modal.present();
    };
    ProfileSettingsPage.prototype.showTerms = function () {
        var modal = this.modalCtrl.create('TermsPage');
        modal.present();
    };
    ProfileSettingsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ProfileSettingsPage.prototype.accepInvitation = function (invitation) {
        var _this = this;
        this.firebaseService.acceptInvitation(invitation).then(function () {
            _this.presentToast('Invitation accepted!');
        });
    };
    ProfileSettingsPage.prototype.discardInvitation = function (invitationId) {
        this.firebaseService.discardInvitation(invitationId);
    };
    ProfileSettingsPage.prototype.logOut = function () {
        var _this = this;
        this.firebaseService.logoutUser().then(function () {
            localStorage.clear();
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    return ProfileSettingsPage;
}());
ProfileSettingsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-profile-settings',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/profile-settings-page/profile-settings-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="disabled">\n  <div class="profileInputs">\n    <ion-item>\n      <ion-label>Nickname</ion-label>\n      <ion-input [(ngModel)]="name" class="name" type="text">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Birthdate</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="birthday"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="level">Experience</ion-label>\n      <ion-select [(ngModel)]="experience" interface="action-sheet">\n        <ion-option value="1">Recreational</ion-option>\n        <ion-option value="2">High School</ion-option>\n        <ion-option value="3">AAU/Club</ion-option>\n        <ion-option value="4">Collegiate</ion-option>\n        <ion-option value="5">Semi-Pro</ion-option>\n        <ion-option value="6">Professional</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender" interface="action-sheet">\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Height</ion-label>\n      <ion-select [(ngModel)]="height" interface="action-sheet">\n        <ion-option value="5\'1">5\'1"</ion-option>\n        <ion-option value="5\'2">5\'2"</ion-option>\n        <ion-option value="5\'3">5\'3"</ion-option>\n        <ion-option value="5\'4">5\'4"</ion-option>\n        <ion-option value="5\'5">5\'5"</ion-option>\n        <ion-option value="5\'6">5\'6"</ion-option>\n        <ion-option value="5\'7">5\'7"</ion-option>\n        <ion-option value="5\'8">5\'8"</ion-option>\n        <ion-option value="5\'9">5\'9"</ion-option>\n        <ion-option value="5\'10">5\'10"</ion-option>\n        <ion-option value="5\'11" checked="true">5\'11"</ion-option>\n        <ion-option value="6\'0">6\'0"</ion-option>\n        <ion-option value="6\'1">6\'1"</ion-option>\n        <ion-option value="6\'2">6\'2"</ion-option>\n        <ion-option value="6\'3">6\'3"</ion-option>\n        <ion-option value="6\'4">6\'4"</ion-option>\n        <ion-option value="6\'6">6\'6"</ion-option>\n        <ion-option value="6\'5">6\'5"</ion-option>\n        <ion-option value="6\'7">6\'7"</ion-option>\n        <ion-option value="6\'8">6\'8"</ion-option>\n        <ion-option value="6\'9">6\'9"</ion-option>\n        <ion-option value="6\'10">5\'10"</ion-option>\n        <ion-option value="6\'11">6\'11"</ion-option>\n        <ion-option value="7\'0">7\'0"</ion-option>\n        <ion-option value="7\'1">7\'1"</ion-option>\n        <ion-option value="7\'2">7\'2"</ion-option>\n        <ion-option value="7\'3">7\'3"</ion-option>\n        <ion-option value="7\'4">7\'4"</ion-option>\n        <ion-option value="7\'5">7\'5"</ion-option>\n        <ion-option value="7\'6">7\'6"</ion-option>\n        <ion-option value="7\'7">7\'7"</ion-option>\n        <ion-option value="7\'8">7\'8"</ion-option>\n        <ion-option value="7\'9">7\'9"</ion-option>\n        <ion-option value="7\'10">7\'10"</ion-option>\n        <ion-option value="7\'11">7\'11"</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Weight</ion-label>\n      <ion-input class="weight" style="float:right;" type="tel" [(ngModel)]="weight"></ion-input>\n    </ion-item>\n  </div>\n  <ion-list class="appInfo">\n    <button ion-item (click)="showTerms()">Terms of Use</button>  \n    <button ion-item (click)="showPrivacyPolicy()">Privacy Policy</button>  \n    <button ion-item>Contact Us</button>  \n    <button ion-item (click)="showVersionInfo()">About this Version</button>\n  </ion-list>\n\n  <!-- <button ion-button block class="primaryButton" (click)="updateUser()" padding>\n      Update Profile\n    </button> -->\n\n    <button ion-button block class="logout secondaryButton" (click)="logOut()" padding outline>Logout</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/profile-settings-page/profile-settings-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */]])
], ProfileSettingsPage);

//# sourceMappingURL=profile-settings-page.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map