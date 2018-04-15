webpackJsonp([1],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_page__ = __webpack_require__(341);
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(112);
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
    function MessagesPage(navCtrl, navParams, afd, firebaseService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afd = afd;
        this.firebaseService = firebaseService;
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
    };
    // FRIEND REQUESTS /////////////////////////
    MessagesPage.prototype.declineFriend = function (messageID) {
        this.myID = localStorage.getItem('uid');
        this.afd.object('/users/' + this.myID + '/friends/' + messageID).update({
            read: 'true',
            response: 'declined'
        });
    };
    MessagesPage.prototype.approveFriend = function (requestorID, messageID) {
        this.firebaseService.getRequestor(requestorID);
        this.myID = localStorage.getItem('uid');
        this.afd.object('/users/' + this.myID + '/friends/' + requestorID).update({
            img: sessionStorage.getItem('requestor-img'),
            squad: 'false',
            uid: sessionStorage.getItem('requestor-uid'),
            username: sessionStorage.getItem('requestor-username')
        });
        this.afd.object('/users/' + requestorID + '/friends/' + this.myID).update({
            img: localStorage.getItem('img'),
            squad: 'false',
            uid: localStorage.getItem('uid'),
            username: localStorage.getItem('username')
        });
        this.afd.object('/users/' + this.myID + '/messages/' + messageID).update({
            response: 'accepted',
            read: 'true'
        });
    };
    // SQUAD REQUESTS /////////////////////////
    MessagesPage.prototype.declineSquad = function (messageID) {
        this.myID = localStorage.getItem('uid');
        this.afd.object('/users/' + this.myID + '/friends/' + messageID).update({
            read: 'true',
            response: 'declined'
        });
    };
    MessagesPage.prototype.approveSquad = function (requestorID, messageID) {
        this.firebaseService.getRequestor(requestorID);
        this.myID = localStorage.getItem('uid');
        this.afd.object('/users/' + this.myID + '/friends/' + requestorID).update({
            squad: 'true'
        });
        this.afd.object('/users/' + requestorID + '/friends/' + this.myID).update({
            squad: 'true'
        });
        this.afd.object('/users/' + this.myID + '/messages/' + messageID).update({
            response: 'accepted',
            read: 'true'
        });
    };
    // GO TO PROFILE /////////////////////////
    MessagesPage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/messages-page/messages-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n        <!-- Friend Requests -->\n        <div *ngFor="let message of MessageData" class="{{message.read}}">\n        <ion-item *ngIf="message.type === \'friendRequest\'" class="{{message.read}}">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-2 class="avatar">\n              <span (click)="goToProfile(message.requestorID)">\n                  <img [src]="message.avatar">\n              </span>          \n              </ion-col>\n              <ion-col col-8 class="message">\n                  <h5>{{message.header}}</h5>\n                  <p>{{message.message}}</p>\n              </ion-col>\n\n              <ion-col col-3 class="confirmation" *ngIf="message.read === \'false\'">\n                <span><img (click)="declineFriend(message.messageID)" src="assets/img/icons-cancel.svg"/></span>\n                <span><img (click)="approveFriend(message.requestorID, message.messageID)" src="assets/img/icons-checkmark.svg"/></span>\n              </ion-col>\n\n              <ion-col col-3 class="confirmation" *ngIf="message.read === \'true\'">\n                <p class="response">{{message.response}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        </div>\n\n          <!-- Squad Requests -->\n        <div *ngFor="let message of MessageData" class="{{message.read}}">\n          <ion-item *ngIf="message.type === \'squadRequest\'" class="{{message.read}}">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-2 class="avatar">\n                <span (click)="goToProfile(message.requestorID)">\n                    <img [src]="message.avatar">\n                </span>          \n                </ion-col>\n                <ion-col col-8 class="message">\n                    <h5>{{message.header}}</h5>\n                    <p>{{message.message}}</p>\n                </ion-col>\n\n                <ion-col col-3 class="confirmation" *ngIf="message.read === \'false\'">\n                    <span><img (click)="declineSquad(message.messageID)" src="assets/img/icons-cancel.svg"/></span>\n                    <span><img (click)="approveSquad(message.requestorID, message.messageID)" src="assets/img/icons-checkmark.svg"/></span>\n                </ion-col>\n\n                <ion-col col-3 class="confirmation" *ngIf="message.read === \'true\'">\n                    <p class="response">{{message.response}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          </div>\n\n      </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/messages-page/messages-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], MessagesPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=messages-page.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map