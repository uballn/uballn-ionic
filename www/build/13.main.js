webpackJsonp([13],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function() { return ConnectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_page__ = __webpack_require__(327);
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

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(112);
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
        this.storage.get('allUsers').then(function (val) {
            _this.users = val;
            _this.userData = [];
            for (var key in _this.users) {
                _this.userData.push(_this.users[key]);
            }
            _this.storage.set('userData', _this.userData);
        });
    }
    ConnectPage.prototype.ionViewDidLoad = function () {
    };
    ConnectPage.prototype.goToProfile = function (uid) {
        this.navCtrl.push('PlayerPage', uid);
    };
    ConnectPage.prototype.showContacts = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.secondaryButton').hide();
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.contactList').show();
    };
    return ConnectPage;
}());
ConnectPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-connect',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/connect-page/connect-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Connect</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div padding>\n        <ion-segment [(ngModel)]="connect">\n          <ion-segment-button value="friends">\n            Friends\n          </ion-segment-button>\n          <ion-segment-button value="suggested">\n            Suggested\n          </ion-segment-button>\n          <ion-segment-button value="contacts">\n            Contacts\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="connect">            \n        <ion-list *ngSwitchCase="\'friends\'">\n            <div class="playerContainer">\n              <p>Your Squad</p>\n              <div *ngFor="let friend of friends" class="playerLoop">\n                <div class="player" *ngIf="friend.squad == \'true\'">\n                  <span class="imgContainer squad" (click)="goToProfile(friend.uid)"><img [src]="friend.img" /></span>\n                </div>\n                </div>\n              </div> \n\n          <div *ngFor="let friend of friends">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-11>\n                  <button ion-item class="squad" (click)="goToProfile(friend.uid)">\n                    <span class="imgContainer"><img [src]="friend.img"/></span>{{ friend.username }}\n                  </button>\n                </ion-col>\n                <ion-col col-1>\n                    <div class="status squadStatus {{friend.squad}}"> </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'suggested\'">\n          <div *ngFor="let user of userData">\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-11>\n                    <button ion-item class="suggested" (click)="goToProfile(user.uid)">\n                      <span class="imgContainer"><img [src]="user.img"/></span>{{ user.username }}\n                    </button> \n                  </ion-col>\n                  <ion-col col-1>\n                      <div class="status friendStatus"></div>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n          </div>\n        </ion-list>\n\n         <ion-list *ngSwitchCase="\'contacts\'">\n           <button ion-button class="secondaryButton" (click)="showContacts()">Allow Access to Contacts</button>\n            <div *ngFor="let user of userData" class="contactList" style="display:none;">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col col-11>\n                        <button ion-item class="suggested" (click)="goToProfile(user.uid)">\n                          <span class="imgContainer"><img [src]="user.img"/></span>{{ user.username }}\n                        </button> \n                      </ion-col>\n                      <ion-col col-1>\n                          <div class="status friendStatus"></div>\n                      </ion-col>\n                    </ion-row>\n                </ion-grid>\n              </div>\n            </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/connect-page/connect-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ConnectPage);

//# sourceMappingURL=connect-page.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map