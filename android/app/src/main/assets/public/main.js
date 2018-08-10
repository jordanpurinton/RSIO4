(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/account/account.module": [
		"./src/app/pages/account/account.module.ts",
		"pages-account-account-module"
	],
	"./pages/driver-info/driver-info.module": [
		"./src/app/pages/driver-info/driver-info.module.ts",
		"pages-driver-info-driver-info-module"
	],
	"./pages/edit-account/edit-account.module": [
		"./src/app/pages/edit-account/edit-account.module.ts",
		"pages-edit-account-edit-account-module"
	],
	"./pages/forgot-password/forgot-password.module": [
		"./src/app/pages/forgot-password/forgot-password.module.ts",
		"pages-forgot-password-forgot-password-module"
	],
	"./pages/help/help.module": [
		"./src/app/pages/help/help.module.ts",
		"pages-help-help-module"
	],
	"./pages/list/list.module": [
		"./src/app/pages/list/list.module.ts",
		"pages-list-list-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"pages-login-login-module"
	],
	"./pages/payments/payments.module": [
		"./src/app/pages/payments/payments.module.ts",
		"pages-payments-payments-module"
	],
	"./pages/signup/signup.module": [
		"./src/app/pages/signup/signup.module.ts",
		"pages-signup-signup-module"
	],
	"./pages/tabs/chats/chats.module": [
		"./src/app/pages/tabs/chats/chats.module.ts",
		"common"
	],
	"./pages/tabs/routes/routes.module": [
		"./src/app/pages/tabs/routes/routes.module.ts",
		"common"
	],
	"./pages/tabs/settings/settings.module": [
		"./src/app/pages/tabs/settings/settings.module.ts",
		"common"
	],
	"./pages/tabs/tabs.module": [
		"./src/app/pages/tabs/tabs.module.ts",
		"common",
		"pages-tabs-tabs-module"
	],
	"./pages/welcome/welcome.module": [
		"./src/app/pages/welcome/welcome.module.ts",
		"pages-welcome-welcome-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_guards_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/guards.module */ "./src/app/guards/guards.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
    { path: 'chats', loadChildren: './pages/tabs/chats/chats.module#ChatsPageModule' },
    { path: 'driver-info', loadChildren: './pages/driver-info/driver-info.module#DriverInfoPageModule' },
    { path: 'edit-account', loadChildren: './pages/edit-account/edit-account.module#EditAccountPageModule' },
    { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
    { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'payments', loadChildren: './pages/payments/payments.module#PaymentsPageModule' },
    { path: 'routes', loadChildren: './pages/tabs/routes/routes.module#RoutesPageModule' },
    { path: 'settings', loadChildren: './pages/tabs/settings/settings.module#SettingsPageModule' },
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
    { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
    { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),
                _guards_guards_module__WEBPACK_IMPORTED_MODULE_3__["GuardsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu>\n      <ion-content>\n        <div class=\"profile\" padding text-center *ngIf=\"currentUser | async as profile\">\n          <ion-avatar class=\"md\">\n            <img [src]=\"profile.photoURL || 'assets/images/noavatar.png'\">\n          </ion-avatar>\n\n          <h5>{{profile.displayName || 'Unknown'}}</h5>\n          <p>{{profile.email}}</p>\n        </div>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'root'\" (click)=\"navigateTo(p.url)\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <ion-footer>\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"logout()\">\n              <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n              Logout\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].SplashScreen, StatusBar = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].StatusBar;
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, statusBar, splashScreen, router, userService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.router = router;
        this.userService = userService;
        this.appPages = [
            { title: 'Routes', url: '/app/tabs/(tab1:routes)', icon: 'map' },
            { title: 'Chats', url: '/app/tabs/(tab2:chats)', icon: 'chatbubbles' },
            { title: 'Settings', url: '/app/tabs/(tab3:settings)', icon: 'cog' }
        ];
        this.initializeApp();
        this.currentUser = this.userService.currentUser;
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.rootPage = TabsPage;
            _this.statusBar.hide();
            _this.splashScreen.hide();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"].enablePersistence(),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"]
            ],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-route/add-route.html":
/*!*****************************************************!*\
  !*** ./src/app/components/add-route/add-route.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the AddRouteComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-route/add-route.ts":
/*!***************************************************!*\
  !*** ./src/app/components/add-route/add-route.ts ***!
  \***************************************************/
/*! exports provided: AddRouteModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRouteModal", function() { return AddRouteModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddRouteModal = /** @class */ (function () {
    function AddRouteModal(alertCtrl, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.routeList = [];
    }
    AddRouteModal.prototype.addRouteStart = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeStart = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    AddRouteModal.prototype.addRouteEnd = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeEnd = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    AddRouteModal.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    AddRouteModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-route',
            template: __webpack_require__(/*! ./add-route.html */ "./src/app/components/add-route/add-route.html"),
            template: "\n    <ion-list>\n      <ion-list-header><ion-label>Ionic</ion-label></ion-list-header>\n      <ion-item (click)=\"close()\"><ion-label>Learn Ionic</ion-label></ion-item>\n      <ion-item (click)=\"close()\"><ion-label>Documentation</ion-label></ion-item>\n      <ion-item (click)=\"close()\"><ion-label>Showcase</ion-label></ion-item>\n      <ion-item (click)=\"close()\"><ion-label>GitHub Repo</ion-label></ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], AddRouteModal);
    return AddRouteModal;
}());



/***/ }),

