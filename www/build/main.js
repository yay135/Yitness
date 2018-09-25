webpackJsonp([6],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_plan_plan__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, authService, menuCtrl, statusBar, splashScreen) {
        var _this = this;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.signinPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */];
        this.planPage = __WEBPACK_IMPORTED_MODULE_9__pages_plan_plan__["a" /* PlanPage */];
        this.isAuthenticated = false;
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: "AIzaSyCvF4uhrtr4fK0q8fKfldDth9dr0257x18",
            authDomain: "gymapp-7ab3c.firebaseapp.com",
            databaseURL: "https://gymapp-7ab3c.firebaseio.com",
            projectId: "gymapp-7ab3c",
            storageBucket: "gymapp-7ab3c.appspot.com",
            messagingSenderId: "857607056717"
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.isAuthenticated = false;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.authService.logout();
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(rootPage)"\n        *ngIf="isAuthenticated">\n        <ion-icon name="book"></ion-icon>\n        Fitness Home\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(signinPage)"\n        *ngIf="!isAuthenticated">\n        <ion-icon name="log-in"></ion-icon>\n        Signin\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLoad(signupPage)"\n        *ngIf="!isAuthenticated">\n        <ion-icon name="person"></ion-icon>\n        Signup\n      </button>\n      <button\n        ion-item\n        icon-left\n        (click)="onLogout()"\n        *ngIf="isAuthenticated">\n        <ion-icon name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pop__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlanPage = /** @class */ (function () {
    function PlanPage(navCtrl, http, auth, navm, popc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.auth = auth;
        this.navm = navm;
        this.popc = popc;
        this.gname = this.navm.data;
        if (typeof (this.gname) === "string") {
            this.editable = true;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + this.gname).once("value").then(function (snapshot) {
                var a = snapshot.val();
                var len = a.length;
                for (var i = 0; i < len; i++) {
                    var b = a[i].children;
                    var len0 = b.length;
                    for (var j = 0; j < len0; j++) {
                        if (b[j].children === "em") {
                            b[j].children = [];
                        }
                    }
                }
                _this.information = a;
            });
        }
        else {
            this.editable = false;
            if (this.auth.getAuthenticatedUser()) {
                this.UserId = this.auth.getAuthenticatedUser().uid;
            }
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/' + this.UserId).once('value').then(function (snapshot) {
                _this.name = snapshot.val().userbasic.lname;
                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.name).once("value").then(function (snapshot) {
                    var a = snapshot.val();
                    var len = a.length;
                    for (var i = 0; i < len; i++) {
                        var b = a[i].children;
                        var len0 = b.length;
                        for (var j = 0; j < len0; j++) {
                            if (b[j].children === "em") {
                                b[j].children = [];
                            }
                            else {
                            }
                        }
                    }
                    _this.information = a;
                });
            });
        }
    }
    PlanPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.gname = this.navm.data;
        if (typeof (this.gname) === "string") {
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + this.gname).on("value", function (snapshot) {
                var a = snapshot.val();
                var len = a.length;
                for (var i = 0; i < len; i++) {
                    var b = a[i].children;
                    var len0 = b.length;
                    for (var j = 0; j < len0; j++) {
                        if (b[j].children === "em") {
                            b[j].children = [];
                        }
                    }
                }
                _this.information = a;
            });
        }
        else {
            if (this.auth.getAuthenticatedUser()) {
                this.UserId = this.auth.getAuthenticatedUser().uid;
            }
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/' + this.UserId).once('value').then(function (snapshot) {
                _this.name = snapshot.val().userbasic.lname;
                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.name).on("value", function (snapshot) {
                    var a = snapshot.val();
                    console.log(a);
                    var len = a.length;
                    for (var i = 0; i < len; i++) {
                        var b = a[i].children;
                        var len0 = b.length;
                        for (var j = 0; j < len0; j++) {
                            if (b[j].children === "em") {
                                b[j].children = [];
                            }
                            else {
                            }
                        }
                    }
                    _this.information = a;
                });
            });
        }
    };
    PlanPage.prototype.add = function (item, child) {
        var _this = this;
        var exer;
        var pop = this.popc.create(__WEBPACK_IMPORTED_MODULE_7__pop__["a" /* PopPage */]);
        pop.present({ ev: event });
        pop.onDidDismiss(function (data) {
            exer = data;
            var a = _this.information;
            var len = a.length;
            for (var i = 0; i < len; i++) {
                if (a[i].name == item.name) {
                    var b = a[i].children;
                    var len0 = b.length;
                    console.log(len0);
                    for (var j = 0; j < len0; j++) {
                        if (b[j].name == child.name) {
                            if (b[j].children) {
                                b[j].children.push(exer);
                            }
                            else {
                                b[j] = {
                                    name: child.name,
                                    children: [exer],
                                };
                            }
                        }
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.gname).set(_this.information);
        });
    };
    PlanPage.prototype.delete = function (item0, child, item) {
        var a = this.information;
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].name == item.name) {
                var b = a[i].children;
                var len0 = b.length;
                for (var j = 0; j < len0; j++) {
                    if (b[j].name == child.name) {
                        var f = b[j].children;
                        var g = f.length;
                        for (var i = 0; i < g; i++) {
                            if (f[i].name === item0.name) {
                                f.splice(i, 1);
                                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + this.gname).set(this.information);
                                return;
                            }
                        }
                    }
                }
            }
        }
    };
    PlanPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    PlanPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    PlanPage.prototype.gotoDetail = function (a, b, c) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_detail__["a" /* DetailPage */], { day: c, basic: b, work: a, name: this.name, gname: this.gname });
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/plan/plan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Training Plan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item2 of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item2.open, \'section\': !item2.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item2.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item2.open"></ion-icon>\n          {{ item2.name }}\n      </button>\n\n      <ion-list *ngIf="item2.children && item2.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item2.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <ion-item class="child">\n          <button ion-item (click)="toggleItem(i, j)" class="child" detail-none>\n          <!--<button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>-->\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n          <button ion-button outline item-end (click)="add(item2,child)" *ngIf="!child.open && editable">add</button>\n        </ion-item>\n          <!-- Direct Add Button as Fallback -->\n          <!-- <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase>{{ child.information }}</p>\n            <button ion-button outline item-end (click)="buyItem(child)">{{ child.price }}</button>\n          </ion-item> -->\n\n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item-sliding *ngFor="let item0 of child.children; let k = index">\n            <ion-item detail-none class="child-item" text-wrap>\n              <h2>{{ item0.name }}</h2>\n              <p text-lowercase>{{ item0.information }}</p>\n              <!-- Direct Add Button -->\n              <button ion-button outline item-end (click)="gotoDetail(item0,child,item2)">{{ item0.price }}</button>\n            </ion-item>\n            <ion-item-options>\n              <button ion-button color ="secondary" (click)="delete(item0,child,item2)" *ngIf = "editable">\n              <ion-icon name="trash">\n              </ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n          </ion-list>\n\n        </ion-list-header>\n      </ion-list>\n\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/plan/plan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataManager = /** @class */ (function () {
    function DataManager(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    DataManager.prototype.DLUserBasicInfo = function (token) {
        var _this = this;
        var userId = this.auth.getAuthenticatedUser().uid;
        return this.http.get("https://gymapp-7ab3c.firebaseio.com/" + userId + "/userbasic.json?auth=" + token).map(function (response) {
            return response.json();
        }).do(function (data) {
            _this.userBasicInfo = data;
        });
    };
    DataManager.prototype.getUserBasicInof = function () {
        if (!this.userBasicInfo) {
            console.log("created an empty one");
            this.userBasicInfo = {
                fname: "",
                lname: "",
                gender: "",
                Birthday: new Date(),
                profession: "",
                heightfeet: "0",
                heightinch: "0",
                weight: "0",
                traininghistory: "false",
                professional: "false",
                isCoach: "false",
            };
        }
        return this.userBasicInfo;
    };
    DataManager.prototype.UPUserBasicInfo = function (token) {
        var t = this.userBasicInfo;
        var userId = this.auth.getAuthenticatedUser().uid;
        return this.http.put("https://gymapp-7ab3c.firebaseio.com/" + userId + "/userbasic.json?auth=" + token, t).map(function (response) {
            return response.json();
        });
    };
    DataManager.prototype.putUserBasicInfo = function (data) {
        this.userBasicInfo = data;
    };
    DataManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]])
    ], DataManager);
    return DataManager;
}());

