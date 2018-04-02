webpackJsonp([11],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function() { return ConnectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_page__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConnectPageModule = (function () {
    function ConnectPageModule() {
    }
    return ConnectPageModule;
}());
ConnectPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__connect_page__["a" /* ConnectPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__connect_page__["a" /* ConnectPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__connect_page__["a" /* ConnectPage */]
        ]
    })
], ConnectPageModule);

//# sourceMappingURL=connect-page.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectPage = (function () {
    function ConnectPage(navCtrl, storage, afd, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.afd = afd;
        this.navParams = navParams;
        this.connect = 'friends';
        this.storage.get('friendData').then(function (val) {
            _this.friends = val;
        });
        this.storage.get('userData').then(function (val) {
            _this.users = val;
            _this.userData = [];
            for (var key in _this.users) {
                _this.userData.push(_this.users[key]);
            }
        });
    }
    ConnectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectPage');
    };
    ConnectPage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    return ConnectPage;
}());
ConnectPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-connect',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/connect-page/connect-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Connect</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div padding>\n        <ion-segment [(ngModel)]="connect">\n          <ion-segment-button value="friends">\n            Friends\n          </ion-segment-button>\n          <ion-segment-button value="squad">\n            Squad\n          </ion-segment-button>\n          <ion-segment-button value="suggested">\n            Suggested\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="connect">\n        <ion-list *ngSwitchCase="\'friends\'">\n            <button ion-item *ngFor="let friend of friends" class="friends" (click)="goToProfile(friend.uid)">\n                <span class="imgWrapper"><img [src]="friend.img" /></span> {{ friend.username }}\n              </button>  \n        </ion-list>\n            \n        <ion-list *ngSwitchCase="\'squad\'">\n          <h5>Add up to 5 friends and get notified when each other hits the court.</h5>\n          <div *ngFor="let friend of friends" class="squad-{{friend.squad}}">\n            <button ion-item (click)="goToProfile(friend.uid)">\n                <span class="imgWrapper"><img [src]="friend.img" /></span>  {{ friend.username }}\n            </button>\n          </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'suggested\'">\n          <button ion-item *ngFor="let user of users" class="suggested" (click)="goToProfile(user.uid)">\n              <span class="imgWrapper"><img [src]="user.img" /></span>  {{ user.username }}\n          </button>  \n        </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/connect-page/connect-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ConnectPage);

//# sourceMappingURL=connect-page.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map