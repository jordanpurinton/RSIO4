(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-account-edit-account-module"],{

/***/ "./src/app/pages/edit-account/edit-account.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.module.ts ***!
  \***********************************************************/
/*! exports provided: EditAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPageModule", function() { return EditAccountPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-account.page */ "./src/app/pages/edit-account/edit-account.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _edit_account_page__WEBPACK_IMPORTED_MODULE_5__["EditAccountPage"]
    }
];
var EditAccountPageModule = /** @class */ (function () {
    function EditAccountPageModule() {
    }
    EditAccountPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_account_page__WEBPACK_IMPORTED_MODULE_5__["EditAccountPage"]]
        })
    ], EditAccountPageModule);
    return EditAccountPageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-account/edit-account.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>edit-account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-account/edit-account.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/edit-account/edit-account.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-account/edit-account.page.ts ***!
  \*********************************************************/
/*! exports provided: EditAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountPage", function() { return EditAccountPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditAccountPage = /** @class */ (function () {
    function EditAccountPage() {
    }
    EditAccountPage.prototype.ngOnInit = function () {
    };
    EditAccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-account',
            template: __webpack_require__(/*! ./edit-account.page.html */ "./src/app/pages/edit-account/edit-account.page.html"),
            styles: [__webpack_require__(/*! ./edit-account.page.scss */ "./src/app/pages/edit-account/edit-account.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], EditAccountPage);
    return EditAccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-account-edit-account-module.js.map