/***/ "./src/app/components/ask-chat-card/ask-chat-card.html":
/*!*************************************************************!*\
  !*** ./src/app/components/ask-chat-card/ask-chat-card.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the AskChatCardComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/ask-chat-card/ask-chat-card.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ask-chat-card/ask-chat-card.ts ***!
  \***********************************************************/
/*! exports provided: AskChatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskChatCardComponent", function() { return AskChatCardComponent; });
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

/**
 * Generated class for the AskChatCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AskChatCardComponent = /** @class */ (function () {
    function AskChatCardComponent() {
        console.log('Hello AskChatCardComponent Component');
        this.text = 'Hello World';
    }
    AskChatCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ask-chat-card',
            template: __webpack_require__(/*! ./ask-chat-card.html */ "./src/app/components/ask-chat-card/ask-chat-card.html")
        }),
        __metadata("design:paramtypes", [])
    ], AskChatCardComponent);
    return AskChatCardComponent;
}());



/***/ }),

/***/ "./src/app/components/chat-card/chat-card.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat-card/chat-card.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the ChatCardComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat-card/chat-card.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat-card/chat-card.ts ***!
  \***************************************************/
/*! exports provided: ChatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatCardComponent", function() { return ChatCardComponent; });
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

/**
 * Generated class for the ChatCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatCardComponent = /** @class */ (function () {
    function ChatCardComponent() {
        console.log('Hello ChatCardComponent Component');
        this.text = 'Hello World';
    }
    ChatCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-card',
            template: __webpack_require__(/*! ./chat-card.html */ "./src/app/components/chat-card/chat-card.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChatCardComponent);
    return ChatCardComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_route_add_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-route/add-route */ "./src/app/components/add-route/add-route.ts");
/* harmony import */ var _ask_chat_card_ask_chat_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ask-chat-card/ask-chat-card */ "./src/app/components/ask-chat-card/ask-chat-card.ts");
/* harmony import */ var _chat_card_chat_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-card/chat-card */ "./src/app/components/chat-card/chat-card.ts");
/* harmony import */ var _confirm_route_confirm_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm-route/confirm-route */ "./src/app/components/confirm-route/confirm-route.ts");
/* harmony import */ var _distance_slider_distance_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./distance-slider/distance-slider */ "./src/app/components/distance-slider/distance-slider.ts");
/* harmony import */ var _google_maps_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./google-maps/google-maps */ "./src/app/components/google-maps/google-maps.ts");
/* harmony import */ var _headbuttons_headbuttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./headbuttons/headbuttons */ "./src/app/components/headbuttons/headbuttons.ts");
/* harmony import */ var _offer_chat_card_offer_chat_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./offer-chat-card/offer-chat-card */ "./src/app/components/offer-chat-card/offer-chat-card.ts");
/* harmony import */ var _on_route_on_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./on-route/on-route */ "./src/app/components/on-route/on-route.ts");
/* harmony import */ var _request_route_request_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./request-route/request-route */ "./src/app/components/request-route/request-route.ts");
/* harmony import */ var _ride_rate_card_ride_rate_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ride-rate-card/ride-rate-card */ "./src/app/components/ride-rate-card/ride-rate-card.ts");
/* harmony import */ var _route_card_route_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route-card/route-card */ "./src/app/components/route-card/route-card.ts");
/* harmony import */ var _route_route__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./route/route */ "./src/app/components/route/route.ts");
/* harmony import */ var _route_filter_route_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./route-filter/route-filter */ "./src/app/components/route-filter/route-filter.ts");
/* harmony import */ var _route_list_route_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./route-list/route-list */ "./src/app/components/route-list/route-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// made modules;















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _add_route_add_route__WEBPACK_IMPORTED_MODULE_4__["AddRouteModal"],
                _ask_chat_card_ask_chat_card__WEBPACK_IMPORTED_MODULE_5__["AskChatCardComponent"],
                _chat_card_chat_card__WEBPACK_IMPORTED_MODULE_6__["ChatCardComponent"],
                _confirm_route_confirm_route__WEBPACK_IMPORTED_MODULE_7__["ConfirmRouteComponent"],
                _distance_slider_distance_slider__WEBPACK_IMPORTED_MODULE_8__["DistanceSliderComponent"],
                _google_maps_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapComponent"],
                _headbuttons_headbuttons__WEBPACK_IMPORTED_MODULE_10__["HeadbuttonsComponent"],
                _offer_chat_card_offer_chat_card__WEBPACK_IMPORTED_MODULE_11__["OfferChatCardComponent"],
                _on_route_on_route__WEBPACK_IMPORTED_MODULE_12__["OnRouteComponent"],
                _request_route_request_route__WEBPACK_IMPORTED_MODULE_13__["ReqRouteModal"],
                _ride_rate_card_ride_rate_card__WEBPACK_IMPORTED_MODULE_14__["RideRateCardComponent"],
                _route_card_route_card__WEBPACK_IMPORTED_MODULE_15__["RouteCardComponent"],
                _route_route__WEBPACK_IMPORTED_MODULE_16__["RouteComponent"],
                _route_filter_route_filter__WEBPACK_IMPORTED_MODULE_17__["RouteFilterComponent"],
                _route_list_route_list__WEBPACK_IMPORTED_MODULE_18__["RouteListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            exports: [
                _add_route_add_route__WEBPACK_IMPORTED_MODULE_4__["AddRouteModal"],
                _ask_chat_card_ask_chat_card__WEBPACK_IMPORTED_MODULE_5__["AskChatCardComponent"],
                _chat_card_chat_card__WEBPACK_IMPORTED_MODULE_6__["ChatCardComponent"],
                _confirm_route_confirm_route__WEBPACK_IMPORTED_MODULE_7__["ConfirmRouteComponent"],
                _distance_slider_distance_slider__WEBPACK_IMPORTED_MODULE_8__["DistanceSliderComponent"],
                _google_maps_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapComponent"],
                _headbuttons_headbuttons__WEBPACK_IMPORTED_MODULE_10__["HeadbuttonsComponent"],
                _offer_chat_card_offer_chat_card__WEBPACK_IMPORTED_MODULE_11__["OfferChatCardComponent"],
                _on_route_on_route__WEBPACK_IMPORTED_MODULE_12__["OnRouteComponent"],
                _request_route_request_route__WEBPACK_IMPORTED_MODULE_13__["ReqRouteModal"],
                _route_card_route_card__WEBPACK_IMPORTED_MODULE_15__["RouteCardComponent"],
                _route_route__WEBPACK_IMPORTED_MODULE_16__["RouteComponent"],
                _route_filter_route_filter__WEBPACK_IMPORTED_MODULE_17__["RouteFilterComponent"],
                _route_list_route_list__WEBPACK_IMPORTED_MODULE_18__["RouteListComponent"],
                _ride_rate_card_ride_rate_card__WEBPACK_IMPORTED_MODULE_14__["RideRateCardComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/confirm-route/confirm-route.html":
/*!*************************************************************!*\
  !*** ./src/app/components/confirm-route/confirm-route.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the ConfirmRouteComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/confirm-route/confirm-route.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/confirm-route/confirm-route.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmRouteComponent", function() { return ConfirmRouteComponent; });
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

/**
 * Generated class for the ConfirmRouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConfirmRouteComponent = /** @class */ (function () {
    function ConfirmRouteComponent() {
        console.log('Hello ConfirmRouteComponent Component');
        this.text = 'Hello World';
    }
    ConfirmRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-route',
            template: __webpack_require__(/*! ./confirm-route.html */ "./src/app/components/confirm-route/confirm-route.html")
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmRouteComponent);
    return ConfirmRouteComponent;
}());



/***/ }),

