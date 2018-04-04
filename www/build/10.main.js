webpackJsonp([10],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function() { return PlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_page__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayerPageModule = (function () {
    function PlayerPageModule() {
    }
    return PlayerPageModule;
}());
PlayerPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__player_page__["a" /* PlayerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player_page__["a" /* PlayerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__player_page__["a" /* PlayerPage */]
        ]
    })
], PlayerPageModule);

//# sourceMappingURL=player-page.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(221);
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






var PlayerPage = (function () {
    function PlayerPage(navCtrl, firebaseService, afd, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.afd = afd;
        this.navParams = navParams;
        this.storage = storage;
        this.playerID = this.navParams.data;
        this.playerIMG;
        if (localStorage.getItem('gender') == 'male') {
            this.playerGender = 'M';
        }
        else {
            this.playerGender = 'F';
        }
        this.afd.list('/users/' + this.playerID, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                sessionStorage.setItem('CurrPlayer.' + snapshot.key, snapshot.val());
            });
            _this.playerName = sessionStorage.getItem('CurrPlayer.username');
            _this.playerExperience = sessionStorage.getItem('CurrPlayer.experience');
            _this.playerHeight = sessionStorage.getItem('CurrPlayer.height');
            _this.playerWeight = sessionStorage.getItem('CurrPlayer.weight');
            _this.playerIMG = sessionStorage.getItem('CurrPlayer.img');
            _this.playerAge = sessionStorage.getItem('CurrPlayer.ageCount');
            _this.playerPlayed = sessionStorage.getItem('CurrPlayer.played');
            _this.playerPoints = '300';
        });
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('myFriends').then(function (val) {
            var myFriends = val;
            if (_this.playerID == localStorage.getItem('uid')) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#friendButton').css('display', 'none');
            }
            else {
                for (var key in myFriends) {
                    if (key === _this.playerID) {
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('#friendButton').addClass('trueFriends');
                        __WEBPACK_IMPORTED_MODULE_5_jquery__('#friendButton').html('Unfriend');
                    }
                }
            }
        });
    };
    PlayerPage.prototype.ionViewDidLeave = function () {
        var uid = localStorage.getItem('uid');
        sessionStorage.clear();
        this.firebaseService.updateFriends(uid);
    };
    PlayerPage.prototype.addRemoveFriend = function () {
        var uid = sessionStorage.getItem('CurrPlayer.uid');
        this.firebaseService.addRemoveFriend(uid);
    };
    return PlayerPage;
}());
PlayerPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-player',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/player-page/player-page.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Player Profile\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="bgImage">\n    <div class="profileBG"></div>\n    <div class="imageContainer">\n        <img [src]="playerIMG" />\n      </div>\n        \n    <h2><ion-input class="playerName" [(ngModel)]="playerName" disabled></ion-input></h2>\n  \n      <ion-grid class="playerDetailPrimary">\n          <ion-row>\n              <ion-col col-4>\n                  <img class="icon lightning" src="assets/img/icons-lightning.svg"/>\n                  <ion-input class="points" [(ngModel)]="playerPoints" disabled></ion-input>\n              </ion-col>\n              <ion-col col-4 class="middle">\n                <ion-input [(ngModel)]="playerPlayed" disabled></ion-input>\n              </ion-col>\n            <ion-col col-4>\n                <ion-input class="experience" [(ngModel)]="playerExperience" disabled></ion-input>\n                <img class="icon chart" src="assets/img/icons-chart.svg"/>\n              </ion-col>\n              </ion-row>\n        </ion-grid>\n  \n  \n      <ion-grid class="playerPageDetails">\n          <ion-row>\n              <ion-col col-3>\n                  Age\n                  <ion-input [(ngModel)]="playerAge" disabled></ion-input>\n              </ion-col>\n              <ion-col col-3>\n              Height\n                <ion-input [(ngModel)]="playerHeight" disabled></ion-input>\n              </ion-col>\n            <ion-col col-3>\n              Weight\n                <ion-input [(ngModel)]="playerWeight" disabled></ion-input>\n              </ion-col>\n            <ion-col col-3 class="sex">\n                Sex\n                  <ion-input [(ngModel)]="playerGender" disabled></ion-input>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <div class="buttonContainer">\n          <button ion-button id="friendButton" class="secondaryButton" full (click)="addRemoveFriend()">Add Friend</button>\n        </div>\n  \n  </ion-content>          '/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/player-page/player-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PlayerPage);

//# sourceMappingURL=player-page.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map