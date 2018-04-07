webpackJsonp([4],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_page__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsPageModule = (function () {
    function TermsPageModule() {
    }
    return TermsPageModule;
}());
TermsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__terms_page__["a" /* TermsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_page__["a" /* TermsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__terms_page__["a" /* TermsPage */]
        ]
    })
], TermsPageModule);

//# sourceMappingURL=terms-page.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
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


var TermsPage = (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    return TermsPage;
}());
TermsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/terms-page/terms-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button start (click)="close()">Close</button>\n    <ion-title>Terms of Use</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <div class="modalContent">\n    <h2>Welcome to UBALLN</h2>\n    <p>These terms and conditions outline the rules and regulations for the use of UBALLN\'s Website.</p>\n    <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use UBALLN\'s website \n    if you do not accept all of the terms and conditions stated on this page.</p>\n    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice\n    and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website\n    and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers\n    to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client\n    or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake\n    the process of our assistance to the Client in the most appropriate manner, whether by formal meetings\n    of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect\n    of provision of the Company’s stated services/products, in accordance with and subject to, prevailing law\n    of . Any use of the above terminology or other words in the singular, plural,\n    capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p><h2>Cookies</h2>\n    <p>We employ the use of cookies. By using UBALLN\'s website you consent to the use of cookies \n    in accordance with UBALLN’s privacy policy.</p><p>Most of the modern day interactive web sites\n    use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site\n    to enable the functionality of this area and ease of use for those people visiting. Some of our \n    affiliate / advertising partners may also use cookies.</p><h2>License</h2>\n    <p>Unless otherwise stated, UBALLN and/or it’s licensors own the intellectual property rights for\n    all material on UBALLN. All intellectual property rights are reserved. You may view and/or print\n    pages from http://uballn.com for your own personal use subject to restrictions set in these terms and conditions.</p>\n    <p>You must not:</p>\n    <ol>\n      <li>Republish material from http://uballn.com</li>\n      <li>Sell, rent or sub-license material from http://uballn.com</li>\n      <li>Reproduce, duplicate or copy material from http://uballn.com</li>\n    </ol>\n    <p>Redistribute content from UBALLN (unless content is specifically made for redistribution).</p>\n  <h2>Hyperlinking to our Content</h2>\n    <ol>\n      <li>The following organizations may link to our Web site without prior written approval:\n        <ol>\n        <li>Government agencies;</li>\n        <li>Search engines;</li>\n        <li>News organizations;</li>\n        <li>Online directory distributors when they list us in the directory may link to our Web site in the same\n          manner as they hyperlink to the Web sites of other listed businesses; and</li>\n        <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,\n          and charity fundraising groups which may not hyperlink to our Web site.</li>\n        </ol>\n      </li>\n    </ol>\n    <ol start="2">\n      <li>These organizations may link to our home page, to publications or to other Web site information so long\n        as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or\n        approval of the linking party and its products or services; and (c) fits within the context of the linking\n        party\'s site.\n      </li>\n      <li>We may consider and approve in our sole discretion other link requests from the following types of organizations:\n        <ol>\n          <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American\n            Automobile Association, AARP and Consumers Union;</li>\n          <li>dot.com community sites;</li>\n          <li>associations or other groups representing charities, including charity giving sites,</li>\n          <li>online directory distributors;</li>\n          <li>internet portals;</li>\n          <li>accounting, law and consulting firms whose primary clients are businesses; and</li>\n          <li>educational institutions and trade associations.</li>\n        </ol>\n      </li>\n    </ol>\n    <p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect\n    unfavorably on us or our accredited businesses (for example, trade associations or other organizations\n    representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed\n    to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from\n    the visibility associated with the hyperlink outweighs the absence of <?=$companyName?>; and (d) where the\n    link is in the context of general resource information or is otherwise consistent with editorial content\n    in a newsletter or similar product furthering the mission of the organization.</p>\n  \n    <p>These organizations may link to our home page, to publications or to other Web site information so long as\n    the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval\n    of the linking party and it products or services; and (c) fits within the context of the linking party\'s\n    site.</p>\n  \n    <p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website,\n    you must notify us by sending an e-mail to <a href="mailto:info@uballn.com" title="send an email to info@uballn.com">info@uballn.com</a>.\n    Please include your name, your organization name, contact information (such as a phone number and/or e-mail\n    address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site,\n    and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>\n  \n    <p>Approved organizations may hyperlink to our Web site as follows:</p>\n  \n    <ol>\n      <li>By use of our corporate name; or</li>\n      <li>By use of the uniform resource locator (Web address) being linked to; or</li>\n      <li>By use of any other description of our Web site or material being linked to that makes sense within the\n        context and format of content on the linking party\'s site.</li>\n    </ol>\n    <p>No use of UBALLN’s logo or other artwork will be allowed for linking absent a trademark license\n    agreement.</p>\n  <h2>Reservation of Rights</h2>\n    <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular\n    link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also\n    reserve the right to amend these terms and conditions and its linking policy at any time. By continuing\n    to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>\n  <h2>Content Liability</h2>\n    <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify\n    and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any\n    page on your Web site or within any context containing content or materials that may be interpreted as\n    libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or\n    other violation of, any third party rights.</p>\n  <h2>Disclaimer</h2>\n    <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>\n    <ol>\n    <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>\n    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\n    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\n    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\n    </ol>\n    <p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a)\n    are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or\n    in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort\n    (including negligence) and for breach of statutory duty.</p>\n    <p>To the extent that the website and the information and services on the website are provided free of charge,\n    we will not be liable for any loss or damage of any nature.</p> \n  </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/terms-page/terms-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms-page.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map