/***/ "./src/app/components/distance-slider/distance-slider.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/distance-slider/distance-slider.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\n  <ion-label>Distance from Current Location</ion-label>\n  <ion-range min=\"1\" max=\"50\" step=\"5\" snaps=\"true\" [(ngModel)]=\"distance\">\n    <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"map\"></ion-icon>\n  </ion-range>\n</ion-item>"

/***/ }),

/***/ "./src/app/components/distance-slider/distance-slider.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/distance-slider/distance-slider.ts ***!
  \***************************************************************/
/*! exports provided: DistanceSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceSliderComponent", function() { return DistanceSliderComponent; });
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

/**
 * Generated class for the DistanceSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DistanceSliderComponent = /** @class */ (function () {
    function DistanceSliderComponent() {
        console.log('Hello DistanceSliderComponent Component');
        this.text = 'Hello World';
    }
    DistanceSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distance-slider',
            template: __webpack_require__(/*! ./distance-slider.html */ "./src/app/components/distance-slider/distance-slider.html")
        }),
        __metadata("design:paramtypes", [])
    ], DistanceSliderComponent);
    return DistanceSliderComponent;
}());



/***/ }),

/***/ "./src/app/components/google-maps/google-maps.html":
/*!*********************************************************!*\
  !*** ./src/app/components/google-maps/google-maps.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/google-maps/google-maps.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/google-maps/google-maps.ts ***!
  \*******************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation, Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Network;
var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent(renderer, element, _document) {
        this.renderer = renderer;
        this.element = element;
        this._document = _document;
        this.markers = [];
        this.routeList = [];
        this.mapsLoaded = false;
        this.networkHandler = null;
    }
    GoogleMapComponent.prototype.OnInit = function () {
        this.init().then(function (res) {
            console.log('Google Maps ready.');
        }, function (err) {
            console.log(err);
        });
    };
    GoogleMapComponent.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadSDK().then(function (res) {
                _this.initMap().then(function () {
                    resolve(true);
                }, function (err) {
                    reject(err);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    GoogleMapComponent.prototype.loadSDK = function () {
        var _this = this;
        console.log('Loading Google Maps SDK');
        return new Promise(function (resolve, reject) {
            if (!_this.mapsLoaded) {
                Network.getStatus().then(function (status) {
                    if (status.connected) {
                        _this.injectSDK().then(function (res) {
                            resolve(true);
                        }, function (err) {
                            reject(err);
                        });
                    }
                    else {
                        if (_this.networkHandler == null) {
                            _this.networkHandler = Network.addListener('networkStatusChange', function () {
                                if (status.connected) {
                                    _this.networkHandler.remove();
                                    _this.init().then(function (res) {
                                        console.log('Google Maps ready.');
                                    }, function (err) {
                                        console.log(err);
                                    });
                                }
                            });
                        }
                        reject('Not online');
                    }
                }, function (err) {
                    // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
                    if (navigator.onLine) {
                        _this.injectSDK().then(function (res) {
                            resolve(true);
                        }, function () {
                            reject(err);
                        });
                    }
                    else {
                        reject('Not online');
                    }
                });
            }
            else {
                reject('SDK already loaded');
            }
        });
    };
    GoogleMapComponent.prototype.injectSDK = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            window['mapInit'] = function () {
                _this.mapsLoaded = true;
                resolve(true);
            };
            var script = _this.renderer.createElement('script');
            script.id = 'googleMaps';
            if (_this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
            }
            else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
            }
            _this.renderer.appendChild(_this._document.body, script);
        });
    };
    GoogleMapComponent.prototype.initMap = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Geolocation.getCurrentPosition().then(function (position) {
                console.log(position);
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapOptions = {
                    center: latLng,
                    zoom: 15
                };
                _this.map = new google.maps.Map(_this.element.nativeElement, mapOptions);
                resolve(true);
            }, function (err) {
                reject('Could not initialise map');
            });
        });
    };
    GoogleMapComponent.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    };
    GoogleMapComponent.prototype.addRouteStart = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeStart = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    GoogleMapComponent.prototype.addRouteEnd = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeEnd = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    //    const marker = new google.maps.Marker({
    // map: this.map,
    // animation: google.maps.Animation.DROP,
    // position: latLng
    // });
    GoogleMapComponent.prototype.reqRouteStart = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeStart = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    GoogleMapComponent.prototype.reqRouteEnd = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeEnd = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GoogleMapComponent.prototype, "apiKey", void 0);
    GoogleMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-maps',
            template: __webpack_require__(/*! ./google-maps.html */ "./src/app/components/google-maps/google-maps.html")
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/components/headbuttons/headbuttons.html":
/*!*********************************************************!*\
  !*** ./src/app/components/headbuttons/headbuttons.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <distance-slider></distance-slider> -->\n\n<ion-buttons>\n  <div>\n    <!-- [(user)]=\"driver\" expand=\"full\" for button-->\n    <ion-button padding-right round size=\"large\" icon-only (click)=\"presentAddPopover($addRoute)\">\n      <ion-icon icon-start name=\"add\"></ion-icon>\n      Add Route\n    </ion-button>\n  </div>\n  <div>\n    <!-- [(user)]=\"rider\" expand=\"full\" for button -->\n    <ion-button round size=\"large\" icon-only (click)=\"presentReqPopover($reqRoute)\">\n      Seek Route\n      <ion-icon name=\"swap\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-buttons>"

/***/ }),

