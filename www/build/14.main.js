webpackJsonp([14],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPageModule", function() { return InviteFriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_friends_page__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InviteFriendsPageModule = (function () {
    function InviteFriendsPageModule() {
    }
    return InviteFriendsPageModule;
}());
InviteFriendsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invite_friends_page__["a" /* InviteFriendsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invite_friends_page__["a" /* InviteFriendsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__invite_friends_page__["a" /* InviteFriendsPage */]
        ]
    })
], InviteFriendsPageModule);

//# sourceMappingURL=invite-friends-page.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InviteFriendsPage = (function () {
    function InviteFriendsPage(navCtrl, afd, navParams, storage) {
        this.navCtrl = navCtrl;
        this.afd = afd;
        this.navParams = navParams;
        this.storage = storage;
        this.searchQuery = '';
        this.initializeItems();
    }
    InviteFriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindACourtPage');
    };
    InviteFriendsPage.prototype.ionViewWillEnter = function () {
        this.storage.set('selectedLocation', null);
    };
    InviteFriendsPage.prototype.initializeItems = function () {
        var _this = this;
        this.storage.get('friendData').then(function (val) {
            _this.friends = val;
            console.log(_this.friends);
        });
    };
    InviteFriendsPage.prototype.findFriend = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.friends = this.friends.filter(function (friend) {
                return (friend.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    InviteFriendsPage.prototype.inviteFriend = function (friend) {
        alert('You invited ' + friend.username + '!');
    };
    InviteFriendsPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return InviteFriendsPage;
}());
InviteFriendsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-invite-friends',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/invite-friends-page/invite-friends-page.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n        Invite Friends\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-searchbar (ionInput)="findFriend($event)" placeholder="Search By Name"></ion-searchbar>\n    <ion-list>\n      <button ion-item *ngFor="let friend of friends" (click)="inviteFriend(friend)">\n        <ion-avatar item-start>\n          <img [src]="friend.img" />\n        </ion-avatar>\n        <h2>{{friend.username}}</h2>\n      </button>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/invite-friends-page/invite-friends-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], InviteFriendsPage);

var _a, _b, _c, _d;
//# sourceMappingURL=invite-friends-page.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map