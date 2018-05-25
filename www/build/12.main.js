webpackJsonp([12],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__policy_page__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PolicyPageModule = (function () {
    function PolicyPageModule() {
    }
    return PolicyPageModule;
}());
PolicyPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__policy_page__["a" /* PolicyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__policy_page__["a" /* PolicyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__policy_page__["a" /* PolicyPage */]
        ]
    })
], PolicyPageModule);

//# sourceMappingURL=policy-page.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PolicyPage = (function () {
    function PolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PolicyPage');
    };
    PolicyPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return PolicyPage;
}());
PolicyPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-policy',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic/src/pages/policy-page/policy-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button start (click)="close()">Close</button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n<div class="modalContent">\n        <h3>Your privacy is critically important to us.</h3>\n\n        <p>It is Uballn’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="http://uballn.com">uballn.com</a> (hereinafter, "us", "we", or "uballn.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>\n        <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>\n        \n                    <h2>Gathering of Personally-Identifying Information</h2>\n        <p>Certain visitors to Uballn’s websites choose to interact with Uballn in ways that require Uballn to gather personally-identifying information. The amount and type of information that Uballn gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at http://uballn.com to provide a username and email address.</p>\n        \n                    <h2>Security</h2>\n        <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>\n        \n                    <h2>Advertisements</h2>\n        <p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Uballn and does not cover the use of cookies by any advertisers.</p>\n\n                    <h2>Links To External Sites</h2>\n        <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>\n        <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>\n        \n                    <h2>Aggregated Statistics</h2>\n        <p>Uballn may collect statistics about the behavior of visitors to its website. Uballn may display this information publicly or provide it to others. However, Uballn does not disclose your personally-identifying information.</p>\n        \n                    <h2>Cookies</h2>\n        <p>To enrich and perfect your online experience, Uballn uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>\n        <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Uballn uses cookies to help Uballn identify and track visitors, their usage of http://uballn.com, and their website access preferences. Uballn visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Uballn’s websites, with the drawback that certain features of Uballn’s websites may not function properly without the aid of cookies.</p>\n        <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Uballn\'s use of cookies.</p>\n        \n                    <h2>Privacy Policy Changes</h2>\n        <p>Although most changes are likely to be minor, Uballn may change its Privacy Policy from time to time, and in Uballn’s sole discretion. Uballn encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>\n                 \n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic/src/pages/policy-page/policy-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PolicyPage);

//# sourceMappingURL=policy-page.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map