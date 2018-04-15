webpackJsonp([17],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function() { return ConnectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_page__ = __webpack_require__(334);
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

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(112);
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





// import { Contacts, ContactFieldType, ContactFindOptions } from 'ionic-native';

var ConnectPage = (function () {
    // contactlist: any;
    function ConnectPage(navCtrl, storage, afd, navParams, FirebaseService, platform) {
        //   this.platform.ready().then(() => {
        //     var opts = {   
        //        filter : "M",                                
        //        multiple: true,        
        //        hasPhoneNumber:true,                             
        //        fields:  [ 'name.givenName' ]
        //      };
        //      Contacts.find([ 'displayName', 'name' ],opts).then((contacts) => {
        //       alert('Found ' + contacts.length + ' contacts.');
        //        this.contactlist=contacts;
        //        console.log(this.contactlist);
        //      }, (error) => {
        //        console.log(error);
        //      })
        //  })
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.afd = afd;
        this.navParams = navParams;
        this.FirebaseService = FirebaseService;
        this.platform = platform;
        this.contactsfound = [];
        this.search = false;
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
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.secondaryButton').hide();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.contactList').show();
    };
    ConnectPage.prototype.requestRemoveSquad = function (uid) {
        this.userID = localStorage.getItem('uid');
        if (__WEBPACK_IMPORTED_MODULE_5_jquery__(event.target).hasClass('true')) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__(__WEBPACK_IMPORTED_MODULE_5_jquery__(event.target).removeClass('true'));
            __WEBPACK_IMPORTED_MODULE_5_jquery__(__WEBPACK_IMPORTED_MODULE_5_jquery__(event.target).addClass('false'));
            return this.afd.object('/users/' + this.userID + '/friends/' + uid).update({
                squad: 'false'
            });
        }
        else if (__WEBPACK_IMPORTED_MODULE_5_jquery__(event.target).hasClass('pending')) {
            //do nothing
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__(__WEBPACK_IMPORTED_MODULE_5_jquery__(event.target).addClass('pending'));
            __WEBPACK_IMPORTED_MODULE_5_jquery__(__WEBPACK_IMPORTED_MODULE_5_jquery__(event.target).removeClass('false'));
            this.sendSquadRequest(uid);
            return this.afd.object('/users/' + this.userID + '/friends/' + uid).update({
                squad: 'pending'
            });
        }
    };
    ConnectPage.prototype.sendSquadRequest = function (uid) {
        this.myUsername = localStorage.getItem('currUserName');
        this.messageID = Math.floor(10000000000000000000 + Math.random() * 90000000000000000000);
        return this.afd.object('/users/' + uid + '/messages/' + this.messageID).update({
            avatar: localStorage.getItem('img'),
            header: 'Squad Request',
            message: this.myUsername + ' wants you to join their squad!',
            messageID: this.messageID,
            read: 'false',
            requestorID: uid,
            type: 'squadRequest'
        });
    };
    return ConnectPage;
}());
ConnectPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-connect',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/connect-page/connect-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Connect</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div padding>\n        <ion-segment [(ngModel)]="connect">\n          <ion-segment-button value="friends">\n            Friends\n          </ion-segment-button>\n          <ion-segment-button value="suggested">\n            Suggested\n          </ion-segment-button>\n          <ion-segment-button value="contacts">\n            Contacts\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="connect">            \n        <ion-list *ngSwitchCase="\'friends\'">\n            <div class="playerContainer">\n              <p>My Squad</p>\n              <div *ngFor="let friend of friends" class="playerLoop">\n                <div class="player" *ngIf="friend.squad == \'true\'">\n                  <span class="imgContainer squad" (click)="goToProfile(friend.uid)"><img [src]="friend.img" /></span>\n                </div>\n                </div>\n              </div> \n          <p>My Friends</p>\n          <div *ngFor="let friend of friends">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-11>\n                  <button ion-item class="squad" (click)="goToProfile(friend.uid)">\n                    <span class="imgContainer"><img [src]="friend.img"/></span>{{ friend.username }}\n                  </button>\n                </ion-col>\n                <ion-col col-1>\n                    <div class="status friendStatus {{friend.status}} squadStatus {{friend.squad}}" (click)="requestRemoveSquad(friend.uid)"> </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'suggested\'">\n          <div *ngFor="let user of userData">\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-11>\n                    <button ion-item class="suggested" (click)="goToProfile(user.uid)">\n                      <span class="imgContainer"><img [src]="user.img"/></span>{{ user.username }}\n                    </button> \n                  </ion-col>\n                  <ion-col col-1>\n                      <div class="status friendStatus"></div>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n          </div>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'contacts\'">              \n            <!-- <button ion-button class="secondaryButton" (click)="showContacts()">Allow Access to Contacts</button> -->\n             <!-- <div *ngFor="let contact of contactlist" class="contactList">\n                 <ion-grid>\n                     <ion-row>\n                       <ion-col col-11>\n                         <button ion-item class="suggested" (click)="goToProfile(user.uid)">\n                           {{contact.name.givenName}} | {{contact.emails[0].value}}\n                         </button> \n                       </ion-col>\n                       <ion-col col-1>\n                           <div class="status friendStatus"></div>\n                       </ion-col>\n                     </ion-row>\n                 </ion-grid>\n               </div> -->\n             </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/connect-page/connect-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service__["a" /* FirebaseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _f || Object])
], ConnectPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=connect-page.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map