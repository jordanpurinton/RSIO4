(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-13543983.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTopOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeLastOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return present; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var lastId = 1;
function createOverlay(e, t) { Object.assign(e, t), e.overlayId = lastId++; var n = e.ownerDocument; return (n.querySelector("ion-app") || n.body).appendChild(e), e.componentOnReady(); }
function dismissOverlay(e, t, n, i) { i = i >= 0 ? i : getHighestId(n); var o = n.get(i); return o ? o.dismiss(e, t) : Promise.reject("overlay does not exist"); }
function getTopOverlay(e) { return e.get(getHighestId(e)); }
function getHighestId(e) { var t = -1; return e.forEach(function (e, n) { n > t && (t = n); }), t; }
function removeLastOverlay(e) { var t = getTopOverlay(e); return t ? t.dismiss() : Promise.resolve(); }
function present(e, t, n, i, o) {
    return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (e.presented)
                    return [2 /*return*/];
                e.presented = !0, e.willPresent.emit();
                a = e.enterAnimation ? e.enterAnimation : e.config.get(t, "ios" === e.mode ? n : i);
                return [4 /*yield*/, overlayAnimation(e, a, e.el, o)];
            case 1:
                _a.sent(), e.didPresent.emit();
                return [2 /*return*/];
        }
    }); });
}
function dismiss(e, t, n, i, o, a, s) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!e.presented)
                    return [2 /*return*/];
                e.presented = !1, e.willDismiss.emit({ data: t, role: n });
                r = e.leaveAnimation ? e.leaveAnimation : e.config.get(i, "ios" === e.mode ? o : a);
                return [4 /*yield*/, overlayAnimation(e, r, e.el, s)];
            case 1:
                _a.sent(), e.didDismiss.emit({ data: t, role: n }), e.el.remove();
                return [2 /*return*/];
        }
    }); });
}
function overlayAnimation(e, t, n, i) {
    return __awaiter(this, void 0, void 0, function () { var e_1, o, a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (e.keyboardClose) {
                    e_1 = n.ownerDocument.activeElement;
                    e_1 && e_1.blur();
                }
                e.animation && (e.animation.destroy(), e.animation = void 0);
                o = n.shadowRoot || e.el;
                _a = e;
                return [4 /*yield*/, e.animationCtrl.create(t, o, i)];
            case 1:
                a = _a.animation = _b.sent();
                e.animation = a, e.willAnimate || a.duration(0);
                return [4 /*yield*/, a.playAsync()];
            case 2:
                _b.sent(), a.destroy(), e.animation = void 0;
                return [2 /*return*/];
        }
    }); });
}
function eventMethod(e, t, n) { var i; var o = new Promise(function (e) { return i = e; }); return onceEvent(e, t, function (e) { var t = e.detail; n && n(t), i(t); }), o; }
function onceEvent(e, t, n) { var i = function (o) { e.removeEventListener(t, i), n(o); }; e.addEventListener(t, i); }
function isCancel(e) { return "cancel" === e || e === BACKDROP; }
var BACKDROP = "backdrop";



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-7badb76d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-7badb76d.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCordova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isPhablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return matchMedia$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isHybrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return needInputShims; });
function isIpad(i) { return testUserAgent(i, /iPad/i); }
function isIphone(i) { return testUserAgent(i, /iPhone/i); }
function isIOS(i) { return testUserAgent(i, /iPad|iPhone|iPod/i); }
function isAndroid(i) { return !isIOS(i); }
function isPhablet(i) { var t = i.innerWidth, n = i.innerHeight, e = Math.min(t, n), s = Math.max(t, n); return e > 390 && e < 520 && s > 620 && s < 800; }
function isTablet(i) { var t = i.innerWidth, n = i.innerHeight, e = Math.min(t, n), s = Math.max(t, n); return e > 460 && e < 820 && s > 780 && s < 1400; }
function isDevice(i) { return matchMedia$1(i, "(any-pointer:coarse)"); }
function isHybrid(i) { return isCordova(i) || isCapacitorNative(i); }
function isCordova(i) { var t = i; return !!(t.cordova || t.phonegap || t.PhoneGap); }
function isCapacitorNative(i) { var t = i.Capacitor; return !(!t || !t.isNative); }
function isElectron(i) { return testUserAgent(i, /electron/); }
function needInputShims(i) { return isIOS(i) && isDevice(i); }
function testUserAgent(i, t) { return t.test(i.navigator.userAgent); }
function matchMedia$1(i, t, n) {
    if (n === void 0) { n = !1; }
    return i.matchMedia ? i.matchMedia(t).matches : n;
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-8ef9ea06.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-8ef9ea06.js ***!
  \*****************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIZE_TO_MEDIA; });
