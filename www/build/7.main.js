webpackJsonp([7],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupProfilePageModule", function() { return SetupProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_profile_page__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetupProfilePageModule = (function () {
    function SetupProfilePageModule() {
    }
    return SetupProfilePageModule;
}());
SetupProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__setup_profile_page__["a" /* SetupProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setup_profile_page__["a" /* SetupProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__setup_profile_page__["a" /* SetupProfilePage */]
        ]
    })
], SetupProfilePageModule);

//# sourceMappingURL=setup-profile-page.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetupProfilePage = (function () {
    function SetupProfilePage(navCtrl, firebaseService, toastCtrl, modalCtrl, storage, camera) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.camera = camera;
        localStorage.setItem('img', 'https://firebasestorage.googleapis.com/v0/b/uballn-basketball-2f8d6.appspot.com/o/profileImage%2FB47978EC-4286-4179-AA88-116C362C9176?alt=media&token=30b65ab3-70ec-4426-9e5f-838be4f2602b');
        this.updateUserIMG = localStorage.getItem('img');
    }
    SetupProfilePage.prototype.ionViewWillEnter = function () {
    };
    SetupProfilePage.prototype.ionViewWillLeave = function () {
        this.uid = localStorage.getItem('uid');
        this.firebaseService.welcomeMessage(this.uid);
    };
    SetupProfilePage.prototype.updateUser = function () {
        var _this = this;
        if (this.name === undefined || this.height === undefined || this.weight === undefined || this.experience === undefined || this.gender === undefined || this.birthday === undefined) {
            var toast = this.toastCtrl.create({
                message: 'Oops! All fields required.',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        }
        else {
            localStorage.setItem('name', this.name);
            localStorage.setItem('height', this.height);
            localStorage.setItem('weight', this.weight);
            localStorage.setItem('experience', this.experience);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('birthday', this.birthday);
            localStorage.setItem('setupNeeded', 'false');
            this.firebaseService.updateUserProfile()
                .then(function () {
                _this.navCtrl.setRoot('TabsPage');
            });
        }
    };
    SetupProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    SetupProfilePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 500,
                targetHeight: 500,
                encodingType: this.camera.EncodingType.JPEG,
                correctOrientation: true
            }).then(function (data) {
                _this.storage.set('profilePic', data);
                localStorage.setItem('img', 'data:image/png;base64,' + data);
                _this.updateUserIMG = 'data:image/png;base64,' + data;
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    SetupProfilePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.updateUserIMG = imageData;
            localStorage.setItem('img', imageData);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    return SetupProfilePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], SetupProfilePage.prototype, "fileInput", void 0);
SetupProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-setup-profile',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic/src/pages/setup-profile-page/setup-profile-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Setup Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="disabled">\n  <div class="profileInputs">\n    \n      <div class="imageContainer profilePhoto" (click)="getPicture()">\n          <img src="{{updateUserIMG}}" />\n          <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n        </div>\n        <p class="editPhoto">Tap to Edit Photo</p>\n        <p style="margin: 20px auto; text-align: center;">Please complete your player profile to enhance your game experience.</p>\n\n    <ion-item>\n      <ion-label>Nickname</ion-label>\n      <ion-input [(ngModel)]="name" class="name" type="text">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Birthdate</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="birthday"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="level">Experience</ion-label>\n      <ion-select [(ngModel)]="experience" interface="action-sheet">\n        <ion-option value="1">Recreational</ion-option>\n        <ion-option value="2">High School</ion-option>\n        <ion-option value="3">AAU/Club</ion-option>\n        <ion-option value="4">Collegiate</ion-option>\n        <ion-option value="5">Semi-Pro</ion-option>\n        <ion-option value="6">Professional</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender" interface="action-sheet">\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Height</ion-label>\n      <ion-select [(ngModel)]="height" interface="action-sheet">\n        <ion-option value="5\'1">5\'1"</ion-option>\n        <ion-option value="5\'2">5\'2"</ion-option>\n        <ion-option value="5\'3">5\'3"</ion-option>\n        <ion-option value="5\'4">5\'4"</ion-option>\n        <ion-option value="5\'5">5\'5"</ion-option>\n        <ion-option value="5\'6">5\'6"</ion-option>\n        <ion-option value="5\'7">5\'7"</ion-option>\n        <ion-option value="5\'8">5\'8"</ion-option>\n        <ion-option value="5\'9">5\'9"</ion-option>\n        <ion-option value="5\'10">5\'10"</ion-option>\n        <ion-option value="5\'11" checked="true">5\'11"</ion-option>\n        <ion-option value="6\'0">6\'0"</ion-option>\n        <ion-option value="6\'1">6\'1"</ion-option>\n        <ion-option value="6\'2">6\'2"</ion-option>\n        <ion-option value="6\'3">6\'3"</ion-option>\n        <ion-option value="6\'4">6\'4"</ion-option>\n        <ion-option value="6\'5">6\'5"</ion-option>\n        <ion-option value="6\'6">6\'6"</ion-option>\n        <ion-option value="6\'7">6\'7"</ion-option>\n        <ion-option value="6\'8">6\'8"</ion-option>\n        <ion-option value="6\'9">6\'9"</ion-option>\n        <ion-option value="6\'10">6\'10"</ion-option>\n        <ion-option value="6\'11">6\'11"</ion-option>\n        <ion-option value="7\'0">7\'0"</ion-option>\n        <ion-option value="7\'1">7\'1"</ion-option>\n        <ion-option value="7\'2">7\'2"</ion-option>\n        <ion-option value="7\'3">7\'3"</ion-option>\n        <ion-option value="7\'4">7\'4"</ion-option>\n        <ion-option value="7\'5">7\'5"</ion-option>\n        <ion-option value="7\'6">7\'6"</ion-option>\n        <ion-option value="7\'7">7\'7"</ion-option>\n        <ion-option value="7\'8">7\'8"</ion-option>\n        <ion-option value="7\'9">7\'9"</ion-option>\n        <ion-option value="7\'10">7\'10"</ion-option>\n        <ion-option value="7\'11">7\'11"</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Weight</ion-label>\n      <ion-input class="weight" style="float:right;" type="tel" [(ngModel)]="weight"></ion-input>\n    </ion-item>\n  </div>\n\n  <button ion-button block class="primaryButton" (click)="updateUser()" padding>\n      Setup Profile\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic/src/pages/setup-profile-page/setup-profile-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        Storage,
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], SetupProfilePage);

//# sourceMappingURL=setup-profile-page.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map