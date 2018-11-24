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

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" *ngIf=\"!error\" [formGroup]=\"addUser\" (ngSubmit)=\"onSubmit()\">\n  <h5>Add User</h5>\n  <div class=\"form-group\">\n    <label for=\"name\">Full Name</label>\n    <input type=\"text\" formControlName=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name\"\n    [ngClass]=\"{'is-invalid' : addUser.get('name').touched &&\n       (addUser.get('name').errors?.minlength || addUser.get('name').errors?.required || addUser.get('name').errors?.backend)}\">\n    <div *ngIf=\"addUser.get('name').touched\" class=\"form-text text-danger\">\n      <span *ngIf=\"addUser.get('name').errors?.required\">This Field can't be empty.</span>\n      <span *ngIf=\"addUser.get('name').errors?.minlength\">\n        Name must {{addUser.get('name').errors?.minlength.requiredLength}} or more characters long.\n      </span>\n      <span *ngIf=\"addUser.get('name').errors?.backend\">{{addUser.get('name').errors?.backend.message}}.</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email\"\n      [ngClass]=\"{'is-invalid' : addUser.get('email').touched &&\n            (addUser.get('email').errors?.email || addUser.get('email').errors?.required || addUser.get('email').errors?.backend)}\">\n    <div class=\"form-text text-danger\" *ngIf=\"addUser.get('email').touched\" >\n      <span *ngIf=\"addUser.get('email').errors?.email\">Please enter a valid email address.</span>\n      <span *ngIf=\"addUser.get('email').errors?.required\">This field is required.</span>\n      <span *ngIf=\"addUser.get('email').errors?.backend\">{{addUser.get('email').errors?.backend.message}}.</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"about\">Describe your personality</label>\n    <textarea id=\"about\" class=\"form-control\" formControlName=\"about\" rows=\"7\" placeholder=\"I am very good at Programming\"\n    [ngClass]=\"{'is-invalid' : addUser.get('about').touched &&\n      (addUser.get('about').errors?.minlength || addUser.get('about').errors?.required || addUser.get('about').errors?.backend)}\"></textarea>\n    <div *ngIf=\"addUser.get('about').touched\" class=\"form-text text-danger\">\n      <span *ngIf=\"addUser.get('about').errors?.required\">This field is required.</span>\n      <span *ngIf=\"addUser.get('about').errors?.minlength\">\n        Description must be  {{ addUser.get('about').errors?.minlength.requiredLength }} or more characters long.\n      </span>\n      <span *ngIf=\"addUser.get('about').errors?.backend\">{{addUser.get('about').errors?.backend.message}}.</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"twitterURL\">Twitter Profile URL</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">https://twitter.com/</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" id=\"twitterURL\" formControlName=\"twitterURL\" placeholder=\"Username\"\n        [ngClass]=\"{'is-invalid': addUser.get('twitterURL').touched && addUser.get('twitterURL').errors?.backend}\">\n    </div>\n    <div class=\"text-danger form-text\" *ngIf=\"addUser.get('twitterURL').errors?.backend\">\n      {{ addUser.get('twitterURL').errors?.backend.message }}.\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"gplusURL\">Google Profile URL</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroupPrepend3\">https://plus.google.com/</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" id=\"gplusURL\" formControlName=\"gplusURL\" placeholder=\"Username\" [ngClass]=\"{'is-invalid': addUser.get('gplusURL').touched && addUser.get('gplusURL').errors?.backend}\">\n\n    </div>\n    <div class=\"text-danger form-text\" *ngIf=\"addUser.get('gplusURL').errors?.backend\">\n      {{ addUser.get('gplusURL').errors?.backend.message }}.\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!addUser.valid\">Submit</button>\n</form>\n\n<div class=\"container\" *ngIf=\"error\">\n  {{error | json}}\n</div>\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.addUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(200)
            ]),
            gplusURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            twitterURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        }); // Form Group with some formcontrol
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.register(this.addUser.value) // calls register method from auth service
            .then(function (resp) {
            _this.router.navigateByUrl(''); // If user is added successfully, redirects to  homepage
        }).catch(function (error) {
            if (error.status === 422) { // Handle validation errors,
                error.error.data.forEach(function (err) {
                    _this.addUser.get(err.param).markAsTouched(); // Marks the field as touched
                    _this.addUser.get(err.param).setErrors({
                        'backend': {
                            'message': err.msg,
                            'value': err.value
                        },
                    }); // sets errors to the field
                });
            }
            else {
                _this.error = error; // Sets the error to this.error:any
            }
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



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
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__["IndexComponent"] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"] },
    { path: 'edit/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (user) {
        var _this = this;
        if (user.gplusURL === '') {
            delete user.gplusURL;
        }
        else {
            user.gplusURL = 'https://plus.google.com/' + user.gplusURL;
        }
        if (user.twitterURL === '') {
            delete user.twitterURL;
        }
        else {
            user.twitterURL = 'https://twitter.com/' + user.twitterURL;
        }
        return new Promise(function (resolve, reject) {
            return _this.http.post('http://localhost:3000/users/add', user)
                .toPromise()
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error); });
        });
    }; // adds a new user
    AuthService.prototype.getById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('http://localhost:3000/users/' + id)
                .toPromise()
                .then(function (resp) { return resolve(resp['data']); })
                .catch(function (error) { return reject(error); });
        });
    }; // gets the user by its id
    AuthService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.get('http://localhost:3000/users')
                .toPromise()
                .then(function (resp) { return resolve(resp); })
                .catch(function (error) { return reject(error); });
        });
    }; // returns arrayy of all the users
    AuthService.prototype.deleteOne = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.delete('http://localhost:3000/users/' + id) // makes delete request to backend
                .toPromise()
                .then(function (resp) { return resolve(resp); })
                .catch(function (error) { return reject(error); });
        });
    }; // deletes a user
    AuthService.prototype.updateOne = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http.patch('http://localhost:3000/users/' + user.id, user) // makes patch request to backend
                .toPromise()
                .then(function (resp) { return resolve(resp); })
                .catch(function (error) { return reject(error); });
        }); // returns a promise which can be handled in component
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" *ngIf=\"!error\" [formGroup]=\"editUser\" (ngSubmit)=\"onSubmit()\">\n  <h5>Edit User</h5>\n  <div class=\"form-group\">\n    <label for=\"name\">Full Name</label>\n    <input type=\"text\" formControlName=\"name\" id=\"name\" class=\"form-control\" placeholder=\"Enter name\" [ngClass]=\"{'is-invalid' : editUser.get('name').touched &&\n       (editUser.get('name').errors?.minlength || editUser.get('name').errors?.backend)}\">\n    <div *ngIf=\"editUser.get('name').touched\" class=\"form-text text-danger\">\n      <span *ngIf=\"editUser.get('name').errors?.minlength\">\n        Name must {{editUser.get('name').errors?.minlength.requiredLength}} or more characters long.\n      </span>\n      <span *ngIf=\"editUser.get('name').errors?.backend\">{{editUser.get('name').errors?.backend.message}}.</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter email\" [ngClass]=\"{'is-invalid' : editUser.get('email').touched &&\n            (editUser.get('email').errors?.email || editUser.get('email').errors?.backend)}\">\n    <div class=\"form-text text-danger\" *ngIf=\"editUser.get('email').touched\">\n      <span *ngIf=\"editUser.get('email').errors?.email\">Please enter a valid email address.</span>\n      <span *ngIf=\"editUser.get('email').errors?.backend\">{{editUser.get('email').errors?.backend.message}}.</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"about\">Describe your personality</label>\n    <textarea id=\"about\" class=\"form-control\" formControlName=\"about\" rows=\"7\" placeholder=\"I am very good at Programming\"\n      [ngClass]=\"{'is-invalid' : editUser.get('about').touched &&\n      (editUser.get('about').errors?.minlength || editUser.get('about').errors?.backend)}\"></textarea>\n    <div *ngIf=\"editUser.get('about').touched\" class=\"form-text text-danger\">\n      <span *ngIf=\"editUser.get('about').errors?.minlength\">\n        Description must be {{ editUser.get('about').errors?.minlength.requiredLength }} or more characters long.\n      </span>\n      <span *ngIf=\"editUser.get('about').errors?.backend\">{{editUser.get('about').errors?.backend.message}}.</span>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"twitterURL\">Twitter Profile URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"twitterURL\" formControlName=\"twitterURL\" placeholder=\"Username\"\n        [ngClass]=\"{'is-invalid': editUser.get('twitterURL').touched && editUser.get('twitterURL').errors?.backend}\">\n    <div class=\"text-danger form-text\" *ngIf=\"editUser.get('twitterURL').errors?.backend\">\n      {{ editUser.get('twitterURL').errors?.backend.message }}.\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"gplusURL\">Google Profile URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"gplusURL\" formControlName=\"gplusURL\" placeholder=\"Username\" [ngClass]=\"{'is-invalid': editUser.get('gplusURL').touched && editUser.get('gplusURL').errors?.backend}\">\n    <div class=\"text-danger form-text\" *ngIf=\"editUser.get('gplusURL').errors?.backend\">\n      {{ editUser.get('gplusURL').errors?.backend.message }}.\n    </div>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editUser.valid\">Submit</button>\n</form>\n\n\n<div class=\"container\" *ngIf=\"error\">\n  {{ error | json }}\n</div>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.editUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(200)]),
            gplusURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            twitterURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.auth
                .getById(params.id) // get id from params and search for a user
                .then(function (user) {
                _this.editUser.get('id').setValue(user['_id']);
                _this.editUser.get('name').setValue(user['name']);
                _this.editUser.get('email').setValue(user['email']);
                _this.editUser.get('about').setValue(user['about']);
                if (user['socialLinks'].gplus !== null) {
                    _this.editUser.get('gplusURL').setValue(user['socialLinks'].gplus);
                }
                if (user['socialLinks'].twitter !== null) {
                    _this.editUser.get('twitterURL').setValue(user['socialLinks'].twitter);
                }
            })
                .catch(function (error) { return (_this.error = error); }); // If error occurs, sets the error
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.updateOne(this.editUser.value)
            .then(function (updated) { return _this.router.navigateByUrl(''); })
            .catch(function (error) {
            console.log(error);
            if (error.status === 422) { // 422 means validation error, validation error will be handled this way
                error.error.data.forEach(function (err) {
                    _this.editUser.get(err.param).markAsTouched(); // Gets the param and marks it as touched
                    _this.editUser.get(err.param).setErrors({
                        'backend': {
                            'message': err.msg,
                            'value': err.value
                        },
                    }); // Sets the errors in order to display it on the html
                });
            }
            else {
                _this.error = error; // if there is no validation error , just set the error
            }
        });
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"users && !error\">\n  <div *ngFor=\"let user of users\">\n    <div class=\"card mt-2\">\n      <div class=\"card-header\">{{user.email}}</div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{user.name}}</h5>\n        <p class=\"card-text\">{{user.about}}</p>\n        <p *ngIf=\"user.socialLinks.facebook || user.socialLinks.gplus || user.socialLinks.twitter\">\n          <a target=\"_blank\" href=\"{{user.socialLinks.facebook}}\" *ngIf=\"user.socialLinks.facebook\">Facebook</a>\n          <a target=\"_blank\" href=\"{{user.socialLinks.gplus}}\" *ngIf=\"user.socialLinks.gplus\">Google Plus</a>\n          <a target=\"_blank\" href=\"{{user.socialLinks.twitter}}\" *ngIf=\"user.socialLinks.twitter\">Twitter</a>\n        </p>\n        <a [routerLink]=\"['edit', user._id]\" class=\"btn btn-primary d-inline-block mr-2\">Edit</a>\n        <a (click)=\"delete(user._id)\" class=\"btn btn-danger d-inline-block\">Delete</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"error\">\n  {{error | json}}\n</div>\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(auth) {
        this.auth = auth;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAll()
            .then(function (object) {
            _this.users = object['data'];
        }).catch(function (error) {
            _this.error = error.data;
        });
    }; // gets automatically called
    IndexComponent.prototype.delete = function (id) {
        var _this = this;
        this.auth.deleteOne(id)
            .then(function (_) { return _this.ngOnInit(); })
            .catch(function (error) { return _this.error = error.data; });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">Secure MEAN APP</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\" routerLinkActive=\"active current\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"\">Home </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"add-user\">Add User</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Abdul Rehman\Development\NodeJS\mean-auth\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map