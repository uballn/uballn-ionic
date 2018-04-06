webpackJsonp([5],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPageModule", function() { return SharedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_page__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedPageModule = (function () {
    function SharedPageModule() {
    }
    return SharedPageModule;
}());
SharedPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shared_page__["a" /* SharedPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shared_page__["a" /* SharedPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_page__["a" /* SharedPage */]
        ]
    })
], SharedPageModule);

//# sourceMappingURL=shared-page.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPage; });
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



var SharedPage = (function () {
    function SharedPage(navCtrl, firebaseService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    SharedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.firebaseService.authState.subscribe(function (user) {
            if (user) {
                _this.sharedLists = _this.firebaseService.getSharedLists();
            }
        });
    };
    SharedPage.prototype.addItemToList = function (listId, listName) {
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
    SharedPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return SharedPage;
}());
SharedPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* Component */])({
        selector: 'page-shared-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/shared-page/shared-page.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shared Lists</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor="let list of sharedLists | async" padding-top>\n    <ion-list-header>\n      {{ list.name }}\n      <button ion-button item-right clear icon-only (click)="addItemToList(list.$key, list.name)"><ion-icon name="add"></ion-icon></button>\n    </ion-list-header>\n    <ion-item color="light">\n    Shared by: {{ list.creator }}</ion-item>\n  \n\n    <ion-item *ngFor="let shoppingItem of list.shoppingItems | async">\n      {{ shoppingItem.name }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/shared-page/shared-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
], SharedPage);

//# sourceMappingURL=shared-page.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map