/***/ "./src/app/components/headbuttons/headbuttons.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/headbuttons/headbuttons.ts ***!
  \*******************************************************/
/*! exports provided: HeadbuttonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadbuttonsComponent", function() { return HeadbuttonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_route_add_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-route/add-route */ "./src/app/components/add-route/add-route.ts");
/* harmony import */ var _request_route_request_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-route/request-route */ "./src/app/components/request-route/request-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




// import { User } from '../../../../node_modules/firebase';
var HeadbuttonsComponent = /** @class */ (function () {
    function HeadbuttonsComponent(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    // public user: User;
    HeadbuttonsComponent.prototype.presentAddModal = function (addRoute) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _add_route_add_route__WEBPACK_IMPORTED_MODULE_2__["AddRouteModal"],
                            componentProps: { addRoute: addRoute }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeadbuttonsComponent.prototype.presentReqModal = function (reqRoute) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _request_route_request_route__WEBPACK_IMPORTED_MODULE_3__["ReqRouteModal"],
                            componentProps: { reqRoute: reqRoute }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeadbuttonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headbuttons',
            template: __webpack_require__(/*! ./headbuttons.html */ "./src/app/components/headbuttons/headbuttons.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], HeadbuttonsComponent);
    return HeadbuttonsComponent;
}());



/***/ }),

