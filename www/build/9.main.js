webpackJsonp([9],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickPlayPageModule", function() { return QuickPlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quickplay_page__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuickPlayPageModule = (function () {
    function QuickPlayPageModule() {
    }
    return QuickPlayPageModule;
}());
QuickPlayPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quickplay_page__["a" /* QuickPlayPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quickplay_page__["a" /* QuickPlayPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__quickplay_page__["a" /* QuickPlayPage */]
        ]
    })
], QuickPlayPageModule);

//# sourceMappingURL=quickplay-page.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickPlayPage; });
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



var QuickPlayPage = (function () {
    function QuickPlayPage(navCtrl, firebaseService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.editMode = false;
    }
    QuickPlayPage.prototype.ionViewDidLoad = function () {
        this.gameLists = this.firebaseService.getGames();
        console.log(this.gameLists);
    };
    QuickPlayPage.prototype.ionViewWillEnter = function () {
        this.avatar = localStorage.getItem('img');
        var uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid);
    };
    QuickPlayPage.prototype.removeList = function (id) {
        this.firebaseService.removeList(id);
    };
    QuickPlayPage.prototype.removeItem = function (itemId, listId) {
        this.firebaseService.removegameItem(listId, itemId);
    };
    QuickPlayPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    QuickPlayPage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    QuickPlayPage.prototype.openGame = function (game) {
        this.navCtrl.push('GamePage', game);
    };
    QuickPlayPage.prototype.seeMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    return QuickPlayPage;
}());
QuickPlayPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-quickplay-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/quickplay-page/quickPlay-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start class="avatarContainer" (click)="goToProfile()">\n      <img class="avatar" src="{{avatar}}" />\n    </button>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end (click)="seeMessages()">\n        <img class="navIcon messages" src="assets/img/icons-message.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="gameContainer" *ngFor="let game of gameLists | async" (click)="openGame(game)">\n    <span class="gameBG" [style.backgroundImage]="\'url(\' + game.img + \')\'"></span>\n    <ion-list-header>\n      <h2>{{ game.name }}</h2>\n      <button ion-button item-left clear color="danger" icon-only (click)="removeList(game.$key)" *ngIf="editMode"><ion-icon name="remove-circle"></ion-icon></button>\n    </ion-list-header>\n    <ion-item>\n      <ul class="gameDetails">\n        <li><span><img [src]="game.creatorIMG" class="creator"/></span></li>\n        <li><span><img src="assets/img/icons-players.svg"/></span> {{ game.stats.playerTotal }}</li>\n        <li><span><img src="assets/img/icons-id.svg"/></span> {{ game.stats.avgAge }}</li>\n        <li><span><img src="assets/img/icons-chart.svg"/></span> {{ game.stats.avgExp }}</li>\n      </ul>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-fab right bottom padding>\n    <button ion-fab (click)="newList()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/quickplay-page/quickPlay-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
], QuickPlayPage);

var _a, _b, _c, _d;
//# sourceMappingURL=quickplay-page.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map