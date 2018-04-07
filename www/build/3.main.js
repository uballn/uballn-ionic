webpackJsonp([3],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_page__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome_page__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome_page__["a" /* WelcomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__welcome_page__["a" /* WelcomePage */]
        ]
    })
], WelcomePageModule);

//# sourceMappingURL=welcome-page.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
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





var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    WelcomePage.prototype.goToLogin = function () {
        var modal = this.modalCtrl.create('LoginPage');
        modal.present();
    };
    WelcomePage.prototype.goToSignup = function () {
        var modal = this.modalCtrl.create('RegisterPage');
        modal.present();
    };
    return WelcomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/welcome-page/welcome-page.html"*/'<ion-content no-bounce>\n  <div class="overlay">\n      <video autoplay loop src="assets/vid/intro_hooping.mp4"></video>\n      <div class="introLogo">\n        <img src="assets/img/uballn_logo.svg"/>\n      </div>\n\n      <div class="slidesAndButtons">\n      <ion-slides pager>\n        <ion-slide (didChange)="slideChanged()">\n          <h2>Find a Pick-Up Game</h2>\n          <p>Don\'t know where the ballers are? Now you can easily find active games nearby.</p>\n        </ion-slide>\n        \n        <ion-slide (didChange)="slideChanged()">\n            <h2>Level of Play</h2>\n            <p>Instantly get an idea of the competition with our level of play system. </p>\n          </ion-slide>\n\n        <ion-slide (didChange)="slideChanged()">\n            <h2>Easily Organize Games</h2>\n            <p>No need to text or tweet to get people to show. Just hit "invite".</p>\n          </ion-slide>\n\n        <ion-slide (didChange)="slideChanged()">\n            <h2>Profile</h2>\n            <p>Create a player profile and show everyone what you bring to the court.</p>\n          </ion-slide>\n        \n      </ion-slides>\n      <form>\n        <div padding>\n          <button ion-button class="primaryButton" block (click)="goToSignup()">Create Account</button>\n          <button ion-button class="secondaryButton" block (click)="goToLogin()">Log In</button>\n        </div>\n      </form>\n    </div>\n</div>\n</ion-content>'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/welcome-page/welcome-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], WelcomePage);

//# sourceMappingURL=welcome-page.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map