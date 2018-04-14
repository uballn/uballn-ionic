webpackJsonp([18],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPageModule", function() { return AdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_page__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdPageModule = (function () {
    function AdPageModule() {
    }
    return AdPageModule;
}());
AdPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ad_page__["a" /* AdPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ad_page__["a" /* AdPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ad_page__["a" /* AdPage */]
        ]
    })
], AdPageModule);

//# sourceMappingURL=ad-page.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdPage = (function () {
    function AdPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    AdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdPage');
    };
    AdPage.prototype.ionViewWillEnter = function () {
        localStorage.setItem('adShown', 'true');
    };
    AdPage.prototype.close = function () {
        this.navCtrl.pop();
        this.presentToast('Game Added!');
    };
    AdPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: 'top'
        });
        toast.present();
    };
    return AdPage;
}());
AdPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-ad',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/ad-page/ad-page.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button start (click)="close()">Close</button>\n      <ion-title>Targeted Ad</ion-title>\n    </ion-navbar>  \n  </ion-header>\n  \n<ion-content padding>\n<img src="assets/img/gatorade_ad.jpg"/>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/ad-page/ad-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], AdPage);

//# sourceMappingURL=ad-page.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map