/***/ "./src/app/components/offer-chat-card/offer-chat-card.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/offer-chat-card/offer-chat-card.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the OfferChatCardComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/offer-chat-card/offer-chat-card.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/offer-chat-card/offer-chat-card.ts ***!
  \***************************************************************/
/*! exports provided: OfferChatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferChatCardComponent", function() { return OfferChatCardComponent; });
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

/**
 * Generated class for the OfferChatCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OfferChatCardComponent = /** @class */ (function () {
    function OfferChatCardComponent() {
        console.log('Hello OfferChatCardComponent Component');
        this.text = 'Hello World';
    }
    OfferChatCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer-chat-card',
            template: __webpack_require__(/*! ./offer-chat-card.html */ "./src/app/components/offer-chat-card/offer-chat-card.html")
        }),
        __metadata("design:paramtypes", [])
    ], OfferChatCardComponent);
    return OfferChatCardComponent;
}());



/***/ }),

/***/ "./src/app/components/on-route/on-route.html":
/*!***************************************************!*\
  !*** ./src/app/components/on-route/on-route.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the OnRouteComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/on-route/on-route.ts":
/*!*************************************************!*\
  !*** ./src/app/components/on-route/on-route.ts ***!
  \*************************************************/
/*! exports provided: OnRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnRouteComponent", function() { return OnRouteComponent; });
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

/**
 * Generated class for the OnRouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OnRouteComponent = /** @class */ (function () {
    function OnRouteComponent() {
        console.log('Hello OnRouteComponent Component');
        this.text = 'Hello World';
    }
    OnRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-on-route',
            template: __webpack_require__(/*! ./on-route.html */ "./src/app/components/on-route/on-route.html")
        }),
        __metadata("design:paramtypes", [])
    ], OnRouteComponent);
    return OnRouteComponent;
}());



/***/ }),

