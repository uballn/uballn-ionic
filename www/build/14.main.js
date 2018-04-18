webpackJsonp([14],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDetailPageModule", function() { return MessageDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_detail_page__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageDetailPageModule = (function () {
    function MessageDetailPageModule() {
    }
    return MessageDetailPageModule;
}());
MessageDetailPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__message_detail_page__["a" /* MessageDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_detail_page__["a" /* MessageDetailPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__message_detail_page__["a" /* MessageDetailPage */]
        ]
    })
], MessageDetailPageModule);

//# sourceMappingURL=message-detail-page.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageDetailPage = (function () {
    function MessageDetailPage(navCtrl, storage, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.message = this.navParams;
    }
    MessageDetailPage.prototype.ionViewDidEnter = function () {
    };
    return MessageDetailPage;
}());
MessageDetailPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-message-detail',template:/*ion-inline-start:"/Users/justinnash/sites/uballn-ionic3/src/pages/message-detail-page/message-detail-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{message.data.previewHeader}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="messageheader" [style.backgroundImage]="\'url(\' + message.data.img + \')\'"></div>\n  <div class="messageContent">\n    <h2>{{message.data.messageHeader}}</h2>\n    <p>{{message.data.messageBody}}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/justinnash/sites/uballn-ionic3/src/pages/message-detail-page/message-detail-page.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
], MessageDetailPage);

var _a, _b, _c;
//# sourceMappingURL=message-detail-page.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map