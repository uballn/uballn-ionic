webpackJsonp([13],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_page__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesPageModule = (function () {
    function MessagesPageModule() {
    }
    return MessagesPageModule;
}());
MessagesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__messages_page__["a" /* MessagesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages_page__["a" /* MessagesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__messages_page__["a" /* MessagesPage */]
        ]
    })
], MessagesPageModule);

//# sourceMappingURL=messages-page.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    MessagesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('MessageData').then(function (val) {
            _this.MessageData = val;
        });
    };
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
        // return this.afd.object('/users/' + this.user.uid+'/friends/'+uid).update({
        //   img: sessionStorage.getItem('CurrPlayer.img'),
        //   squad: 'false',
        //   uid: sessionStorage.getItem('CurrPlayer.uid'),
        //   username: sessionStorage.getItem('CurrPlayer.username')
        // })
    };
    MessagesPage.prototype.denyFriend = function (requestorName) {
        alert('No way ' + requestorName + '!');
    };
    MessagesPage.prototype.approveFriend = function (requestorName) {
        alert('Okay ' + requestorName + '!');
    };
    MessagesPage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/messages-page/messages-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let message of MessageData" class="{{message.read}}">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2 class="avatar">\n              <span (click)="goToProfile(message.requestorID)">\n                  <img [src]="message.avatar">\n              </span>          \n              </ion-col>\n              <ion-col col-8 class="message">\n                  <h5>{{message.header}}</h5>\n                  <p>{{message.message}}</p>\n              </ion-col>\n              <ion-col col-3 class="confirmation">\n                <span (click)="denyFriend(message.requestorName)"><img src="assets/img/icons-cancel.svg"/></span>\n                <span (click)="approveFriend(message.requestorName)"><img src="assets/img/icons-checkmark.svg"/></span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/messages-page/messages-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MessagesPage);

//# sourceMappingURL=messages-page.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map