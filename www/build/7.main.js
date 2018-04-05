webpackJsonp([7],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickPlayPageModule", function() { return QuickPlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quickplay_page__ = __webpack_require__(338);
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

/***/ 338:
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
        var uid = localStorage.getItem('uid');
        this.firebaseService.checkMessages(uid);
    };
    QuickPlayPage.prototype.newList = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Create new game',
            message: 'Enter a name for your new list',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Groceries'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Create List',
                    handler: function (data) {
                        _this.firebaseService.createNewList(data.name).then(function (data) {
                            _this.presentToast('New list created!');
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    QuickPlayPage.prototype.removeList = function (id) {
        this.firebaseService.removeList(id);
    };
    QuickPlayPage.prototype.addItemToList = function (listId, listName) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'New item for "' + listName + '"',
            message: 'Enter a name for your new item',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Milk'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Add Item',
                    handler: function (data) {
                        _this.firebaseService.addListItem(listId, data.name).then(function (data) {
                            _this.presentToast('New item added!');
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    QuickPlayPage.prototype.removeItem = function (itemId, listId) {
        this.firebaseService.removegameItem(listId, itemId);
    };
    QuickPlayPage.prototype.shareList = function (listId, listName) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Share your list "' + listName + '"',
            message: 'Enter the Email of the person you want to share your list with',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'john@doe.com'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Share List',
                    handler: function (data) {
                        _this.firebaseService.shareList(listId, listName, data.email).then(function (res) {
                            _this.presentToast('Invitation sent to ' + data.email);
                        });
                    }
                }
            ]
        });
        prompt.present();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-quickplay-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/quickplay-page/quickPlay-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goToProfile()">\n      <ion-icon name="contact"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/img/uballn-logo.png" />\n    </ion-title>\n    <button ion-button end (click)="seeMessages()">\n        <img class="navIcon messages" src="assets/img/icons-message.svg"/>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="gameContainer" *ngFor="let game of gameLists | async" (click)="openGame(game)">\n    <span class="gameBG" [style.backgroundImage]="\'url(\' + game.img + \')\'"></span>\n    <ion-list-header>\n      <h2>{{ game.name }}</h2>\n      <button ion-button item-left clear color="danger" icon-only (click)="removeList(game.$key)" *ngIf="editMode"><ion-icon name="remove-circle"></ion-icon></button>\n    </ion-list-header>\n    <ion-item>\n      <ul class="gameDetails">\n        <li><span><img [src]="game.creatorIMG" class="creator"/></span></li>\n        <li><span><img src="assets/img/icons-players.svg"/></span> {{ game.stats.playerTotal }}</li>\n        <li><span><img src="assets/img/icons-id.svg"/></span> {{ game.stats.avgAge }}</li>\n        <li><span><img src="assets/img/icons-chart.svg"/></span> {{ game.stats.avgExp }}</li>\n      </ul>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-fab right bottom padding>\n    <button ion-fab (click)="newList()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab> -->\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/quickplay-page/quickPlay-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
], QuickPlayPage);

//# sourceMappingURL=quickplay-page.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map