//# sourceMappingURL=dataManager.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoachPage = /** @class */ (function () {
    function CoachPage(alertc, navCtrl, navParams, auth) {
        var _this = this;
        this.alertc = alertc;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.coaches = [];
        this.name = "";
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/coaches').once('value').then(function (snapshot) {
            var a = snapshot.val();
            Object.keys(a).map(function (key) { _this.coaches.push(key); });
            //console.log(this.coaches);
        });
        var userId = this.auth.getAuthenticatedUser().uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + userId).once('value').then(function (snapshot) {
            _this.name = snapshot.val().userbasic.lname;
        });
    }
    CoachPage.prototype.coachdetail = function (slidingitem, item) {
        var _this = this;
        console.log(slidingitem);
        console.log(item);
        slidingitem.close();
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).once('value').then(function (snapshot) {
            console.log("snapshotget");
            var c = snapshot.val();
            var allStuts = [];
            Object.keys(c).map(function (key) {
                allStuts.push(c[key]);
            });
            var len = allStuts.length;
            for (var i = 0; i < len; i++) {
                console.log("in loop");
                if (allStuts[i] === _this.name) {
                    var alert_1 = _this.alertc.create({
                        title: "Warning!",
                        message: "You can only subscribe to a coach once",
                        buttons: ["Ok"]
                    });
                    alert_1.present();
                    return;
                }
            }
            var a = snapshot.val();
            if (a.first === "stu1") {
                console.log("updated1");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).update({ first: _this.name });
                var al = _this.alertc.create({
                    title: "Success!",
                    message: "you have selected a coach!",
                    buttons: ["Ok"]
                });
                al.present();
                return;
            }
            if (a.second === "stu2") {
                console.log("updated2");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).update({ second: _this.name });
                var al = _this.alertc.create({
                    title: "Success!",
                    message: "you have selected a coach!",
                    buttons: ["Ok"]
                });
                al.present();
                return;
            }
            if (a.third === "stu3") {
                console.log("updated3");
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/coaches/" + item).update({ third: _this.name });
                var al = _this.alertc.create({
                    title: "Success!",
                    message: "you have selected a coach!",
                    buttons: ["Ok"]
                });
                al.present();
                return;
            }
            var alert0 = _this.alertc.create({
                title: "Sorry",
                message: "The capacity of this coach is full!",
                buttons: ["Ok"]
            });
            alert0.present();
            return;
        }, function (err) {
        });
        // firebase.database().ref("/coaches/"+item).
    };
    CoachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coach',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/coach/coach.html"*/'<!--\n  Generated template for the CoachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coach</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n    <ion-item-sliding *ngFor=\'let item of coaches\' #slidingitem>\n      <ion-item color = "weak" round>\n      <ion-col>\n          {{item}}\n      </ion-col>\n      <ion-col item-right>\n          <font color = "#C0C0C0">sliding</font>\n      </ion-col>\n      </ion-item>\n    <ion-item-options>\n      <button ion-button color ="danger" (click)="coachdetail(slidingitem,item)"> Choose</button>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/coach/coach.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */]])
    ], CoachPage);
    return CoachPage;
}());

