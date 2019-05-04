(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'oj-client';
        auth.handleAuthentication();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.auth.renewTokens();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('auth')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_collaboration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/collaboration.service */ "./src/app/services/collaboration.service.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/new-problem/new-problem.component */ "./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/callback/callback.component */ "./src/app/components/callback/callback.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/editor/editor.component */ "./src/app/components/editor/editor.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_7__["ProblemListComponent"],
                _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProblemDetailComponent"],
                _components_new_problem_new_problem_component__WEBPACK_IMPORTED_MODULE_13__["NewProblemComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _components_callback_callback_component__WEBPACK_IMPORTED_MODULE_15__["CallbackComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_17__["EditorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [{
                    provide: 'data',
                    useClass: _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]
                },
                {
                    provide: 'auth',
                    useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
                },
                {
                    provide: 'authGuard',
                    useClass: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]
                },
                {
                    provide: 'collaboration',
                    useClass: _services_collaboration_service__WEBPACK_IMPORTED_MODULE_11__["CollaborationService"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/problem-list/problem-list.component */ "./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/problem-detail/problem-detail.component */ "./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");





var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: _components_problem_list_problem_list_component__WEBPACK_IMPORTED_MODULE_1__["ProblemListComponent"],
    },
    {
        path: 'problems/:id',
        component: _components_problem_detail_problem_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProblemDetailComponent"],
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: '**',
        redirectTo: 'problems',
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/callback/callback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/callback/callback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/callback/callback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/callback/callback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"../../../assets/loading.svg\" alt=\"loading\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/components/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/components/callback/callback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/editor/editor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen {\n  #editor {\n    height: 600px;\n  }\n\n  header.btn {\n    margin: 0 5px;\n  }\n\n  footer.btn {\n    margin: 0 5px;\n  }\n\n  .editor-footer, .editor-header {\n    margin: 10px 0;\n  }\n\n  .cursor {\n    background: rgba(0, 250, 0, 0.5);\n    z-index: 40;\n    width: 2px!important;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIHtcbiAgI2VkaXRvciB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxuXG4gIGhlYWRlci5idG4ge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cblxuICBmb290ZXIuYnRuIHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG5cbiAgLmVkaXRvci1mb290ZXIsIC5lZGl0b3ItaGVhZGVyIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuXG4gIC5jdXJzb3Ige1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMjUwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDQwO1xuICAgIHdpZHRoOiAycHghaW1wb3J0YW50O1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/editor/editor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"editor-header\">\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <label class=\"input-group-text\" for=\"inputGroupSelect01\">Options</label>\n      </div>\n      <select class=\"form-control pull-left lang-select\" name=\"language\" id=\"inputGroupSelect\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\" >\n        <option selected>Choose...</option>\n        <option *ngFor=\"let language of languages\" [value]=\"language\">\n          {{language}}\n        </option>\n      </select>\n    </div>\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n      Reset\n    </button>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            You will lose all the changes in the window, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div id=\"editor\"></div>\n\n  <footer class=\"editor-footer\">\n    <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit Solution</button>\n  </footer>\n\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.languages = ['Java', 'C++', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': 'public class Example {\n' +
                '\tpublic static void main(String[] args) {\n' +
                '\t\t// Type your code here\n' +
                '\t}\n' +
                '}',
            'C++': '#include <iostream>\n' +
                '\tusing namespace std:\n' +
                '\tint main() {\n' +
                '\t\t//Type your code here\n' +
                '\t\treturn 0;\n' +
                '\t}',
            'Python': 'class Solution:\n' +
                '\tdef example():\n' +
                '\t\t# Write your Python code here'
        };
        this.languageMode = {
            'Java': 'java',
            'C++': 'c_cpp',
            'Python': 'python'
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
            console.log(params);
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        document.getElementsByTagName('textarea')[0].focus();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange !== e) {
                _this.collaboration.change(JSON.stringify((e)));
            }
        });
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode('ace/mode/' + this.languageMode[this.language]);
        this.editor.setValue(this.defaultContent[this.language]);
    };
    EditorComponent.prototype.submit = function () {
        var userCode = this.editor.getValue();
        console.log(userCode);
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/editor/editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('collaboration')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\n  .animate {\n    animation-duration: 0.3s;\n    -webkit-animation-duration: 0.3s;\n    animation-fill-mode: both;\n    -webkit-animation-fill-mode: both;\n  }\n}\n\n@keyframes slideIn {\n  0% {\n    -webkit-transform: translateY(1rem);\n            transform: translateY(1rem);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform:translateY(0rem);\n            transform:translateY(0rem);\n    opacity: 1;\n  }\n  0% {\n    -webkit-transform: translateY(1rem);\n            transform: translateY(1rem);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes slideIn {\n  0% {\n    -webkit-transform: transform;\n    -webkit-opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0);\n    -webkit-opacity: 1;\n  }\n  0% {\n    -webkit-transform: translateY(1rem);\n    -webkit-opacity: 0;\n  }\n}\n\n.slideIn {\n  -webkit-animation-name: slideIn;\n  animation-name: slideIn;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7RUFDQTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1DQUFtQztJQUNuQyxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuYW5pbWF0ZSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgwcmVtKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtd2Via2l0LW9wYWNpdHk6IDE7XG4gIH1cbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uc2xpZGVJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\">\n    <a class=\"navbar-brand mb-0 h1\" href=\"#\">{{title}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" *ngIf=\"!isAuthenticated()\">\n          <a class=\"nav-link\" (click)=\"login()\">Log In</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isAuthenticated()\">\n          <a class=\"nav-link\" (click)=\"login()\">Sign Up</a>\n        </li>\n        <li class=\"nav-item dropdown\" *ngIf=\"isAuthenticated()\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{username}}\n          </a>\n          <div class=\"dropdown-menu animate slideIn\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">My Submissions</a>\n            <a class=\"dropdown-item\" href=\"#\">My Favorites</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">My Profile</a>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n          </div>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.title = "Let's Code";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userNameChange$.subscribe(function (username) { return _this.username = username; });
    };
    NavbarComponent.prototype.login = function () {
        this.auth.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.auth.isAuthenticated();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('auth')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvYmxlbS9uZXctcHJvYmxlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvYmxlbS9uZXctcHJvYmxlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"auth.isAuthenticated() && auth.userHasScopes(['write:messages'])\">-->\n<div *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\" name=\"problemName\" placeholder=\"Enter Problem Name\" [(ngModel)]=\"newProblem.name\" required=\"true\">\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea type=\"text\" rows=\"3\" class=\"form-control\" id=\"problemDesc\" name=\"problemDesc\" placeholder=\"Enter Problem Description\" [(ngModel)]=\"newProblem.desc\" required=\"true\"></textarea>\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Problem Difficulty</label>\n      <select type=\"text\" class=\"form-control\" id=\"difficulty\" name=\"difficulty\" [(ngModel)]=\"newProblem.difficulty\"  required=\"true\">\n        <option value=\"default\" disabled selected>Select Difficulty</option>\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-problem/new-problem.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProblemComponent", function() { return NewProblemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'default',
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.difficulties = ['Easy', 'Medium', 'Hard', 'Super'];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-problem',
            template: __webpack_require__(/*! ./new-problem.component.html */ "./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__(/*! ./new-problem.component.css */ "./src/app/components/new-problem/new-problem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('data')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('authGuard')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvYmxlbS1kZXRhaWwvcHJvYmxlbS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-4\">\n      <div>\n        <h2>\n          {{problem.id}}. {{problem.name}}\n        </h2>\n        <p>\n          {{problem.desc}}\n        </p>\n      </div>\n    </div>\n    <div class=\"hidden-xs col-sm-12 col-md-8\">\n      <app-editor></app-editor>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/problem-detail/problem-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProblemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemDetailComponent", function() { return ProblemDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var key = 'id';
            _this.data.getProblem(+params[key])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problem-detail',
            template: __webpack_require__(/*! ./problem-detail.component.html */ "./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__(/*! ./problem-detail.component.css */ "./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('data')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.badge.difficulty {\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9ibGVtLWxpc3QvcHJvYmxlbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2JsZW0tbGlzdC9wcm9ibGVtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWZmaWN1bHR5IHtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5iYWRnZS5kaWZmaWN1bHR5IHtcbiAgY29sb3I6ICNmYmZkZmE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmRpZmYtZWFzeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MmViZjQ7XG59XG5cbi5kaWZmLW1lZGl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmNmNWM7XG59XG5cbi5kaWZmLWhhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQwZDFlO1xufVxuXG4uZGlmZi1zdXBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDE2ZTI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n    <a class=\"list-group-item list-group-item-action\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems', problem.id]\" >\n      <span class=\"{{'pull-left badge difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty}}</span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/problem-list/problem-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProblemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemListComponent", function() { return ProblemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(data) {
        this.data = data;
        this.problems = [];
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.data.getProblems().subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.ngOnDestory = function () {
        this.subscriptionProblems.unsubscribe();
    };
    ProblemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-problem-list',
            template: __webpack_require__(/*! ./problem-list.component.html */ "./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__(/*! ./problem-list.component.css */ "./src/app/components/problem-list/problem-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('data')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-area img {\n  max-width: 150px;\n  margin-bottom: 20px;\n}\n\n.panel-body h3 {\n  margin-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtYXJlYSBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGFuZWwtYm9keSBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Profile</h3>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
        console.log(this.profile);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('auth')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        var key = 'https://myapp.example.com/authorization';
        return !!(typeof (this.auth.userProfile) !== 'undefined'
            && this.auth.isAuthenticated()
            && this.auth.userProfile[key].roles.includes('admin'));
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('auth')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.requestedScopes = 'openid profile';
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["WebAuth"]({
            clientID: 'iqoGKUlDacORUUuYaT-cMKjR5v_dFsVb',
            domain: 'dev-2ewo6apy.auth0.com',
            responseType: 'token id_token',
            redirectUri: 'http://localhost:3000/callback',
            scope: this.requestedScopes
        });
        this.userNameChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) { return _this.observer = obs; });
        this._idToken = '';
        this._accessToken = '';
        this._expiresAt = 0;
    }
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "idToken", {
        get: function () {
            return this._idToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.auth0.authorize();
        console.log(this.userProfile);
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.localLogin(authResult);
                _this.getProfile(function (error, profile) {
                    _this.userProfile = profile;
                });
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.localLogin = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = (authResult.expiresIn * 1000) + Date.now();
        localStorage.setItem('expires_at', JSON.stringify(expiresAt));
        this._accessToken = authResult.accessToken;
        this._idToken = authResult.idToken;
        this._expiresAt = expiresAt;
    };
    AuthService.prototype.renewTokens = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.localLogin(authResult);
            }
            else if (err) {
                alert("Could not get a new token (" + err.error + ": " + err.error_description + ").");
                _this.logout();
            }
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time
        this._accessToken = '';
        this._idToken = '';
        this._expiresAt = 0;
        this.auth0.logout({
            returnTo: window.location.origin
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        // const expiresAt = localStorage.getItem('expires_at');
        return (this._accessToken && Date.now()) < this._expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var _this = this;
        if (!this._accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(this._accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
                localStorage.setItem('profile', profile);
                _this.observer.next(profile.nickname);
            }
            cb(err, profile);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/collaboration.service.ts ***!
  \***************************************************/
/*! exports provided: CollaborationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaborationService", function() { return CollaborationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId' + sessionId });
        this.collaborationSocket.on('change', function (delta) {
            console.log('collaboration: editor changes by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on('message', function (message) {
            console.log('received' + message);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.problemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this.problemsSource.next(res);
        })
            .catch(this.handleError);
        return this.problemsSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('/api/v1/problems', problem, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/litianlun/CollaborativeOJ/week3/oj-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map