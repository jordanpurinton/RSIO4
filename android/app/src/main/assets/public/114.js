(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/68njmcvy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/68njmcvy.js ***!
  \***********************************************************/
/*! exports provided: IonToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToggle", function() { return Toggle; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-db5a015e.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-db5a015e.js");
/* harmony import */ var _chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-76b36062.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js");
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-f7b6af08.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((i=i.apply(e,t||[])).next())})},__generator=undefined&&undefined.__generator||function(e,t){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};var Toggle=function(){function e(){this.inputId="ion-tg-"+toggleIds++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value})},e.prototype.disabledChanged=function(){this.ionStyle.emit({"interactive-disabled":this.disabled}),this.gesture&&(this.gesture.disabled=this.disabled)},e.prototype.componentWillLoad=function(){this.ionStyle=Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.ionStyle)},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n;return __generator(this,function(i){switch(i.label){case 0:return(e=this.nativeInput.closest("ion-item"))&&(t=e.querySelector("ion-label"))&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id)),n=this,[4,__webpack_require__.e(/*! import() */ 123).then(__webpack_require__.bind(null, /*! ./gesture.js */ "./node_modules/@ionic/core/dist/esm/es5/gesture.js"))];case 1:return n.gesture=i.sent().create({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:30,threshold:0,onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabledChanged(),[2]}})})},e.prototype.onDragStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onDragMove=function(e){var t=e.currentX;shouldToggle(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,Object(_chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_1__["d"])())},e.prototype.onDragEnd=function(e){var t=e.currentX-this.pivotX;shouldToggle(this.checked,t,4)&&(this.checked=!this.checked,Object(_chunk_db5a015e_js__WEBPACK_IMPORTED_MODULE_1__["d"])()),this.activated=!1,this.nativeInput.focus()},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.color),{"in-item":Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_3__["d"])(".item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){var e=this;return Object(_chunk_76b36062_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,this.name,this.value,this.disabled),[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"toggle-icon"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"toggle-inner"})),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255);-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--checked-background:var(--ion-color-base);--checked-knob:var(--ion-color-base);-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(:focus){outline:0}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-background-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));content:\"\"}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;background-color:var(--ion-item-background-color,var(--ion-background-color,#fff));-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host(.toggle-checked) .toggle-icon{background-color:var(--checked-knob)}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host(.toggle-disabled){opacity:.3;pointer-events:none}:host(.in-item[slot]){margin:0;padding:6px 8px 5px 16px}:host(.in-item[slot=start]){padding:6px 16px 5px 0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function shouldToggle(e,t,n){var i="rtl"===document.dir;return e?!i&&n>t||i&&-n<t:!i&&-n<t||i&&n>t}var toggleIds=0;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-76b36062.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deferEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pointerCoord; });
function hasShadowDom(e) { return !!e.shadowRoot && !!e.attachShadow; }
function renderHiddenInput(e, n, t, o) { if (hasShadowDom(e)) {
    var r = e.querySelector("input.aux-input");
    r || ((r = e.ownerDocument.createElement("input")).type = "hidden", r.classList.add("aux-input"), e.appendChild(r)), r.disabled = o, r.name = n, r.value = t;
} }
function clamp(e, n, t) { return Math.max(e, Math.min(n, t)); }
function assert(e, n) { if (!e) {
    var e_1 = "ASSERT: " + n;
    throw console.error(e_1), new Error(e_1);
} }
function now(e) { return e.timeStamp || Date.now(); }
function pointerCoord(e) { if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
        var e_2 = n[0];
        return { x: e_2.clientX, y: e_2.clientY };
    }
    if (void 0 !== e.pageX)
        return { x: e.pageX, y: e.pageY };
} return { x: 0, y: 0 }; }
function isEndSide(e, n) { var t = "rtl" === e.document.dir; switch (n) {
    case "start": return t;
    case "end": return !t;
    default: throw new Error("\"" + n + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
} }
function deferEvent(e) { return debounceEvent(e, 0); }
function debounceEvent(e, n) { var t = e._original || e; return { _original: e, emit: debounce(t.emit.bind(t), n) }; }
function debounce(e, n) {
    if (n === void 0) { n = 0; }
    var t;
    return function () {
        var o = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            o[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [e, n].concat(o));
    };
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-db5a015e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-db5a015e.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection() { var n = window.TapticEngine; n && n.selection(); }
function hapticSelectionStart() { var n = window.TapticEngine; n && n.gestureSelectionStart(); }
function hapticSelectionChanged() { var n = window.TapticEngine; n && n.gestureSelectionChanged(); }
function hapticSelectionEnd() { var n = window.TapticEngine; n && n.gestureSelectionEnd(); }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createThemedClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getClassMap; });
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
function hostContext(e, t) { return !!t.closest(e); }
function createColorClasses(e) { var _a; return e ? (_a = { "ion-color": !0 }, _a["ion-color-" + e] = !0, _a) : null; }
function createThemedClasses(e, t) { var _a; return _a = {}, _a[t] = !0, _a[t + "-" + e] = !!e, _a; }
function getClassList(e) { return e ? (Array.isArray(e) ? e : e.split(" ")).filter(function (e) { return null != e; }).map(function (e) { return e.trim(); }).filter(function (e) { return "" !== e; }) : []; }
function getClassMap(e) { var t = {}; return getClassList(e).forEach(function (e) { return t[e] = !0; }), t; }
function openURL(e, t, r, s) {
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(t && "#" !== t[0] && -1 === t.indexOf("://"))) return [3 /*break*/, 2];
                o = e.document.querySelector("ion-router");
                if (!o) return [3 /*break*/, 2];
                r && r.preventDefault();
                return [4 /*yield*/, o.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), o.push(t, s))];
            case 2: return [2 /*return*/, Promise.resolve()];
        }
    }); });
}



/***/ })

}]);
//# sourceMappingURL=114.js.map