//# sourceMappingURL=coach.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dataManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, datam, auth, loadc, alertc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datam = datam;
        this.auth = auth;
        this.loadc = loadc;
        this.alertc = alertc;
        this.data = [];
        this.userBasicInfo = {
            fname: "",
            lname: "",
            gender: "",
            Birthday: new Date(),
            profession: "",
            heightfeet: "0",
            heightinch: "0",
            weight: "0",
            traininghistory: "false",
            professional: "false",
            isCoach: "false"
        };
    }
    DashboardPage.prototype.getCurrentDay = function () {
        var d = new Date();
        return d.getDay();
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var l = this.loadc.create({
            content: "Loading"
        });
        l.present();
        this.auth.getAuthenticatedUser().getIdToken().then(function (Token) {
            _this.datam.DLUserBasicInfo(Token).subscribe(function (data) {
                l.dismiss();
                _this.userBasicInfo = _this.datam.getUserBasicInof();
                __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/plan/" + _this.userBasicInfo.lname).once("value").then(function (snapshot) {
                    console.log(snapshot.val());
                    var a = snapshot.val();
                    var len = a.length;
                    for (var i = 0; i < len; i++) {
                        var b = a[i].children;
                        var len0 = b.length;
                        for (var j = 0; j < len0; j++) {
                            if (b[j].children === "em") {
                                b[j].children = [];
                            }
                        }
                    }
                    console.log(a);
                    _this.information = a;
                    console.log(_this.information);
                    var dataavg = [];
                    var lenn = _this.information.length;
                    for (var i = 0; i < lenn; i++) {
                        var count = 0;
                        dataavg[i] = 0;
                        var type = a[i].children;
                        var lennn = type.length;
                        for (var j = 0; j < lennn; j++) {
                            var work = void 0;
                            if (type[j].children) {
                                work = type[j].children;
                            }
                            else {
                                work = [];
                            }
                            var lennnn = work.length;
                            for (var k = 0; k < lennnn; k++) {
                                count++;
                                console.log(work[k].name);
                                dataavg[i] = dataavg[i] + work[k].accp;
                                //console.log(work[k].accp)
                            }
                        }
                        dataavg[i] = dataavg[i] / count;
                    }
                    console.log(dataavg);
                    var data1 = {
                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        datasets: [{ label: "Weekly @galance", fill: false, lineTension: 0.3, backgroundColor: "#C0C0C0",
                                borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0.0, borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)", pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: dataavg,
                                spanGaps: false, }]
                    };
                    var accp = dataavg[_this.getCurrentDay() - 1];
                    console.log(accp);
                    var data0 = {
                        labels: ["Accomplished", "Remaining"],
                        datasets: [
                            {
                                data: [accp, 100 - accp],
                                backgroundColor: ["#00D8FF", "#FF7C00"],
                                hoverBackgroundColor: ["#FF7C00", "#00D8FF"]
                            }
                        ]
                    };
                    _this.Canvas1 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.Canvas1.nativeElement, { data: data1, type: 'line' });
                    _this.Canvas0 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.Canvas0.nativeElement, { data: data0, type: 'pie' });
                });
            }, function (err) {
                l.dismiss();
                var a = _this.alertc.create({
                    title: "Server ERROR0",
                    message: err.message,
                    buttons: ["Ok"]
                });
                a.present();
            });
        }, function (err) {
            l.dismiss();
            var a = _this.alertc.create({
                title: "Server ERROR1",
                message: err.message,
                buttons: ["Ok"]
            });
            a.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Canvas1"),
        __metadata("design:type", Object)
    ], DashboardPage.prototype, "Canvas1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Canvas0"),
        __metadata("design:type", Object)
    ], DashboardPage.prototype, "Canvas0", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      You\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          {{userBasicInfo.fname}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n       Daily Accomplish\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Canvas0>\n      </canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n       Your Points\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #Canvas1>\n      </canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_dataManager__["a" /* DataManager */], __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.data;
        var s = this.item.name;
        var p = this.item.gname;
        if (typeof (s) == "string") {
            this.name = s;
        }
        else {
            this.name = p;
        }
        this.work = this.item.work;
        this.day = this.item.day;
        this.basic = this.item.basic;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/plan/" + this.name).once("value").then(function (snapshot) {
            var a = snapshot.val();
            var len = a.length;
            for (var i = 0; i < len; i++) {
                var b = a[i].children;
                var len0 = b.length;
                for (var j = 0; j < len0; j++) {
                    if (b[j].children === "em") {
                        b[j].children = [];
                    }
                }
            }
            _this.information = a;
        });
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        var a = this.information;
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].name == this.day.name) {
                console.log(this.day.name);
                var b = a[i].children;
                var len0 = b.length;
                for (var j = 0; j < len0; j++) {
                    if (b[j].name == this.basic.name) {
                        console.log(this.basic.name);
                        var c = b[j].children;
                        var len1 = c.length;
                        console.log(c);
                        for (var z = 0; z < len1; z++) {
                            console.log("[" + c[z].name + "," + this.work.name + "]");
                            if (c[z].name == this.work.name) {
                                this.Accomplishment = c[z].accp;
                            }
                        }
                    }
                }
            }
        }
    };
    DetailPage.prototype.update = function () {
        var a = this.information;
        var len = a.length;
        for (var i = 0; i < len; i++) {
            if (a[i].name == this.day.name) {
                console.log(this.day.name);
                var b = a[i].children;
                var len0 = b.length;
                for (var j = 0; j < len0; j++) {
                    if (b[j].name == this.basic.name) {
                        console.log(this.basic.name);
                        var c = b[j].children;
                        var len1 = c.length;
                        console.log(c);
                        for (var z = 0; z < len1; z++) {
                            console.log("[" + c[z].name + "," + this.work.name + "]");
                            if (c[z].name == this.work.name) {
                                c[z].accp = this.Accomplishment;
                            }
                        }
                    }
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/plan/" + this.name).set(this.information);
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{item.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item>\n        <ion-col>\n        Your Accomplishment\n        </ion-col>\n        <ion-col>\n        {{Accomplishment}}\n        </ion-col>\n      </ion-item>\n      <ion-item >\n          <ion-range min="0" max="100" step="2" [(ngModel)]="Accomplishment">\n            <ion-icon small range-left name="bicycle"></ion-icon>\n            <ion-icon range-right name="bicycle"></ion-icon>\n          </ion-range>\n        </ion-item>\n  </ion-list>\n  <ion-card>\n    <ion-card-header>\n      Discription\n    </ion-card-header>\n    <ion-card-content>\n      {{item.information}}\n    </ion-card-content>\n  </ion-card>\n  <ion-item>\n    <button ion-button full round (click)="update()">\n      update\n    </button>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plan_plan__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentPage = /** @class */ (function () {
    function StudentPage(navCtrl, navParams, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.students = [];
        this.name = "";
        var userId = this.auth.getAuthenticatedUser().uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/' + userId + "/").once('value').then(function (snapshot) {
            console.log(snapshot.val());
            var a = snapshot.val();
            Object.keys(a).map(function (key) {
                var b = a[key];
                _this.name = b.lname;
            });
        });
    }
    StudentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.name);
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/coaches/').child(this.name).once('value').then(function (snapshot) {
            var b = snapshot.val();
            console.log(b);
            if (b.first !== "stu1") {
                _this.students.push(b.first);
            }
            if (b.second !== "stu2") {
                _this.students.push(b.second);
            }
            if (b.third !== "stu3") {
                _this.students.push(b.third);
            }
            console.log(_this.students);
        });
    };
    StudentPage.prototype.viewPlan = function (sliding, item) {
        sliding.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plan_plan__["a" /* PlanPage */], item);
    };
    StudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/student/student.html"*/'<!--\n  Generated template for the StudentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coach</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let student of students" #sliding>\n      <ion-item>\n        {{student}}\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="secondary" (click)="viewPlan(sliding,student)">plan</button>\n      </ion-item-options>\n  </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/student/student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */]])
    ], StudentPage);
    return StudentPage;
}());

