webpackJsonp([12],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_page__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GamePageModule = (function () {
    function GamePageModule() {
    }
    return GamePageModule;
}());
GamePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__game_page__["a" /* GamePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game_page__["a" /* GamePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__game_page__["a" /* GamePage */]
        ]
    })
], GamePageModule);

//# sourceMappingURL=game-page.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePage = (function () {
    function GamePage(navCtrl, navParams, firebaseService, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.gameData = [];
        this.players = [];
        this.playerData = [];
        this.gameData = this.navParams;
        this.gameID = this.navParams.data.$key;
        this.players = this.gameData.data.players;
        this.updateGame();
        sessionStorage.setItem('gameID', this.gameID);
    }
    GamePage.prototype.ionViewWillEnter = function () {
        if (sessionStorage.getItem('playing') === 'true') {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#joinGame').css('display', 'none');
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#leaveGame').css('display', 'block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#joinGame').css('display', 'block');
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#leaveGame').css('display', 'none');
        }
    };
    GamePage.prototype.updateGame = function () {
        this.playerData = [];
        for (var key in this.players) {
            if (key === localStorage.getItem('uid')) {
                sessionStorage.setItem('playing', 'true');
            }
            else {
                //do nothing
            }
            this.playerData.push(this.players[key]);
        }
    };
    GamePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    GamePage.prototype.joinGame = function () {
        var _this = this;
        sessionStorage.setItem('placeID', this.gameID);
        this.firebaseService.joinGame(this.gameID).then(function () {
            _this.presentToast('You have joined the game!');
        });
        this.navCtrl.pop();
    };
    GamePage.prototype.leaveGame = function () {
        var _this = this;
        sessionStorage.setItem('placeID', this.gameID);
        this.firebaseService.leaveGame(this.gameID).then(function () {
            _this.presentToast('You have left the game!');
        });
        this.navCtrl.pop();
    };
    GamePage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    return GamePage;
}());
GamePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-game',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/game-page/game-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end>\n        <img class="navIcon" src="assets/img/icons-share.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="gameBG" [style.backgroundImage]="\'url(\' + gameData.data.img + \')\'"></div>\n    <div class="btmGradient"></div>\n    <div class="gameDetails">\n      <h3>{{gameData.data.name}}</h3>\n      <h5>{{gameData.data.address}}</h5>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4><span><img src="assets/img/icons-players.svg"/></span>Number of <br>Players\n            <span class="data">{{gameData.data.stats.playerTotal}}</span></ion-col>\n          <ion-col col-4><span><img src="assets/img/icons-id.svg"/></span>Average <br>Age\n            <span class="data">{{gameData.data.stats.avgAge}}</span></ion-col>\n          <ion-col col-4><span><img src="assets/img/icons-chart.svg"/></span>Level of <br>Play\n            <span class="data">{{gameData.data.stats.avgExp}}</span></ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-list class="players" style="background-color: none;">\n        <h5>Active Players</h5>\n        <div class="player" *ngFor="let player of playerData" (click)="goToProfile(player.uid)">\n          <!-- <ion-icon name="contact"></ion-icon> -->\n          <img class="gameAvatar" src="{{player.img}}" />\n        </div>\n      </ion-list>\n    </div>\n    <button ion-button block id="joinGame" class="primaryButton" (click)="joinGame()">Join Game</button>\n    <button ion-button block id="leaveGame" class="secondaryButton" (click)="leaveGame()">Leave Game</button>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/game-page/game-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], GamePage);

//# sourceMappingURL=game-page.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map