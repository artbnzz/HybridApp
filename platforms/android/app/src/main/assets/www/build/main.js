webpackJsonp([8],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_ngx__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    CameraPage.prototype.takePhoto = function () {
        var _this = this;
        //กำหนดขนาดภาพ
        switch (this.ImageSize) {
            case "1":
                this.width = "4032";
                this.height = "3024";
                break;
            case "2":
                this.width = "2880";
                this.height = "2160";
                break;
            case "3":
                this.width = "4032";
                this.height = "2268";
                break;
            case "4":
                this.width = "2560";
                this.height = "1440";
                break;
            case "5":
                this.width = "4032";
                this.height = "1960";
                break;
            case "6":
                this.width = "3024";
                this.height = "3024";
                break;
            case "7":
                this.width = "2160";
                this.height = "2160";
                break;
        }
        //กำหนดค่ากล้องถ่ายรูป
        var options = {
            targetHeight: this.height,
            targetWidth: this.width,
            quality: this.ImageQuality,
            saveToPhotoAlbum: this.saveimage,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData; //เก็บข้อมูลรูปภาพไว้ใน myphoto
        }, function (err) {
            console.log("เกิดข้อผิดพลาดไม่สามารถเปิดรูปที่ถ่ายมาได้"); //แสดงข้อความใน Console
        });
    };
    CameraPage.prototype.getPictures = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true //หมุนภาพให้ถูกต้อง
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myphoto = 'data:image/jpeg;base64,' + imageData; //เก็บข้อมูลรูปภาพไว้ใน myphoto
        }, function (err) {
            console.log("เกิดข้อผิดพลาดไม่สามารถเรียกรูปจากอัลบั้มได้"); //แสดงข้อความใน Console
        });
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"D:\HybridApp\src\pages\camera\camera.html"*/'<!--\n  Generated template for the CameraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>กล้องถ่ายรูป</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label>คุณภาพของภาพ</ion-label>\n        <ion-select [(ngModel)]="ImageQuality">\n          <ion-option value="100">สูง</ion-option>\n          <ion-option value="50">กลาง</ion-option>\n          <ion-option value="25">ต่ำ</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>ขนาดภาพ</ion-label>\n        <ion-select [(ngModel)]="ImageSize">\n          <ion-option value="1">4:3(12.0 MP)</ion-option>\n          <ion-option value="2">4:3(6.2 MP)</ion-option>\n          <ion-option value="3">16:9(9.1 MP)</ion-option>\n          <ion-option value="4">16:9(3.7 MP)</ion-option>\n          <ion-option value="5">18.5:9(7.9 MP)</ion-option>\n          <ion-option value="6">1:1(9.1 MP)</ion-option>\n          <ion-option value="7">1:1(4.7 MP)</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>บันทึกภาพลง Gallery</ion-label>\n        <ion-toggle [(ngModel)]="saveimage"></ion-toggle>\n      </ion-item>\n      <ion-row center>  \n        <ion-col text-center>   \n          <button ion-button round class="takePhoto" [disabled]="!ImageQuality || !ImageSize" (click)="takePhoto();"><i class="fas fa-camera fa-lg"></i>&nbsp;ถ่ายรูป</button>\n          <button ion-button round class="getPictures" (click)="getPictures();"><i class="fas fa-images fa-lg"></i>&nbsp;ดูรูปภาพ</button>\n          <img style="margin-top:10px;"src="{{ myphoto }}">\n        </ion-col> \n      </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\HybridApp\src\pages\camera\camera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_ngx__["a" /* Camera */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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