//# sourceMappingURL=student.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dataManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserInfoPage = /** @class */ (function () {
    function UserInfoPage(navCtrl, navParams, datam, auth, alertc, loadc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datam = datam;
        this.auth = auth;
        this.alertc = alertc;
        this.loadc = loadc;
        this.initPlan = [
            {
                name: "Monday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Tuesday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Wednesday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Thursday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Friday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Saturday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            },
            {
                name: "Sunday",
                children: [
                    {
                        name: "Basics",
                        children: "em"
                    },
                    {
                        name: "Bodyshaping",
                        children: "em"
                    }
                ]
            }
        ];
    }
    UserInfoPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var l = this.loadc.create({
            content: "loading..."
        });
        l.present();
        this.auth.getAuthenticatedUser().getIdToken().then(function (token) {
            if (token) {
                _this.datam.DLUserBasicInfo(token).subscribe(function () {
                    l.dismiss();
                    if (_this.datam.getUserBasicInof()) {
                        _this.fname = _this.datam.getUserBasicInof().fname;
                        _this.lname = _this.datam.getUserBasicInof().lname;
                        _this.gender = _this.datam.getUserBasicInof().gender;
                        _this.Birthday = _this.datam.getUserBasicInof().Birthday;
                        _this.profession = _this.datam.getUserBasicInof().profession;
                        _this.heightfeet = _this.datam.getUserBasicInof().heightfeet;
                        _this.heightinch = _this.datam.getUserBasicInof().heightinch;
                        _this.weight = _this.datam.getUserBasicInof().weight;
                        _this.traininghistory = _this.datam.getUserBasicInof().traininghistory;
                        _this.professional = _this.datam.getUserBasicInof().professional;
                        _this.isCoach = _this.datam.getUserBasicInof().isCoach;
                    }
                }, function (err) {
                    var alert = _this.alertc.create({
                        title: "Failed to retrieve your information",
                        message: err.message,
                        buttons: ["Ok"],
                    });
                    alert.present();
                });
                console.log(_this.datam.getUserBasicInof());
            }
        }, function (err) {
            var alert = _this.alertc.create({
                title: "Failed to retrieve your information",
                message: err.message,
                buttons: ["Ok"]
            });
            alert.present();
        });
        console.log('ionViewDidLoad UserInfoPage');
    };
    UserInfoPage.prototype.upGradeToPremium = function () {
    };
    UserInfoPage.prototype.submitBasicInfo = function () {
        var _this = this;
        if (this.fname == null || this.lname == null ||
            this.gender == null || this.Birthday == null ||
            this.profession == null || this.heightfeet == null ||
            this.heightinch == null || this.weight == null ||
            this.traininghistory == null || this.professional == null ||
            this.isCoach == null) {
            var al = this.alertc.create({
                title: "Warnning!",
                message: "please fill out the form",
                buttons: ["Ok"]
            });
            al.present();
            return;
        }
        this.datam.putUserBasicInfo({
            fname: this.fname,
            lname: this.lname,
            gender: this.gender,
            Birthday: this.Birthday,
            profession: this.profession,
            heightfeet: this.heightfeet,
            heightinch: this.heightinch,
            weight: this.weight,
            traininghistory: this.traininghistory,
            professional: this.professional,
            isCoach: this.isCoach,
        });
        var l = this.loadc.create({
            content: "Submitting!"
        });
        l.present();
        this.auth.getAuthenticatedUser().getIdToken().then(function (token) {
            l.dismiss();
            console.log(_this.isCoach);
            if (_this.isCoach === "true") {
                console.log("added coach");
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().child("coaches/" + _this.lname).set({
                    first: "stu1",
                    second: "stu2",
                    third: "stu3"
                });
            }
            else {
                console.log("added a student");
                console.log(_this.initPlan);
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().child("plan/" + _this.lname).set(_this.initPlan);
            }
            _this.datam.UPUserBasicInfo(token).subscribe(function () {
                var alert = _this.alertc.create({
                    title: "Submit Successful!",
                    buttons: ["Ok"]
                });
                alert.present();
            }, function (err) {
                console.log(err);
                var alert = _this.alertc.create({
                    title: "Submission Failure!",
                    message: err.message,
                    buttons: ["Ok"]
                });
                alert.present();
            });
        }, function (err) {
            l.dismiss();
            var alert = _this.alertc.create({
                title: "Server ERROR",
                message: err.message,
                buttons: ["Ok"]
            });
            alert.present();
        });
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-info',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/user-info/user-info.html"*/'<!--\n  Generated template for the UserInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>UserInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary">First Name</ion-label>\n      <ion-input [(ngModel)]="fname" type="text" placeholder="FirstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">last Name</ion-label>\n      <ion-input [(ngModel)]="lname" type="text" placeholder="LastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender" placeholder="Male">\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female" Female>Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date of Birth</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="Birthday"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Profession</ion-label>\n      <ion-select [(ngModel)]=profession placeholder="student">\n        <ion-option value="student">Student</ion-option>\n        <ion-option value="athlete">Athlete</ion-option>\n        <ion-option value="officer">Officer</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Height</ion-label>\n      <ion-select [(ngModel)]="heightfeet" placeholder="feet">\n        <ion-option value="3">3\'</ion-option>\n        <ion-option value="4">4\'</ion-option>\n        <ion-option value="5">5\'</ion-option>\n        <ion-option value="6">6\'</ion-option>\n        <ion-option value="7">7\'</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="heightinch" placeholder="inch">\n        <ion-option value="0">0\'\'</ion-option>\n        <ion-option value="1">1\'\'</ion-option>\n        <ion-option value="2">2\'\'</ion-option>\n        <ion-option value="3">3\'\'</ion-option>\n        <ion-option value="4">4\'\'</ion-option>\n        <ion-option value="5">5\'\'</ion-option>\n        <ion-option value="6">6\'\'</ion-option>\n        <ion-option value="7">7\'\'</ion-option>\n        <ion-option value="8">8\'\'</ion-option>\n        <ion-option value="9">9\'\'</ion-option>\n        <ion-option value="10">10\'\'</ion-option>\n        <ion-option value="11">11\'\'</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n       <ion-label color="primary">\n         Weight\n       </ion-label>\n       <ion-input [(ngModel)]="weight" placeholder="lbs" type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Ever trained?</ion-label>\n      <ion-select [(ngModel)]="traininghistory" placeholder="No">\n        <ion-option value="true">Yes</ion-option>\n        <ion-option value="false">No</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="professional" placeholder="Professional?">\n          <ion-option value="true">Yes</ion-option>\n          <ion-option value="false">No</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="Primary">Are you a coach?</ion-label>\n      <ion-select [(ngModel)]="isCoach">\n        <ion-option value="true">\n         Yes\n        </ion-option>\n        <ion-option value="false">\n          No\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button round full color = "secondary" (click)="submitBasicInfo()">\n      Submit\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/user-info/user-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_dataManager__["a" /* DataManager */], __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coach-dt/coach-dt.module": [
		1032,
		0
	],
	"../pages/coach/coach.module": [
		1033,
		5
	],
	"../pages/dashboard/dashboard.module": [
		1034,
		4
	],
	"../pages/detail/detail.module": [
		1035,
		3
	],
	"../pages/student/student.module": [
		1036,
		2
	],
	"../pages/user-info/user-info.module": [
		1037,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 263;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signup = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signin = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopPage = /** @class */ (function () {
    function PopPage(viewCtrl) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.exer = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/exercise").once('value').then(function (snapshot) {
            _this.exer = snapshot.val();
            console.log(_this.exer);
        });
    }
    PopPage.prototype.close = function (item) {
        console.log(item);
        this.viewCtrl.dismiss(item);
    };
    PopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n      <ion-list>\n        <ion-item *ngFor=\"let item of exer\">\n        <button ion-button color = \"secondary\" (click)=close(item)>\n        {{item.name}}\n        </button>\n        </ion-item>\n      </ion-list>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], PopPage);
    return PopPage;
}());