var SIZE_TO_MEDIA = { xs: "(min-width: 0px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)" };
function isMatch(i) { if (!i)
    return !0; var t = SIZE_TO_MEDIA[i]; return !(!t || !matchMedia(t)) && matchMedia(t).matches; }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-d3dac993.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-d3dac993.js ***!
  \*****************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function attachComponent(e, n, t, o, r) {
    return __awaiter(this, void 0, void 0, function () { var a, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (e)
                    return [2 /*return*/, e.attachViewToDom(n, t, r, o)];
                if ("string" != typeof t && !(t instanceof HTMLElement))
                    throw new Error("framework delegate is missing");
                a = "string" == typeof t ? n.ownerDocument.createElement(t) : t;
                o && o.forEach(function (e) { return a.classList.add(e); }), r && Object.assign(a, r), n.appendChild(a);
                _a = a.componentOnReady;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, a.componentOnReady()];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2: return [2 /*return*/, (_a, a)];
        }
    }); });
}
function detachComponent(e, n) { if (n) {
    if (e) {
        var t = n.parentElement;
        return e.removeViewFromDom(t, n);
    }
    n.remove();
} return Promise.resolve(); }



/***/ }),

/***/ "./src/app/pages/tabs/chats/chats.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats.module.ts ***!
  \**************************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chats.page */ "./src/app/pages/tabs/chats/chats.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        outlet: 'tab2',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_5__["ChatsPage"]
    }
];
var ChatsPageModule = /** @class */ (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_5__["ChatsPage"]]
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/chats/chats.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>chats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/chats/chats.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tabs/chats/chats.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/chats/chats.page.ts ***!
  \************************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
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

var ChatsPage = /** @class */ (function () {
    function ChatsPage() {
    }
    ChatsPage.prototype.ngOnInit = function () {
    };
    ChatsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! ./chats.page.html */ "./src/app/pages/tabs/chats/chats.page.html"),
            styles: [__webpack_require__(/*! ./chats.page.scss */ "./src/app/pages/tabs/chats/chats.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ChatsPage);
    return ChatsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/routes/routes.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/routes/routes.module.ts ***!
  \****************************************************/
/*! exports provided: RoutesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesPageModule", function() { return RoutesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _routes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes.page */ "./src/app/pages/tabs/routes/routes.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        outlet: 'tab1',
        component: _routes_page__WEBPACK_IMPORTED_MODULE_5__["RoutesPage"]
    }
];
var RoutesPageModule = /** @class */ (function () {
    function RoutesPageModule() {
    }
    RoutesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_routes_page__WEBPACK_IMPORTED_MODULE_5__["RoutesPage"]]
        })
    ], RoutesPageModule);
    return RoutesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/routes/routes.page.html":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/routes/routes.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>routes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/routes/routes.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/routes/routes.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tabs/routes/routes.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/routes/routes.page.ts ***!
  \**************************************************/
/*! exports provided: RoutesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesPage", function() { return RoutesPage; });
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

var RoutesPage = /** @class */ (function () {
    function RoutesPage() {
    }
    RoutesPage.prototype.ngOnInit = function () {
    };
    RoutesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routes',
            template: __webpack_require__(/*! ./routes.page.html */ "./src/app/pages/tabs/routes/routes.page.html"),
            styles: [__webpack_require__(/*! ./routes.page.scss */ "./src/app/pages/tabs/routes/routes.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RoutesPage);
    return RoutesPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/settings/settings.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.module.ts ***!
  \********************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/tabs/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        outlet: 'tab3',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/settings/settings.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tabs/settings/settings.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tabs/settings/settings.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.ts ***!
  \******************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
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

var SettingsPage = /** @class */ (function () {
    function SettingsPage() {
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/tabs/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/tabs/settings/settings.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map