/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(alertCtrl, toast, loadingCtrl, firedb, fireAuth, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.firedb = firedb;
        this.fireAuth = fireAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.fireAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.editprofiledata = _this.firedb.object("User/" + res.uid).valueChanges();
                _this.editprofiledata.subscribe(function (res) {
                    _this.user.email = res.email;
                });
            }
        });
    }
    ChangepasswordPage.prototype.confirmdata = function (user) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ยืนยันข้อมูล',
            message: 'คุณต้องการเปลี่ยนรหัสผ่านหรือไม่',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function () { }
                },
                {
                    text: 'ยืนยัน',
                    handler: function () { _this.updatedata(user); }
                }
            ]
        });
        alert.present();
    };
    ChangepasswordPage.prototype.updatedata = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, loading, loading, loading_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.password == null || user.confirmpassword == null)) return [3 /*break*/, 1];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "กรุณาระบุข้อมูลให้ครบ",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(user.password.length < 6 || user.confirmpassword.length < 6)) return [3 /*break*/, 2];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(user.password != user.confirmpassword)) return [3 /*break*/, 3];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "รหัสผ่านใหม่และยืนยันรหัสผ่านใหม่ไม่ตรงกัน",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 5];
                    case 3:
                        loading_1 = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        return [4 /*yield*/, loading_1.present().then(function () {
                                _this.fireAuth.auth.currentUser.updatePassword(user.password).then(function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                    loading_1.dismiss();
                                    _this.toast.create({
                                        message: "เปลี่ยนรหัสผ่านสำเร็จ!",
                                        duration: 4000,
                                        cssClass: "success"
                                    }).present();
                                }, function (err) {
                                    switch (err.message) {
                                        case 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.':
                                            _this.toast.create({
                                                message: "กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
                                                duration: 4000,
                                                cssClass: "error"
                                            }).present();
                                            loading_1.dismiss();
                                            break;
                                        default:
                                            console.log(err.message);
                                            _this.toast.create({
                                                message: err,
                                                duration: 4000,
                                                cssClass: "error"
                                            }).present();
                                            loading_1.dismiss();
                                    }
                                });
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"D:\HybridApp\src\pages\changepassword\changepassword.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="float:left">เปลี่ยนรหัสผ่าน</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <label>อีเมล์ <ion-input [(ngModel)]="user.email" type="text" disabled></ion-input></label>\n    <label>รหัสผ่านใหม่ <input type="password" [(ngModel)]="user.password" placeholder="ระบุรหัสผ่านใหม่"></label>\n    <label>ยืนยันรหัสผ่านใหม่ <input type="password" [(ngModel)]="user.confirmpassword" placeholder="ระบุยืนยันรหัสผ่านใหม่"></label>\n    <button clear class="editdata" (click)="confirmdata(user)">บันทึก</button>\n</ion-content>\n'/*ion-inline-end:"D:\HybridApp\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadnewsPage = /** @class */ (function () {
    function ReadnewsPage(firedb, navCtrl, navParams) {
        this.firedb = firedb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsid = navParams.get('item');
        this.newsData = this.firedb.object("News/" + this.newsid).valueChanges();
    }
    ReadnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-readnews',template:/*ion-inline-start:"D:\HybridApp\src\pages\readnews\readnews.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title style="float:left">อ่านข่าว</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      <h3>{{(newsData | async)?.header}}</h3>\n      <img src="{{(newsData | async)?.imagelink}}">\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{(newsData | async)?.detail}}</p>\n  </ion-content>\n  '/*ion-inline-end:"D:\HybridApp\src\pages\readnews\readnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ReadnewsPage);
    return ReadnewsPage;
}());

//# sourceMappingURL=readnews.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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




var EditdataPage = /** @class */ (function () {
    function EditdataPage(alertCtrl, toast, loadingCtrl, firedb, fireAuth, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.firedb = firedb;
        this.fireAuth = fireAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.fireAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.editprofiledata = _this.firedb.object("User/" + res.uid).valueChanges();
                _this.editprofiledata.subscribe(function (res) {
                    _this.user.email = res.email;
                    _this.user.firstname = res.firstname;
                    _this.user.lastname = res.lastname;
                    _this.user.tel = res.tel;
                });
            }
        });
    }
    EditdataPage.prototype.confirmdata = function (user) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ยืนยันข้อมูล',
            message: 'คุณต้องการบันทึกข้อมูลหรือไม่',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function () { }
                },
                {
                    text: 'ยืนยัน',
                    handler: function () { _this.updatedata(user); }
                }
            ]
        });
        alert.present();
    };
    EditdataPage.prototype.updatedata = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, loading, loading_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.firstname == null || user.lastname == null || user.tel == null)) return [3 /*break*/, 1];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "กรุณาระบุข้อมูลให้ครบ",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(user.tel.length < 10)) return [3 /*break*/, 2];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "เบอร์โทรศัพท์ไม่ถูกต้อง",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 4];
                    case 2:
                        loading_1 = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        return [4 /*yield*/, loading_1.present().then(function () {
                                _this.fireAuth.authState.subscribe(function (res) {
                                    _this.firedb.object("User/" + res.uid).set({
                                        email: res.email,
                                        firstname: user.firstname,
                                        lastname: user.lastname,
                                        tel: user.tel
                                    });
                                });
                                loading_1.dismiss();
                                _this.toast.create({
                                    message: "บันทึกข้อมูลเรียบร้อย!",
                                    duration: 4000,
                                    cssClass: "success"
                                }).present();
                            }).catch(function (err) {
                                switch (err.message) {
                                    case 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.':
                                        _this.toast.create({
                                            message: "กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
                                            duration: 4000,
                                            cssClass: "error"
                                        }).present();
                                        loading_1.dismiss();
                                        break;
                                    default:
                                        console.log(err.message);
                                        _this.toast.create({
                                            message: err,
                                            duration: 4000,
                                            cssClass: "error"
                                        }).present();
                                        loading_1.dismiss();
                                }
                                ;
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditdataPage.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EditdataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editdata',template:/*ion-inline-start:"D:\HybridApp\src\pages\editdata\editdata.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="float:left">แก้ไขข้อมูล</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <label>อีเมล์ <ion-input [(ngModel)]="user.email" type="text" disabled></ion-input></label>\n    <label>ชื่อ <ion-input type="text" [(ngModel)]="user.firstname" placeholder="ระบุชื่อ"></ion-input></label>\n    <label>นามสกุล <ion-input type="text" [(ngModel)]="user.lastname" placeholder="ระบุนามสกุล"></ion-input></label>\n    <label>เบอร์โทรศัพท์ <ion-input type="tel" [(ngModel)]="user.tel" [maxlength]="10" [minlength]="10" (keypress)="numberOnly($event)" placeholder="ระบุเบอร์โทรศัพท์"></ion-input></label>\n    <button clear class="editdata" (click)="confirmdata(user)">บันทึก</button>\n</ion-content>\n'/*ion-inline-end:"D:\HybridApp\src\pages\editdata\editdata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditdataPage);
    return EditdataPage;
}());

//# sourceMappingURL=editdata.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen_ngx__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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








var LoginPage = /** @class */ (function () {
    function LoginPage(splashscreen, firedb, loadingCtrl, fireAuth, toast, navCtrl, navParams) {
        var _this = this;
        this.splashscreen = splashscreen;
        this.firedb = firedb;
        this.loadingCtrl = loadingCtrl;
        this.fireAuth = fireAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changepassword = false;
        this.user = {};
        this.reauth = navParams.get('item');
        if (this.reauth == 'Reauth') {
            this.changepassword = true;
        }
        else {
            this.changepassword = false;
        }
        if (this.changepassword == true) {
            this.fireAuth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    _this.userdata = _this.firedb.object("User/" + res.uid).valueChanges();
                    _this.userdata.subscribe(function (res) {
                        _this.user.email = res.email;
                    });
                }
            });
        }
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.splashscreen.hide();
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, loading_1, err_1, loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(user.email == null || user.password == null && this.changepassword == false)) return [3 /*break*/, 2];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        this.toast.create({
                            message: "กรุณาระบุข้อมูลให้ครบ",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 4];
                    case 2:
                        loading_1 = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        return [4 /*yield*/, loading_1.present()];
                    case 3:
                        _a.sent();
                        this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
                            .then(function (info) {
                            if (info) {
                                if (_this.changepassword == false) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                                    _this.toast.create({
                                        message: "ลงชื่อเข้าใช้สำเร็จ!",
                                        duration: 4000,
                                        cssClass: "success"
                                    }).present();
                                    loading_1.dismiss();
                                }
                                else {
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword__["a" /* ChangepasswordPage */]).then(function () {
                                        var startIndex = _this.navCtrl.getActive().index - 1;
                                        _this.navCtrl.remove(startIndex, 1);
                                    });
                                    _this.toast.create({
                                        message: "ยืนยันตัวตนถูกต้อง!",
                                        duration: 4000,
                                        cssClass: "success"
                                    }).present();
                                    loading_1.dismiss();
                                }
                            }
                        })
                            .catch(function (err) {
                            switch (err.message) {
                                case 'The email address is badly formatted.':
                                    _this.toast.create({
                                        message: "คุณป้อนอีเมล์ไม่ถูกต้อง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'There is no user record corresponding to this identifier. The user may have been deleted.':
                                    _this.toast.create({
                                        message: "อีเมล์หรือรหัสผ่านไม่ถูกต้อง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'The password is invalid or the user does not have a password.':
                                    _this.toast.create({
                                        message: "อีเมล์หรือรหัสผ่านไม่ถูกต้อง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'Too many unsuccessful login attempts.  Please include reCaptcha verification or try again later':
                                    _this.toast.create({
                                        message: "เข้าสู่ระบบที่ผิดพลาดหลายครั้ง, โปรดลองอีกครั้งในภายหลัง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.':
                                    _this.toast.create({
                                        message: "กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                default:
                                    console.log(err.message);
                                    _this.toast.create({
                                        message: err,
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                            }
                        });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: err_1,
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\HybridApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle *ngIf="changepassword">\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title *ngIf="changepassword">ยืนยันตัวตน</ion-title>\n    <ion-title *ngIf="!changepassword">HybridApp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h5 text-center *ngIf="changepassword">กรุณายืนยันตัวตนเพื่อเปลี่ยนรหัสผ่าน</h5>\n    <h3 text-center *ngIf="!changepassword"><i class="fas fa-sign-in-alt fa-sm"></i>&nbsp;ลงชื่อเข้าใช้</h3>\n    <label *ngIf="changepassword">อีเมล์<ion-input type="text" [(ngModel)]="user.email" placeholder="ระบุอีเมล์" disabled></ion-input></label>\n    <label *ngIf="!changepassword">อีเมล์<input type="text" [(ngModel)]="user.email" placeholder="ระบุอีเมล์"></label>\n    <label>รหัสผ่าน <input type="password" [(ngModel)]="user.password" placeholder="ระบุรหัสผ่าน"></label>\n    <button *ngIf="!changepassword" class="login" (click)="login(user)">ลงชื่อเข้าใช้</button>\n    <button *ngIf="changepassword" class="login" (click)="login(user)">ดำเนินการต่อ</button>\n    <button *ngIf="!changepassword" clear class="register" (click)="register()">สมัครสมาชิก</button>\n</ion-content>  \n'/*ion-inline-end:"D:\HybridApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen_ngx__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsPage = /** @class */ (function () {
    function MapsPage(navCtrl, navParams, platform, geolocation, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.isenabled = true;
        this.position1 = "กำลังระบุตำแหน่ง";
        this.position2 = "กำลังระบุตำแหน่ง";
        platform.ready().then(function () {
            var marker = null;
            var loading = _this.loadingCtrl.create({
                content: 'โปรดรอสักครู่...'
            });
            loading.present().then(function () {
                _this.geolocation.getCurrentPosition({ maximumAge: 5000, enableHighAccuracy: true }).then(function (resp) {
                    var map;
                    var mapProp = {
                        center: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude),
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    map = new google.maps.Map(document.getElementById('map'), mapProp);
                    var watch = _this.geolocation.watchPosition({ maximumAge: 5000, enableHighAccuracy: true });
                    watch.subscribe(function (data) {
                        _this.position1 = data.coords.latitude;
                        _this.position2 = data.coords.longitude;
                        var pos = {
                            lat: _this.position1,
                            lng: _this.position2,
                        };
                        if (marker == null) {
                            marker = new google.maps.Marker({
                                map: _this.map,
                                animation: google.maps.Animation.DROP,
                                position: new google.maps.LatLng(_this.position1, _this.position2),
                            });
                            var content = "<p>ตำแหน่งของคุณในตอนนี้</p>";
                            var infoWindow_1 = new google.maps.InfoWindow({
                                content: content
                            });
                            google.maps.event.addListener(marker, 'click', function () {
                                infoWindow_1.open(_this.map, marker);
                            });
                            marker.setMap(map);
                        }
                        else {
                            marker.setPosition(pos);
                        }
                        var btnLocation = document.getElementById("btn-location");
                        btnLocation.addEventListener('click', function () {
                            goToMyLocation();
                        });
                        function goToMyLocation() {
                            marker.map.setCenter(pos);
                        }
                        loading.dismiss();
                    });
                });
            });
        });
    }
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"D:\HybridApp\src\pages\maps\maps.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="float:left">แผนที่</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div #map id="map"></div>\n    <p align="center" class="fontmap">พิกัดตำแหน่งปัจจุบัน <br>ละติจูด : {{ position1 }} <br>ลองติจูด : {{ position2 }} </p>\n    <ion-row center>  \n      <ion-col text-center>   \n        <button style="text-align: center;margin-top:-30px;" ion-button round id="btn-location"><i class="fas fa-search-location fa-lg"></i></button> \n      </ion-col> \n     </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\HybridApp\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner_ngx__ = __webpack_require__(255);
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
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrcodePage = /** @class */ (function () {
    function QrcodePage(navCtrl, navParams, barcodescanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodescanner = barcodescanner;
    }
    QrcodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrcodePage');
    };
    QrcodePage.prototype.createqr = function () {
        this.result = this.data;
    };
    QrcodePage.prototype.scanqr = function () {
        var _this = this;
        this.barcodescanner.scan().then(function (barcodeData) {
            _this.result = barcodeData.text;
        });
    };
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrcode',template:/*ion-inline-start:"D:\HybridApp\src\pages\qrcode\qrcode.html"*/'<!--\n  Generated template for the QrcodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>QRcode</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-input [(ngModel)]="data" type="text" placeholder="ใส่ข้อมูลเพื่อสร้าง QRcode"></ion-input>\n  <button (click)="createqr()" *ngIf="!changepassword" clear class="btn">สร้าง QRcode</button>\n  <button (click)="scanqr()" *ngIf="!changepassword" clear class="btn">สแกน QRcode</button>\n  \n  <ion-card *ngIf="result">\n    <ngx-qrcode [qrc-value]="result"></ngx-qrcode>\n    <ion-card-content>\n      <h1>ข้อมูล: {{result}}</h1>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\HybridApp\src\pages\qrcode\qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 202:
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
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/camera/camera.module": [
		517,
		7
	],
	"../pages/changepassword/changepassword.module": [
		518,
		6
	],
	"../pages/editdata/editdata.module": [
		519,
		5
	],
	"../pages/login/login.module": [
		520,
		4
	],
	"../pages/maps/maps.module": [
		521,
		3
	],
	"../pages/qrcode/qrcode.module": [
		522,
		2
	],
	"../pages/readnews/readnews.module": [
		523,
		1
	],
	"../pages/signin/signin.module": [
		524,
		0
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
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture_ngx__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media_ngx__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoCapturePage = /** @class */ (function () {
    function VideoCapturePage(navCtrl, mediaCapture, camera, streamingMedia) {
        this.navCtrl = navCtrl;
        this.mediaCapture = mediaCapture;
        this.camera = camera;
        this.streamingMedia = streamingMedia;
    }
    VideoCapturePage.prototype.captureVideo = function () {
        var options = {
            limit: this.alwaysrecord,
            duration: this.duration,
            quality: this.vdoQuality
        };
        this.mediaCapture.captureVideo(options).then(function (res) {
        }, function (err) { return console.error(err); });
    };
    VideoCapturePage.prototype.getVideo = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.VIDEO //ประเภทสื่อเป็นแบบวีดีโอ
        };
        this.camera.getPicture(options).then(function (videoURI) {
            var options = {
                successCallback: function () { console.log('Video played'); },
                errorCallback: function (e) { console.log('Error streaming'); },
                orientation: 'portrait',
                shouldAutoClose: true,
                controls: false
            };
            _this.streamingMedia.playVideo(videoURI, options);
        });
    };
    VideoCapturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video-capture',template:/*ion-inline-start:"D:\HybridApp\src\pages\video-capture\video-capture.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title style="float:left">ถ่ายวีดีโอ</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      <ion-item>\n          <ion-label>คุณภาพของวีดีโอ</ion-label>\n          <ion-select [(ngModel)]="vdoQuality">\n            <ion-option value="100">สูง</ion-option>\n            <ion-option value="50">กลาง</ion-option>\n            <ion-option value="25">ต่ำ</ion-option>\n          </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label>บันทึกต่อเนื่อง</ion-label>\n          <ion-select [(ngModel)]="alwaysrecord">\n            <ion-option value="1">1 ครั้ง</ion-option>\n            <ion-option value="2">2 ครั้ง</ion-option>\n            <ion-option value="3">3 ครั้ง</ion-option>\n            <ion-option value="4">4 ครั้ง</ion-option>\n            <ion-option value="5">5 ครั้ง</ion-option>\n          </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label>เวลาบันทึกสูงสุด</ion-label>\n          <ion-select [(ngModel)]="duration">\n            <ion-option value="30">30 วินาที</ion-option>\n            <ion-option value="60">1 นาที</ion-option>\n            <ion-option value="120">2 นาที</ion-option>\n            <ion-option value="180">3 นาที</ion-option>\n            <ion-option value="240">4 นาที</ion-option>\n            <ion-option value="300">5 นาที</ion-option>\n          </ion-select>\n      </ion-item>\n      <ion-row center>  \n        <ion-col text-center>   \n          <button ion-button round [disabled]="!vdoQuality || !alwaysrecord || !alwaysrecord" (click)="captureVideo()"><i class="fas fa-video fa-lg"></i>&nbsp;ถ่ายวีดีโอ</button>\n          <button ion-button round class="getPictures" (click)="getVideo();"><i class="fas fa-play-circle"></i>&nbsp;ดูวีดีโอ</button>\n        </ion-col> \n      </ion-row>\n  </ion-content>\n  '/*ion-inline-end:"D:\HybridApp\src\pages\video-capture\video-capture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture_ngx__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media_ngx__["a" /* StreamingMedia */]])
    ], VideoCapturePage);
    return VideoCapturePage;
}());

//# sourceMappingURL=video-capture.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(420);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture_ngx__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media_ngx__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version_ngx__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_ngx__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar_ngx__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen_ngx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_streaming_media_ngx__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network_ngx__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__firebase_info__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner_ngx__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_maps_maps__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_camera_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_video_capture_video_capture__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_readnews_readnews__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_editdata_editdata__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_changepassword_changepassword__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_qrcode_qrcode__ = __webpack_require__(169);
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
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_video_capture_video_capture__["a" /* VideoCapturePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_readnews_readnews__["a" /* ReadnewsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editdata_editdata__["a" /* EditdataPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_qrcode_qrcode__["a" /* QrcodePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editdata/editdata.module#EditdataPageModule', name: 'EditdataPage', segment: 'editdata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrcodePageModule', name: 'QrcodePage', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/readnews/readnews.module#ReadnewsPageModule', name: 'ReadnewsPage', segment: 'readnews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_17__firebase_info__["a" /* FIREBASE_INFO */]),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_video_capture_video_capture__["a" /* VideoCapturePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_readnews_readnews__["a" /* ReadnewsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editdata_editdata__["a" /* EditdataPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_qrcode_qrcode__["a" /* QrcodePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar_ngx__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen_ngx__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_ngx__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture_ngx__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_media_ngx__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_streaming_media_ngx__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_network_ngx__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version_ngx__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_INFO; });
var FIREBASE_INFO = {
    apiKey: "AIzaSyBAsdy6YGaTu_p1gbpIikm-bsUgFMOFs1c",
    authDomain: "feisty-parity-194909.firebaseapp.com",
    databaseURL: "https://feisty-parity-194909.firebaseio.com",
    projectId: "feisty-parity-194909",
    storageBucket: "feisty-parity-194909.appspot.com",
    messagingSenderId: "896945094438"
};
//# sourceMappingURL=firebase.info.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network_ngx__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version_ngx__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_maps_maps__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_camera_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_video_capture_video_capture__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_editdata_editdata__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_qrcode_qrcode__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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















var MyApp = /** @class */ (function () {
    function MyApp(appVersion, firedb, network, alertCtrl, fireAuth, toast, loadingCtrl, platform, statusBar) {
        var _this = this;
        this.appVersion = appVersion;
        this.firedb = firedb;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.fireAuth = fireAuth;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.pages = [
            { title: 'ข่าวสาร', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], icon: 'paper' },
            { title: 'แผนที่', component: __WEBPACK_IMPORTED_MODULE_10__pages_maps_maps__["a" /* MapsPage */], icon: 'map' },
            { title: 'กล้องถ่ายรูป', component: __WEBPACK_IMPORTED_MODULE_11__pages_camera_camera__["a" /* CameraPage */], icon: 'camera' },
            { title: 'ถ่ายวีดีโอ', component: __WEBPACK_IMPORTED_MODULE_12__pages_video_capture_video_capture__["a" /* VideoCapturePage */], icon: 'videocam' },
            { title: 'สแกน QRcode', component: __WEBPACK_IMPORTED_MODULE_14__pages_qrcode_qrcode__["a" /* QrcodePage */], icon: 'barcode' }
        ];
        this.initializeApp();
        this.appVersion.getVersionNumber().then(function (version) {
            _this.version = version;
        });
    }
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var disconnectSubscription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        disconnectSubscription = this.network.onDisconnect().subscribe(function () {
                            var alert = _this.alertCtrl.create({
                                title: 'เกิดข้อผิดพลาด',
                                subTitle: 'กรุณาเชื่อมต่ออินเทอร์เน็ต เพื่อใช้งานแอปพลิเคชั่น',
                                enableBackdropDismiss: false,
                                buttons: [
                                    {
                                        text: 'ตกลง',
                                        handler: function () {
                                            _this.platform.exitApp();
                                        }
                                    }
                                ]
                            });
                            alert.present();
                            disconnectSubscription.unsubscribe();
                        });
                        //เช็คสถานะว่าเข้าสู่ระบบไว้แล้วหรือไม่
                        return [4 /*yield*/, this.fireAuth.authState
                                .subscribe(function (user) {
                                if (user) {
                                    _this.statusBar.styleDefault();
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
                                    _this.profileData = _this.firedb.object("User/" + user.uid).valueChanges();
                                }
                                else {
                                    _this.statusBar.styleDefault();
                                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
                                }
                            }, function () {
                                _this.statusBar.styleDefault();
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
                            })];
                    case 1:
                        //เช็คสถานะว่าเข้าสู่ระบบไว้แล้วหรือไม่
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //สั่งเปิดหน้า
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    //ตรวจสอบหน้า เพื่อ Active สี ใน SideMenu
    MyApp.prototype.isActive = function (page) {
        if (this.nav.getActive() && this.nav.getActive().instance instanceof page.component) {
            return 'active';
        }
        return false;
    };
    //เปิดหน้าสมัครสมาชิก
    MyApp.prototype.signin = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SigninPage */]);
    };
    //แก้ไขข้อมูล
    MyApp.prototype.editdata = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_editdata_editdata__["a" /* EditdataPage */]);
    };
    //เปลี่ยนรหัสผ่าน
    MyApp.prototype.changepassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], { item: 'Reauth' });
    };
    //ลงชื่อออกจาระบบ
    MyApp.prototype.signout = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'โปรดรอสักครู่...'
        });
        loading.present().then(function () {
            _this.fireAuth.auth.signOut().then(function () {
                _this.toast.create({
                    message: "ลงชื่อออกสำเร็จ!",
                    duration: 4000,
                    cssClass: "success"
                }).present();
                loading.dismiss();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\HybridApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content class="bgcolor">\n      <div class="header">\n        <h3>HybridApp</h3>\n        <h5>ยินดีต้อนรับ<br>คุณ&nbsp;{{(profileData | async)?.firstname}}&nbsp;&nbsp;{{(profileData | async)?.lastname}}<br>เบอร์โทร&nbsp;{{(profileData | async)?.tel}}</h5>\n        <button menuClose (click)="changepassword()"><i class="fas fa-key fa-sm"></i>&nbsp;เปลี่ยนรหัสผ่าน</button>\n        <button menuClose (click)="editdata()"><i class="fas fa-user-edit fa-sm"></i>&nbsp;แก้ไขข้อมูล</button>\n        <br>\n        <button menuClose (click)="signout()"><i class="fas fa-sign-out-alt fa-sm"></i>&nbsp;ลงชื่อออก&nbsp;</button>\n      </div>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [class.active]="isActive(p)">\n        <ion-icon name="{{p.icon}}" item-left></ion-icon>{{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n      <p position="bottom" style="color:#818181;text-align: center;">เวอร์ชัน&nbsp;:&nbsp;{{version}}</p>\n  </ion-footer>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\HybridApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version_ngx__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network_ngx__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar_ngx__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_readnews_readnews__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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





var HomePage = /** @class */ (function () {
    function HomePage(splashscreen, firedb, navCtrl) {
        this.splashscreen = splashscreen;
        this.firedb = firedb;
        this.navCtrl = navCtrl;
        this.loaddata();
    }
    HomePage.prototype.loaddata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.firedb.list('News').valueChanges()];
                    case 1:
                        _a.newsData = _b.sent();
                        setTimeout(function () { _this.splashscreen.hide(); }, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.readnews = function (newsid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_readnews_readnews__["a" /* ReadnewsPage */], { item: newsid }, { animate: true, direction: 'forward' });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\HybridApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="float:left">ข่าวสาร</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n      <ion-card *ngFor="let item of newsData | async" (click)="readnews(item.id)">\n\n          <img src="{{item.imagelink}}">\n        \n          <ion-card-content>\n            {{item.header}}\n          </ion-card-content>\n        \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\HybridApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen_ngx__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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




var SigninPage = /** @class */ (function () {
    function SigninPage(loadingCtrl, fireAuth, toast, navCtrl, navParams, firedb) {
        this.loadingCtrl = loadingCtrl;
        this.fireAuth = fireAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firedb = firedb;
        this.user = {};
        this.isenabled = true;
    }
    SigninPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, loading, loading, loading_1, err_1, loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 9]);
                        if (!(user.email == null || user.password == null || user.confirmpassword == null || user.firstname == null || user.lastname == null || user.tel == null)) return [3 /*break*/, 1];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "กรุณาระบุข้อมูลให้ครบ",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 6];
                    case 1:
                        if (!(user.confirmpassword != user.password)) return [3 /*break*/, 2];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "ยืนยันรหัสผ่านไม่ตรงกัน",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(user.tel.length < 10)) return [3 /*break*/, 3];
                        loading = this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        });
                        loading.present();
                        this.toast.create({
                            message: "เบอร์โทรศัพท์ไม่ถูกต้อง",
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.loadingCtrl.create({
                            content: 'โปรดรอสักครู่...'
                        })];
                    case 4:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 5:
                        _a.sent();
                        this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                            .then(function (res) {
                            _this.firedb.object("User/" + res.user.uid).set({
                                email: user.email,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                tel: user.tel
                            });
                            _this.fireAuth.auth.signOut();
                            loading_1.dismiss();
                            _this.toast.create({
                                message: "สมัครสมาชิกเรียบร้อย",
                                duration: 4000,
                                cssClass: "success"
                            }).present();
                        })
                            .catch(function (err) {
                            switch (err.message) {
                                case 'The email address is badly formatted.':
                                    _this.toast.create({
                                        message: "คุณป้อนอีเมล์ไม่ถูกต้อง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'Password should be at least 6 characters':
                                    _this.toast.create({
                                        message: "รหัสผ่านต้องมีความยาว 6 ตัวอักษรขึ้นไป",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'The email address is already in use by another account.':
                                    _this.toast.create({
                                        message: "อีเมล์นี้ถูกใช้งานไปแล้ว",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                case 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.':
                                    _this.toast.create({
                                        message: "กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                                    break;
                                default:
                                    console.log(err.message);
                                    _this.toast.create({
                                        message: err,
                                        duration: 4000,
                                        cssClass: "error"
                                    }).present();
                                    loading_1.dismiss();
                            }
                            ;
                        });
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: 'โปรดรอสักครู่...'
                            })];
                    case 8:
                        loading = _a.sent();
                        loading.present();
                        this.toast.create({
                            message: err_1,
                            duration: 4000,
                            cssClass: "error"
                        }).present();
                        loading.dismiss();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    //ตรวจสอบรับค่าตัวเลข 0 - 9 เท่านั้น
    SigninPage.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\HybridApp\src\pages\signin\signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>สมัครสมาชิก</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <label>อีเมล์<input type="text" [(ngModel)]="user.email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})" placeholder="ระบุอีเมล์"></label>\n  <label>รหัสผ่าน <input type="password" [(ngModel)]="user.password" placeholder="ระบุรหัสผ่าน"></label>\n  <label>ยืนยันรหัสผ่าน <input type="password" [(ngModel)]="user.confirmpassword" placeholder="ระบุยืนยันรหัสผ่าน"></label>\n  <label>ชื่อ <input type="text" [(ngModel)]="user.firstname" placeholder="ระบุชื่อ"></label>\n  <label>นามสกุล <input type="text" [(ngModel)]="user.lastname" placeholder="ระบุนามสกุล"></label>\n  <label>เบอร์โทรศัพท์ <input type="tel" [(ngModel)]="user.tel" [maxlength]="10" [minlength]="10" (keypress)="numberOnly($event)" placeholder="ระบุเบอร์โทรศัพท์"></label>\n  <button clear class="signup" (click)="register(user)">สมัครสมาชิก</button>\n</ion-content>  \n'/*ion-inline-end:"D:\HybridApp\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map