//# sourceMappingURL=pop.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninPage = /** @class */ (function () {
    function SigninPage(authService, loadingCtrl, alertCtrl, facebook) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.facebook = facebook;
        this.provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider();
    }
    SigninPage.prototype.FBlogin = function () {
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { console.log(error); });
    };
    SigninPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.authService.signin(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signin failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/signin/signin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignin(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Mail</ion-label>\n        <ion-input\n          type="email"\n          ngModel\n          name="email"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n          type="password"\n          ngModel\n          name="password"\n          required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signin</button>\n  </form>\n  <ion-list>\n    <button ion-button icon-right (click)="FBlogin()">\n      Login with\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(authService, loadingCtrl, alertCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.authService.signup(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/signup/signup.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignup(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Mail</ion-label>\n        <ion-input\n          type="email"\n          ngModel\n          name="email"\n          required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input\n          type="password"\n          ngModel\n          name="password"\n          required\n          [minlength]="6"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Signup</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_info_user_info__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plan_plan__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coach_coach__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.isCoach = false;
        this.isStudent = false;
        if (this.auth.getAuthenticatedUser()) {
            this.UserId = this.auth.getAuthenticatedUser().uid;
        }
        ;
        // firebase.database().ref('/exercise').child('bob').set({
        //   hg:"name",
        //   tg:"namm"
        // });
        // firebase.database().ref('/coaches').once('value').then((snapshot)=>{
        //   const a = snapshot.val();
        //   Object.keys(a).map(key=>{this.coaches.push(key)});
        //   console.log(this.coaches);
        // });
        // firebase.database().ref('/exercise').once('value').then((snapshot)=>{
        //   const a = snapshot.val();
        //   Object.keys(a).map(key=>{this.exercise.push(a[key])});
        //console.log(this.exercise);
        //});
        __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/' + this.UserId).once('value').then(function (snapshot) {
            if (snapshot.val()) {
                if (snapshot.val().userbasic.isCoach == "true") {
                    //console.log("one");
                    _this.isCoach = true;
                    _this.isStudent = false;
                }
                else {
                    //console.log("two");
                    _this.isStudent = true;
                    _this.isCoach = false;
                }
            }
            else {
                _this.isCoach = false;
                _this.isStudent = false;
            }
            //console.log("isCoach"+":"+this.isCoach);
        });
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var userRef = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/' + this.UserId);
        userRef.on('value', function (snapshot) {
            if (snapshot.val()) {
                //console.log(snapshot.val().userbasic.isCoach);
                if (snapshot.val().userbasic.isCoach == "true") {
                    console.log(snapshot.val().userbasic.isCoach);
                    console.log("three");
                    _this.isCoach = true;
                    _this.isStudent = false;
                }
                else {
                    //console.log(snapshot.val().userbasic.isCoach);
                    //console.log("four")
                    _this.isStudent = true;
                    _this.isCoach = false;
                }
            }
            else {
                _this.isCoach = false;
                _this.isStudent = false;
            }
            //console.log(this.UserId+":"+this.isCoach);
        });
    };
    HomePage.prototype.addInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_info_user_info__["a" /* UserInfoPage */]);
    };
    HomePage.prototype.gotoGraph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.trainPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__plan_plan__["a" /* PlanPage */]);
    };
    HomePage.prototype.Coach = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__coach_coach__["a" /* CoachPage */]);
    };
    HomePage.prototype.Student = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__student_student__["a" /* StudentPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yanfengyao/projects/gittest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Your Fitness Home\n    </ion-title>\n    <ion-buttons start>\n        <button ion-button icon-only menuToggle>\n      <ion-icon name="menu" style="zoom:1.2"></ion-icon>\n       </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-button round full color="secondary" (click) = "addInfo()">\n      add info\n    </button>\n    <button ion-button round full color="secondary" *ngIf="isStudent" (click)= "gotoGraph()">\n     goto graph\n    </button>\n    <button ion-button round full color="secondary" *ngIf="isStudent" (click) = "trainPlan()">\n      training plan\n    </button>\n    <button ion-button round full color="secondary" *ngIf="isCoach" (click) = \'Student()\'>\n     Your Student\n    </button>\n    <button ion-button round full color="secondary" *ngIf="isStudent" (click) = "Coach()">\n     select a coach\n    </button>\n  </ion-list>\n    <!-- <ion-list>\n    <ion-item *ngFor=\'let item of exercise\'>\n      {{item}}\n    </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item *ngFor=\'let item of coaches\'>\n       {{item}}\n    </ion-item>\n  </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/Users/yanfengyao/projects/gittest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_auth__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(579);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_dataManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detail_detail__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_coach_coach__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_student_student__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pop__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(571);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pop__["a" /* PopPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/coach-dt/coach-dt.module#CoachDtPageModule', name: 'CoachDtPage', segment: 'coach-dt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coach/coach.module#CoachPageModule', name: 'CoachPage', segment: 'coach', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student.module#StudentPageModule', name: 'StudentPage', segment: 'student', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-info/user-info.module#UserInfoPageModule', name: 'UserInfoPage', segment: 'user-info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_coach_coach__["a" /* CoachPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_student_student__["a" /* StudentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pop__["a" /* PopPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_dataManager__["a" /* DataManager */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 311,
	"./af.js": 311,
	"./ar": 312,
	"./ar-dz": 313,
	"./ar-dz.js": 313,
	"./ar-kw": 314,
	"./ar-kw.js": 314,
	"./ar-ly": 315,
	"./ar-ly.js": 315,
	"./ar-ma": 316,
	"./ar-ma.js": 316,
	"./ar-sa": 317,
	"./ar-sa.js": 317,
	"./ar-tn": 318,
	"./ar-tn.js": 318,
	"./ar.js": 312,
	"./az": 319,
	"./az.js": 319,
	"./be": 320,
	"./be.js": 320,
	"./bg": 321,
	"./bg.js": 321,
	"./bm": 322,
	"./bm.js": 322,
	"./bn": 323,
	"./bn.js": 323,
	"./bo": 324,
	"./bo.js": 324,
	"./br": 325,
	"./br.js": 325,
	"./bs": 326,
	"./bs.js": 326,
	"./ca": 327,
	"./ca.js": 327,
	"./cs": 328,
	"./cs.js": 328,
	"./cv": 329,
	"./cv.js": 329,
	"./cy": 330,
	"./cy.js": 330,
	"./da": 331,
	"./da.js": 331,
	"./de": 332,
	"./de-at": 333,
	"./de-at.js": 333,
	"./de-ch": 334,
	"./de-ch.js": 334,
	"./de.js": 332,
	"./dv": 335,
	"./dv.js": 335,
	"./el": 336,
	"./el.js": 336,
	"./en-au": 337,
	"./en-au.js": 337,
	"./en-ca": 338,
	"./en-ca.js": 338,
	"./en-gb": 339,
	"./en-gb.js": 339,
	"./en-ie": 340,
	"./en-ie.js": 340,
	"./en-il": 341,
	"./en-il.js": 341,
	"./en-nz": 342,
	"./en-nz.js": 342,
	"./eo": 343,
	"./eo.js": 343,
	"./es": 344,
	"./es-do": 345,
	"./es-do.js": 345,
	"./es-us": 346,
	"./es-us.js": 346,
	"./es.js": 344,
	"./et": 347,
	"./et.js": 347,
	"./eu": 348,
	"./eu.js": 348,
	"./fa": 349,
	"./fa.js": 349,
	"./fi": 350,
	"./fi.js": 350,
	"./fo": 351,
	"./fo.js": 351,
	"./fr": 352,
	"./fr-ca": 353,
	"./fr-ca.js": 353,
	"./fr-ch": 354,
	"./fr-ch.js": 354,
	"./fr.js": 352,
	"./fy": 355,
	"./fy.js": 355,
	"./gd": 356,
	"./gd.js": 356,
	"./gl": 357,
	"./gl.js": 357,
	"./gom-latn": 358,
	"./gom-latn.js": 358,
	"./gu": 359,
	"./gu.js": 359,
	"./he": 360,
	"./he.js": 360,
	"./hi": 361,
	"./hi.js": 361,
	"./hr": 362,
	"./hr.js": 362,
	"./hu": 363,
	"./hu.js": 363,
	"./hy-am": 364,
	"./hy-am.js": 364,
	"./id": 365,
	"./id.js": 365,
	"./is": 366,
	"./is.js": 366,
	"./it": 367,
	"./it.js": 367,
	"./ja": 368,
	"./ja.js": 368,
	"./jv": 369,
	"./jv.js": 369,
	"./ka": 370,
	"./ka.js": 370,
	"./kk": 371,
	"./kk.js": 371,
	"./km": 372,
	"./km.js": 372,
	"./kn": 373,
	"./kn.js": 373,
	"./ko": 374,
	"./ko.js": 374,
	"./ky": 375,
	"./ky.js": 375,
	"./lb": 376,
	"./lb.js": 376,
	"./lo": 377,
	"./lo.js": 377,
	"./lt": 378,
	"./lt.js": 378,
	"./lv": 379,
	"./lv.js": 379,
	"./me": 380,
	"./me.js": 380,
	"./mi": 381,
	"./mi.js": 381,
	"./mk": 382,
	"./mk.js": 382,
	"./ml": 383,
	"./ml.js": 383,
	"./mn": 384,
	"./mn.js": 384,
	"./mr": 385,
	"./mr.js": 385,
	"./ms": 386,
	"./ms-my": 387,
	"./ms-my.js": 387,
	"./ms.js": 386,
	"./mt": 388,
	"./mt.js": 388,
	"./my": 389,
	"./my.js": 389,
	"./nb": 390,
	"./nb.js": 390,
	"./ne": 391,
	"./ne.js": 391,
	"./nl": 392,
	"./nl-be": 393,
	"./nl-be.js": 393,
	"./nl.js": 392,
	"./nn": 394,
	"./nn.js": 394,
	"./pa-in": 395,
	"./pa-in.js": 395,
	"./pl": 396,
	"./pl.js": 396,
	"./pt": 397,
	"./pt-br": 398,
	"./pt-br.js": 398,
	"./pt.js": 397,
	"./ro": 399,
	"./ro.js": 399,
	"./ru": 400,
	"./ru.js": 400,
	"./sd": 401,
	"./sd.js": 401,
	"./se": 402,
	"./se.js": 402,
	"./si": 403,
	"./si.js": 403,
	"./sk": 404,
	"./sk.js": 404,
	"./sl": 405,
	"./sl.js": 405,
	"./sq": 406,
	"./sq.js": 406,
	"./sr": 407,
	"./sr-cyrl": 408,
	"./sr-cyrl.js": 408,
	"./sr.js": 407,
	"./ss": 409,
	"./ss.js": 409,
	"./sv": 410,
	"./sv.js": 410,
	"./sw": 411,
	"./sw.js": 411,
	"./ta": 412,
	"./ta.js": 412,
	"./te": 413,
	"./te.js": 413,
	"./tet": 414,
	"./tet.js": 414,
	"./tg": 415,
	"./tg.js": 415,
	"./th": 416,
	"./th.js": 416,
	"./tl-ph": 417,
	"./tl-ph.js": 417,
	"./tlh": 418,
	"./tlh.js": 418,
	"./tr": 419,
	"./tr.js": 419,
	"./tzl": 420,
	"./tzl.js": 420,
	"./tzm": 421,
	"./tzm-latn": 422,
	"./tzm-latn.js": 422,
	"./tzm.js": 421,
	"./ug-cn": 423,
	"./ug-cn.js": 423,
	"./uk": 424,
	"./uk.js": 424,
	"./ur": 425,
	"./ur.js": 425,
	"./uz": 426,
	"./uz-latn": 427,
	"./uz-latn.js": 427,
	"./uz.js": 426,
	"./vi": 428,
	"./vi.js": 428,
	"./x-pseudo": 429,
	"./x-pseudo.js": 429,
	"./yo": 430,
	"./yo.js": 430,
	"./zh-cn": 431,
	"./zh-cn.js": 431,
	"./zh-hk": 432,
	"./zh-hk.js": 432,
	"./zh-tw": 433,
	"./zh-tw.js": 433
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 710;

/***/ })

},[574]);
//# sourceMappingURL=main.js.map