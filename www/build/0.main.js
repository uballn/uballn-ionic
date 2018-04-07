webpackJsonp([0],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_page__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register-page.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        // success
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_email__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, firebaseService, formBuilder, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
    }
    RegisterPage.prototype.signupUser = function () {
        var _this = this;
        if (this.signupForm.valid) {
            this.loading = this.loadingCtrl.create();
            this.loading.present();
            this.firebaseService.signUp(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.name)
                .then(function () {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot('LoginPage');
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
        }
    };
    RegisterPage.prototype.showPrivacyPolicy = function () {
        var modal = this.modalCtrl.create('PolicyPage');
        modal.present();
    };
    RegisterPage.prototype.showTerms = function () {
        var modal = this.modalCtrl.create('TermsPage');
        modal.present();
    };
    RegisterPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'page-register-page',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/register-page/register-page.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button start (click)="back()">\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        <ion-title>\n        <img src="assets/img/uballn-logo.png" />\n      </ion-title>\n    </ion-navbar>\n  </ion-header>  \n\n<ion-content padding>\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n    <ion-item>\n      <ion-label>Name</ion-label>\n      <ion-input formControlName="name" type="text"\n        [class.invalid]="!signupForm.controls.name.valid && signupForm.controls.name.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" \n      *ngIf="!signupForm.controls.name.valid  && signupForm.controls.name.dirty" no-lines>\n      <p>Please provide a name</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input formControlName="email" type="email"  \n        [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" \n      *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty" no-lines>\n      <p>Please enter a valid email.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input formControlName="password" type="password"\n        [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" \n      *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty" no-lines>\n      <p>Your password needs more than 6 characters.</p>\n    </ion-item>\n\n    <button ion-button block class="primaryButton" type="submit" [disabled]="!signupForm.valid">\n      Create Account\n    </button>\n\n    <p class="formText small">By logging in, you agree to UBALLN’s <a href="#" (click)="showTerms()">Terms of Use</a> and <a href="#" (click)="showPrivacyPolicy()">Privacy Policy</a>.</p>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/register-page/register-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service__["a" /* FirebaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object])
], RegisterPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=register-page.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map