/***/ "./src/app/components/request-route/request-route.html":
/*!*************************************************************!*\
  !*** ./src/app/components/request-route/request-route.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the RequestRouteComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/request-route/request-route.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/request-route/request-route.ts ***!
  \***********************************************************/
/*! exports provided: ReqRouteModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqRouteModal", function() { return ReqRouteModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReqRouteModal = /** @class */ (function () {
    function ReqRouteModal(alertCtrl, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.routeList = [];
    }
    ReqRouteModal.prototype.reqRouteStart = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var reqRouteStart = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    ReqRouteModal.prototype.reqRouteEnd = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var routeEnd = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    ReqRouteModal.prototype.reqRoute = function (reqRouteStart, reqRouteEnd) {
        var routeStart = reqRouteStart.google.maps.Animation.DROP;
        var routeEnd = reqRouteEnd.google.maps.Animation.DROP;
    };
    ReqRouteModal.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    ReqRouteModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-route',
            template: __webpack_require__(/*! ./request-route.html */ "./src/app/components/request-route/request-route.html"),
            template: "\n    <ion-list>\n      <ion-list-header><ion-label>Ionic</ion-label></ion-list-header>\n      <ion-item (click)=\"close()\"><ion-label>Learn Ionic</ion-label></ion-item>\n      <ion-item (click)=\"close()\"><ion-label>Documentation</ion-label></ion-item>\n      <ion-item (click)=\"close()\"><ion-label>Showcase</ion-label></ion-item>\n      <ion-item (click)=\"close()\"><ion-label>GitHub Repo</ion-label></ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], ReqRouteModal);
    return ReqRouteModal;
}());



/***/ }),

/***/ "./src/app/components/ride-rate-card/ride-rate-card.html":
/*!***************************************************************!*\
  !*** ./src/app/components/ride-rate-card/ride-rate-card.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the RideRateCardComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/ride-rate-card/ride-rate-card.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ride-rate-card/ride-rate-card.ts ***!
  \*************************************************************/
/*! exports provided: RideRateCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideRateCardComponent", function() { return RideRateCardComponent; });
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

/**
 * Generated class for the RideRateCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RideRateCardComponent = /** @class */ (function () {
    function RideRateCardComponent() {
        console.log('Hello RideRateCardComponent Component');
        this.text = 'Hello World';
    }
    RideRateCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ride-rate-card',
            template: __webpack_require__(/*! ./ride-rate-card.html */ "./src/app/components/ride-rate-card/ride-rate-card.html")
        }),
        __metadata("design:paramtypes", [])
    ], RideRateCardComponent);
    return RideRateCardComponent;
}());



/***/ }),

/***/ "./src/app/components/route-card/route-card.html":
/*!*******************************************************!*\
  !*** ./src/app/components/route-card/route-card.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the RouteCardComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/route-card/route-card.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/route-card/route-card.ts ***!
  \*****************************************************/
/*! exports provided: RouteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteCardComponent", function() { return RouteCardComponent; });
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

/**
 * Generated class for the RouteCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RouteCardComponent = /** @class */ (function () {
    function RouteCardComponent() {
        console.log('Hello RouteCardComponent Component');
        this.text = 'Hello World';
    }
    RouteCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-card',
            template: __webpack_require__(/*! ./route-card.html */ "./src/app/components/route-card/route-card.html")
        }),
        __metadata("design:paramtypes", [])
    ], RouteCardComponent);
    return RouteCardComponent;
}());



/***/ }),

