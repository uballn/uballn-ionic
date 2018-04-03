webpackJsonp([1],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_page__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile-page.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(navCtrl, firebaseService, afd, storage, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.afd = afd;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.storage.get('myFriends').then(function (val) {
            _this.friends = val;
            _this.friendData = [];
            for (var key in _this.friends) {
                _this.friendData.push(_this.friends[key]);
            }
            _this.friendNum = _this.friendData.length;
            _this.storage.set('friendData', _this.friendData);
            if (_this.friendNum < 4) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('.playerContainer.more').hide();
            }
            _this.storage.set('userData', _this.userData);
        });
        this.afd.list('/users', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.userData = [];
            snapshots.forEach(function (snapshot) {
                _this.userData.push(snapshot.val());
            });
            _this.storage.set('userData', _this.userData);
        });
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.uid = localStorage.getItem('uid');
        this.afd.list('/users/' + this.uid, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                localStorage.setItem(snapshot.key, snapshot.val());
                if (snapshot.key === 'friends') {
                    _this.storage.set('myFriends', snapshot.val());
                }
            });
        });
        this.allUsers = [];
        this.afd.list('/users', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.allUsers.push(snapshot.val());
            });
            _this.storage.set('allUsers', _this.allUsers);
        });
        if (localStorage.getItem('gender') === 'male') {
            this.gender = 'M';
        }
        else {
            this.gender = 'F';
        }
        this.name = localStorage.getItem('name');
        this.birthday = localStorage.getItem('birthday');
        this.experience = localStorage.getItem('experience');
        this.height = localStorage.getItem('height');
        this.weight = localStorage.getItem('weight');
        this.updateUserIMG = localStorage.getItem('img');
        this.age = localStorage.getItem('ageCount');
        this.played = localStorage.getItem('played');
        this.experienceNumber = localStorage.getItem('experience');
        this.points = '300';
    };
    ProfilePage.prototype.updateUser = function () {
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
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ProfilePage.prototype.accepInvitation = function (invitation) {
        var _this = this;
        this.firebaseService.acceptInvitation(invitation).then(function () {
            _this.presentToast('Invitation accepted!');
        });
    };
    ProfilePage.prototype.discardInvitation = function (invitationId) {
        this.firebaseService.discardInvitation(invitationId);
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.firebaseService.logoutUser().then(function () {
            localStorage.clear();
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push('ProfileSettingsPage');
    };
    ProfilePage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    ProfilePage.prototype.goToConnect = function () {
        this.navCtrl.push('ConnectPage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-profile-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/profile-page/profile-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Profile\n    </ion-title>\n    <button class="score" ion-button end (click)="goToSettings()">\n     <img class="navIcon" src="assets/img/icons-gear.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bgImage">\n  <div class="profileBG"></div>\n  <div class="imageContainer">\n    <img src="{{updateUserIMG}}" />\n  </div>\n\n  <h2><ion-input class="playerName" [(ngModel)]="name" disabled></ion-input></h2>\n\n    <ion-grid class="playerDetailPrimary">\n        <ion-row>\n            <ion-col col-4>\n                <img class="icon lightning" src="assets/img/icons-lightning.svg"/>\n                <ion-input class="points" [(ngModel)]="points" disabled></ion-input>\n            </ion-col>\n            <ion-col col-4 class="middle">\n              <ion-input [(ngModel)]="played" disabled></ion-input>\n            </ion-col>\n          <ion-col col-4>\n              <ion-input class="experience" [(ngModel)]="experience" disabled></ion-input>\n              <img class="icon chart" src="assets/img/icons-chart.svg"/>\n            </ion-col>\n            </ion-row>\n      </ion-grid>\n\n\n    <ion-grid class="playerPageDetails">\n        <ion-row>\n            <ion-col col-3>\n                Age <ion-input [(ngModel)]="age" disabled></ion-input>\n            </ion-col>\n            <ion-col col-3>\n            Height <ion-input [(ngModel)]="height" disabled></ion-input>\n            </ion-col>\n          <ion-col col-3>\n            Weight <ion-input [(ngModel)]="weight" disabled></ion-input>\n            </ion-col>\n          <ion-col col-3 class="sex">\n              Sex <ion-input [(ngModel)]="gender" disabled></ion-input>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    \n      <ion-list class="players" style="background-color: none;">\n        <h5 (click)="goToConnect()">Friends ({{friendNum}})</h5>\n        <div class="playerContainer">\n          <div class="player" *ngFor="let friend of friendData| slice:0:4" id="squad-{{friend.squad}}">\n            <span class="imgContainer" (click)="goToProfile(friend.uid)"><img [src]="friend.img" /></span>\n          </div>\n          <div class="player more" id="squad-false" (click)="goToConnect()">\n            <img src="assets/img/icons-more.svg"/>\n          </div>\n        </div>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/profile-page/profile-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], ProfilePage);

//# sourceMappingURL=profile-page.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map