/***/ "./src/app/components/route-filter/route-filter.html":
/*!***********************************************************!*\
  !*** ./src/app/components/route-filter/route-filter.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <!-- <ion-tabs>\n    <shortroute></shortroute>\n    <longroute></longroute>\n  </ion-tabs> -->\n  <ion-card>\n    <ion-buttons>\n\n      <!-- <ion-row>\n          <ion-col col-5></ion-col>\n          <ion-col col-3> -->\n      <ion-button padding-left size=\"large\" full (click)=\"hide()\">\n        <ion-list-header>\n          <ion-label>\n            Filter\n          </ion-label>\n        </ion-list-header>\n      </ion-button>\n      <!-- </ion-col>\n          <ion-col col-4></ion-col>\n        </ion-row> -->\n\n    </ion-buttons>\n\n    <ion-card-content #cc>\n      <div *ngIf=\"hideMe\">\n        <ion-row inline>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-icon name=\"pin\" item-start></ion-icon>\n              <ion-label>Location</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-item interface=\"popover\">\n              <ion-icon name=\"people\" item-start></ion-icon>\n              <ion-label>Passengers</ion-label>\n              <ion-select [(ngModel)]=\"passengers\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <ion-item>\n              <ion-label>Start Time</ion-label>\n              <ion-datetime displayFormat=\"h:mm A\" pickerFormat=\"h mm A\" [(ngModel)]=\"myDate\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-item>\n              <ion-icon name=\"cash\" item-start></ion-icon>\n              <ion-label>Compensation</ion-label>\n              <ion-input type=\"number\" [value]=\"$>=0\">>\n              </ion-input>\n              <!-- Minimum Require $ -->\n              <ion-select [(ngModel)]=\"currency\">\n                <ion-select-option value=\"cur\">$</ion-select-option>\n                <ion-select-option value=\"btc\">₿</ion-select-option>\n                <ion-select-option value=\"eth\">Ξ</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\">\n\n          </ion-col>\n          <!--This data comes from past/completed ride list, a data attribute of drivers-->\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label>Driver Rating</ion-label>\n              <ion-range [(ngModel)]=\"driverrating\">\n                <ion-icon slot=\"start\" small name=\"star-outline\"></ion-icon>\n                <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n              </ion-range>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- <headbuttons></headbuttons> -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-grid>"

/***/ }),

/***/ "./src/app/components/route-filter/route-filter.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/route-filter/route-filter.ts ***!
  \*********************************************************/
/*! exports provided: RouteFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteFilterComponent", function() { return RouteFilterComponent; });
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

var RouteFilterComponent = /** @class */ (function () {
    function RouteFilterComponent() {
    }
    RouteFilterComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
    };
    RouteFilterComponent.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    RouteFilterComponent.prototype.toggleFilter = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cc'),
        __metadata("design:type", Object)
    ], RouteFilterComponent.prototype, "cardContent", void 0);
    RouteFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-filter',
            template: __webpack_require__(/*! ./route-filter.html */ "./src/app/components/route-filter/route-filter.html")
        }),
        __metadata("design:paramtypes", [])
    ], RouteFilterComponent);
    return RouteFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/route-list/route-list.html":
/*!*******************************************************!*\
  !*** ./src/app/components/route-list/route-list.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the RouteListComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/route-list/route-list.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/route-list/route-list.ts ***!
  \*****************************************************/
/*! exports provided: RouteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteListComponent", function() { return RouteListComponent; });
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

var RouteListComponent = /** @class */ (function () {
    function RouteListComponent() {
        console.log('Hello RouteListComponent Component');
        this.text = 'Hello World';
    }
    RouteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-list',
            template: __webpack_require__(/*! ./route-list.html */ "./src/app/components/route-list/route-list.html")
        }),
        __metadata("design:paramtypes", [])
    ], RouteListComponent);
    return RouteListComponent;
}());



/***/ }),

/***/ "./src/app/components/route/route.html":
/*!*********************************************!*\
  !*** ./src/app/components/route/route.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Generated template for the RouteComponent component -->\n<div>\n  {{text}}\n</div>\n"

/***/ }),

/***/ "./src/app/components/route/route.ts":
/*!*******************************************!*\
  !*** ./src/app/components/route/route.ts ***!
  \*******************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
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

/**
 * Generated class for the RouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RouteComponent = /** @class */ (function () {
    function RouteComponent() {
        console.log('Hello RouteComponent Component');
        this.text = 'Hello World';
    }
    RouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.html */ "./src/app/components/route/route.html")
        }),
        __metadata("design:paramtypes", [])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.userService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigateByUrl('/login');
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/guards.module.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/guards.module.ts ***!
  \*****************************************/
/*! exports provided: GuardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardsModule", function() { return GuardsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GuardsModule = /** @class */ (function () {
    function GuardsModule() {
    }
    GuardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]
            ]
        })
    ], GuardsModule);
    return GuardsModule;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService, AFSQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFSQuery", function() { return AFSQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs, storage) {
        this.afs = afs;
        this.storage = storage;
    }
    FirebaseService.prototype.doc = function (path) {
        return this.afs.doc("" + path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (change) {
            return Object.assign({}, change.payload.data(), { id: change.payload.id });
        }));
    };
    FirebaseService.prototype.collection = function (path, query) {
        return this.afs.collection("" + path, function (ref) { return query ? query.exec(ref) : ref; }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (c) { return Object.assign({}, c.payload.doc.data(), { id: c.payload.doc.id }); });
        }));
    };
    FirebaseService.prototype.add = function (path, data) {
        var id = this.generatedId;
        return this.afs.doc(path + "/" + id).set(__assign({ id: id }, data));
    };
    FirebaseService.prototype.set = function (path, id, data, merge) {
        if (merge === void 0) { merge = false; }
        return this.afs.doc(path + "/" + id).set(data, { merge: merge });
    };
    FirebaseService.prototype.update = function (path, id, data) {
        return this.afs.doc(path + "/" + id).update(data);
    };
    FirebaseService.prototype.delete = function (path, id) {
        return this.afs.doc(path + "/" + id).delete();
    };
    FirebaseService.prototype.deleteCol = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var batch, qs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batch = this.afs.firestore.batch();
                        return [4 /*yield*/, this.afs.collection(path).ref.get()];
                    case 1:
                        qs = _a.sent();
                        qs.forEach(function (doc) { return batch.delete(doc.ref); });
                        return [2 /*return*/, batch.commit()];
                }
            });
        });
    };
    Object.defineProperty(FirebaseService.prototype, "generatedId", {
        get: function () {
            return this.afs.createId();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "timestamp", {
        get: function () {
            return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.serverTimestamp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "batch", {
        get: function () {
            return this.afs.firestore.batch();
        },
        enumerable: true,
        configurable: true
    });
    FirebaseService.prototype.uploadFile = function (file, fileName, path) {
        if (path === void 0) { path = 'images'; }
        return this.storage.upload(path + "/" + fileName, file);
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], FirebaseService);
    return FirebaseService;
}());

var AFSQuery = /** @class */ (function () {
    function AFSQuery() {
    }
    AFSQuery.prototype.exec = function (ref) {
        var query = ref;
        if (this.where) {
            for (var _i = 0, _a = this.where; _i < _a.length; _i++) {
                var w = _a[_i];
                query = query.where(w[0], w[1], w[2]);
            }
        }
        if (this.orderBy)
            query = query.orderBy(this.orderBy[0], this.orderBy[1]);
        if (this.limit)
            query = query.limit(this.limit);
        if (this.startAt)
            query = query.startAt(this.startAt);
        if (this.startAfter)
            query = query.startAfter(this.startAfter);
        if (this.endAt)
            query = query.endAt(this.endAt);
        if (this.endBefore)
            query = query.endBefore(this.endBefore);
        return query;
    };
    return AFSQuery;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(afs, afAuth) {
        var _this = _super.call(this, afs) || this;
        _this.afAuth = afAuth;
        return _this;
    }
    UserService.prototype.signInWithProvider = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (res) {
            return _this.updateUser(res.user, res.additionalUserInfo.isNewUser);
        });
    };
    Object.defineProperty(UserService.prototype, "currentUser", {
        get: function () {
            var _this = this;
            return this.afAuth.authState
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (auth) { return auth ? _this.getUserById(auth.uid) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); }));
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUsers = function (filter) {
        var query = new _firebase_service__WEBPACK_IMPORTED_MODULE_1__["AFSQuery"]();
        query.limit = 10;
        if (filter) {
            query.startAfter = filter.startAfter;
            query.limit = filter.limit;
        }
        query.orderBy = ['createdAt', 'desc'];
        return _super.prototype.collection.call(this, 'users', query);
    };
    UserService.prototype.getUserById = function (userId) {
        return this.doc("users/" + userId);
    };
    UserService.prototype.updateUser = function (user, isNewUser) {
        if (isNewUser) {
            return Promise.resolve();
        }
        var newUser = {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        var provider = user.providerData && user.providerData[0];
        if (provider) {
            newUser.provider = Object.assign({}, provider);
            if (provider.providerId == 'facebook.com') {
                newUser.photoURL = "https://graph.facebook.com/" + provider.uid + "/picture?type=square";
            }
        }
        return this.set('users', user.uid, newUser);
    };
    UserService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}(_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCuOnVOU7Fp5gIAOU1OkSSWexChnEvemSI',
        authDomain: 'routeshareio4.firebaseapp.com',
        databaseURL: 'https://routeshareio4.firebaseio.com',
        projectId: 'routeshareio4',
        storageBucket: 'routeshareio4.appspot.com',
        messagingSenderId: '335568464434'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\public\routeshareio4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map