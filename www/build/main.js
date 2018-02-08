webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PremiumModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PremiumModal = (function () {
    function PremiumModal(platform, params, viewCtrl, storage, iap, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.iap = iap;
        this.alertCtrl = alertCtrl;
        this.product = { price: 9.99, title: "Premium", productId: "com.globenotes.app.premium" };
        this.iap
            .getProducts(['com.globenotes.app.premium'])
            .then(function (products) {
            if (products.length > 0) {
                _this.product = products[0];
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    }
    PremiumModal.prototype.buyPremium = function () {
        var _this = this;
        this.iap
            .buy('com.globenotes.app.premium')
            .then(function (data) {
            _this.viewCtrl.dismiss(true);
        })
            .catch(function (err) {
            alert(JSON.stringify(err));
            console.log(err);
        });
    };
    PremiumModal.prototype.restorePremium = function () {
        var _this = this;
        this.iap.restorePurchases().then(function (products) {
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var product = products_1[_i];
                if (product.productId === _this.product.productId) {
                    _this.viewCtrl.dismiss(true);
                    return;
                }
            }
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: "Could not restore premium as we couldn't find it in your purchases.",
                buttons: ['OK']
            });
            alert.present();
        })
            .catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: "There was an error trying to restore your purchase.",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    PremiumModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    PremiumModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'premium',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\modals\premium\premium.html"*/`<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Upgrade To Premium\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <div class=\'premium-header\'>    \n        <h1>Upgrade to premium to continue</h1>\n        <p>See below for the full features you get from upgrading</p>\n        <button ion-button block (click)="buyPremium()">Upgrade Now - {{product.price}}</button>\n    </div>    \n    \n    <ion-list class=\'premium-list\'>\n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Unlimited dictations</h2>\n            <p>Don\'t be restricted to just 100 dictations. Dictate as much as you need.</p>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Unlimited translations</h2>\n            <p>Have as many additional live translations as you need.</p>\n        </ion-item>   \n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Priority support</h2>\n            <p>Stuck with something? We\'ll help right away.</p>\n        </ion-item>    \n        <ion-item>\n            <ion-icon name="checkmark" item-start></ion-icon>\n            <h2>Priority feature requests</h2>\n            <p>Have an idea for a new feature? We\'ll listen and add it to future releases.</p>\n        </ion-item>              \n    </ion-list>  \n    \n    \n    <div class="restore">\n        <p>Already purchased premium?</p>\n        <button ion-button outline block (click)="restorePremium()">Restore Premium</button>\n    </div>\n    \n    \n</ion-content>`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\modals\premium\premium.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PremiumModal);
    return PremiumModal;
}());

//# sourceMappingURL=premium.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saved_saved__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__saved_saved__["a" /* SavedPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\pages\tabs\tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Dictate" tabIcon="mic"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Saved" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SavedPage = (function () {
    function SavedPage(navCtrl, storage, alertCtrl, clipboard, sharer, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.sharer = sharer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.properties = { noteDeleted: false, notePosition: 0, loaded: false };
        this.languages = [];
        this.notes = [];
        this.storage.get("languages").then(function (data) {
            if (data) {
                _this.languages = data;
            }
        });
    }
    SavedPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("savedNotes").then(function (notes) {
            _this.properties.loaded = true;
            if (notes) {
                _this.notes = notes;
            }
        });
    };
    SavedPage.prototype.copyNote = function (note) {
        var _this = this;
        this.clipboard.copy(note).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Note copied to clipboard',
                duration: 1000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    SavedPage.prototype.shareNote = function (note) {
        this.sharer.share(note);
    };
    SavedPage.prototype.dragNote = function (ev, index, note) {
        var _this = this;
        var element = ev._elementRef.nativeElement;
        element.style.opacity = 1 - (ev._openAmount / 200);
        this.properties.notePosition = ev._openAmount;
        if (ev._openAmount >= (100) && !this.properties.noteDeleted) {
            this.properties.noteDeleted = true;
            setTimeout(function () {
                if (_this.properties.notePosition < 100) {
                    return;
                }
                var id = note.id;
                _this.storage.get("notes").then(function (data) {
                    if (data) {
                        for (var index in data) {
                            if (data[index].id === id) {
                                data[index].saved = false;
                                _this.storage.set("notes", data);
                                _this.events.publish('notes:updated', data);
                                break;
                            }
                        }
                    }
                });
                _this.notes.splice(index, 1);
                _this.storage.set("savedNotes", _this.notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note removed',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
                _this.properties.noteDeleted = false;
            }, 500);
        }
    };
    SavedPage.prototype.formatLanguage = function (code) {
        var formatted = "";
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            if (language.code === code) {
                formatted = language.name;
                break;
            }
        }
        return formatted;
    };
    SavedPage.prototype.removeTranslation = function (index, translationArray) {
        translationArray.splice(index, 1);
        this.storage.set("savedNotes", this.notes);
    };
    SavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\pages\saved\saved.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Saved\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    \n    \n    <div class="saved-empty" *ngIf="this.properties.loaded && notes.length < 1">\n        <ion-icon name=\'star\'></ion-icon>\n        No Saved Notes\n    </div>     \n\n    <ion-list class="previous saved-notes">\n        <ion-item-sliding #item *ngFor="let note of notes; let i = index" (ionDrag)="dragNote($event, i, note)">\n        <ion-item>\n            <ion-card>\n\n                \n            <ion-card-header>\n                <a>{{formatLanguage(note.language)}}</a>\n                <div class="actions"> \n                    <button ion-button icon-only clear small (click)="copyNote(note.note)">\n                        <ion-icon name="copy"></ion-icon>\n                    </button> \n                    <button ion-button icon-only clear small (click)="shareNote(note.note)">\n                        <ion-icon name="send"></ion-icon>\n                    </button>               \n\n\n\n                </div>\n            </ion-card-header>                \n                \n                  \n            <ion-card-content>\n                <p>{{note.note}}</p>  \n                <div class="language-translations">\n                    <div class="translation" *ngFor="let translation of note.translations;let i = index">\n                        <span class="translation-title">\n                            <span class="language">{{formatLanguage(translation.code)}}</span>\n                            <button ion-button clear small color="danger" (click)="removeTranslation(i, note.translations)">Remove</button>\n                        </span>\n                         <p (press)="shareNote(translation.text)">{{translation.text}}</p>\n\n                    </div>\n                </div>                \n                \n                \n            </ion-card-content>\n\n        </ion-card>\n            </ion-item>\n    <ion-item-options side="right">\n        <div class="fullwidth-slide"></div>\n    </ion-item-options>\n\n            \n            </ion-item-sliding>\n    </ion-list>  \n    \n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\pages\saved\saved.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SavedPage);
    return SavedPage;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_premium_premium__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsPage = (function () {
    function SettingsPage(navCtrl, storage, events, emailComposer, iab, modalCtrl, alertCtrl, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.events = events;
        this.emailComposer = emailComposer;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.languages = [];
        this.premium = false;
        this.settings = { language: "EN", translations: [], historyMax: 10 };
        this.storage.get("languages").then(function (data) {
            if (data) {
                _this.languages = data;
            }
        });
        this.storage.get("settings").then(function (data) {
            if (data) {
                _this.settings = data;
            }
        });
        this.storage.get("premium").then(function (data) {
            if (data) {
                _this.premium = data;
            }
        });
        events.subscribe('premium:purchased', function () {
            _this.premium = true;
        });
        this.restrictions = { dictationsLimit: 100, dictationsTotal: 0, translationsLimit: 5 };
        this.storage.get("restrictions").then(function (data) {
            if (data) {
                _this.restrictions = data;
            }
        });
    }
    SettingsPage.prototype.updateSettings = function () {
        var _this = this;
        if (!this.premium && this.settings.translations.length > this.restrictions.translationsLimit) {
            while (this.settings.translations.length > this.restrictions.translationsLimit) {
                this.settings.translations.pop();
            }
            //show alert that you can only pick 5
            var data = {
                title: "Error",
                subTitle: "Free limit exceeded",
                message: "Upgrade to premium to have more than " + this.restrictions.translationsLimit + " simultaneous live translations.",
                buttons: [
                    {
                        text: 'Upgrade',
                        handler: function (data) {
                            _this.upgrade();
                        }
                    },
                    {
                        text: 'Dismiss',
                        role: 'cancel'
                    }
                ]
            };
            var alert_1 = this.alertCtrl.create(data);
            alert_1.present();
        }
        this.storage.set("settings", this.settings);
        this.events.publish('settings:updated', this.settings);
    };
    SettingsPage.prototype.upgrade = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modals_premium_premium__["a" /* PremiumModal */]);
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            _this.storage.set('premium', true);
            _this.events.publish('premium:purchased');
        });
        modal.present();
    };
    SettingsPage.prototype.openRate = function () {
        if (this.plt.is("ios")) {
            window.open("https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1345427430", '_system');
        }
        else {
            window.open("https://play.google.com/store/apps/details?id=com.globenotes.app", '_system');
        }
    };
    SettingsPage.prototype.openFollow = function () {
        window.open("https://www.facebook.com/globenotesapp", '_system');
    };
    SettingsPage.prototype.openEmail = function () {
        var email = {
            to: ["constellation1130@gmail.com"],
            subject: 'Subject for your support query',
            body: 'Provide details about the support you require.',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\pages\settings\settings.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n<ion-list class="settings-list">\n    <ion-item>\n        <ion-label>Default Language</ion-label>\n        <ion-select [(ngModel)]="settings.language" (ionChange)="updateSettings()">\n            <ion-option *ngFor="let language of languages" value="{{language.code}}">{{language.name}}</ion-option>\n        </ion-select>\n    </ion-item>\n    \n    \n    <ion-item>\n        <ion-label>Default Translations</ion-label>\n        <ion-select [(ngModel)]="settings.translations" multiple="true" (ionChange)="updateSettings()">\n            <ion-option *ngFor="let language of languages" value="{{language.code}}">{{language.name}}</ion-option>\n        </ion-select>\n    </ion-item>   \n    \n  <ion-item>\n    <ion-label>Max Note History</ion-label>\n    <ion-input type="number" [(ngModel)]="settings.historyMax" (change)="updateSettings()"></ion-input>\n  </ion-item>    \n    \n <ion-item>\n    <ion-icon name="trophy" item-start></ion-icon>\n    Get Premium\n    <button ion-button outline item-end (click)="upgrade()" *ngIf="!premium">Upgrade</button>\n    <button ion-button outline item-end disabled *ngIf="premium">Purchased</button>\n  </ion-item>   \n    \n <ion-item>\n    <ion-icon name="heart" item-start></ion-icon>\n    Rate The App\n    <button ion-button outline item-end (click)="openRate()">Rate</button>\n  </ion-item>    \n    \n    \n <ion-item>\n    <ion-icon name="logo-facebook" item-start></ion-icon>\n    Follow Us\n    <button ion-button outline item-end (click)="openFollow()">Follow</button>\n  </ion-item>   \n    \n    \n <ion-item>\n    <ion-icon name="mail" item-start></ion-icon>\n    Contact Support\n    <button ion-button outline item-end (click)="openEmail()">Email</button>\n  </ion-item>      \n</ion-list>\n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_premium_premium__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_edit_text_edit_text__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_translate_translate__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, plt, cd, _zone, storage, alertCtrl, clipboard, sharer, toastCtrl, events, modalCtrl, translateProvider, speechRecognition) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.cd = cd;
        this._zone = _zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.sharer = sharer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.translateProvider = translateProvider;
        this.speechRecognition = speechRecognition;
        this.properties = { premium: false, isRecording: false, language: "EN", isIos: this.plt.is('ios'), previousDelete: false, previousNotePosition: 0,
            translations: [],
            currentMatch: "",
            micVolume: 0, currentSaved: false, currentId: false };
        this.options = { language: this.properties.language,
            showPopup: false,
            showPartial: true,
            matches: 3
        };
        this.notes = [];
        this.languages = [];
        this.settings = { language: "", translations: [], historyMax: 10 };
        this.storage.get("settings").then(function (data) {
            if (data) {
                _this.settings = data;
                _this.properties.language = _this.settings.language;
                _this.updateSettingsTranslations();
            }
        });
        this.restrictions = { dictationsLimit: 100, dictationsTotal: 0, translationsLimit: 5 };
        this.storage.get("restrictions").then(function (data) {
            if (data) {
                _this.restrictions = data;
            }
        });
        this.storage.get("notes").then(function (data) {
            if (data) {
                _this.notes = data;
                _this.scrollBottom();
            }
        });
        this.setSupportedLanguages();
        this.plt.ready().then(function () {
            if (_this.plt.is("cordova")) {
                _this.speechRecognition.isRecognitionAvailable().then(function (available) {
                    if (available) {
                        _this.speechRecognition.hasPermission()
                            .then(function (hasPermission) {
                            if (!hasPermission) {
                                _this.speechRecognition.requestPermission();
                            }
                        });
                    }
                });
            }
        });
        events.subscribe('notes:updated', function (notes) {
            _this.notes = notes;
        });
        events.subscribe('settings:updated', function (settings) {
            _this.settings = settings;
            _this.updateSettingsTranslations();
        });
        this.storage.get("premium").then(function (data) {
            if (data) {
                _this.properties.premium = data;
            }
        });
        events.subscribe('premium:purchased', function () {
            _this.properties.premium = true;
        });
    }
    HomePage.prototype.startRecording = function () {
        var _this = this;
        this.speechRecognition.startListening(this.options)
            .subscribe(function (matches) {
            console.log(matches);
            if (matches.length < 1) {
                return;
            }
            var result = matches[0];
            _this._zone.run(function () {
                _this.properties.currentMatch = result.charAt(0).toUpperCase() + result.slice(1);
                _this.calculateTranslations();
                _this.scrollBottom();
                //console.log(this.properties.currentMatch);
            });
        }, function (onerror) {
            alert(onerror);
            console.log('error:', onerror);
        });
    };
    HomePage.prototype.toggleListening = function () {
        if (this.properties.isRecording) {
            this.properties.isRecording = false;
            this.speechRecognition.stopListening();
            this.properties.currentMatch = this.properties.currentMatch + ".";
            setTimeout(function () { AudioHandler.unmuteApp(); }, 500);
        }
        else if (!this.properties.premium && this.restrictions.dictationsTotal >= this.restrictions.dictationsLimit) {
            this.upgrade();
        }
        else {
            if (this.properties.currentMatch) {
                this.notes.unshift({ note: this.properties.currentMatch, saved: this.properties.currentSaved, id: this.properties.currentId, language: this.properties.language, translations: this.properties.translations });
                if (this.notes.length > this.settings.historyMax) {
                    this.notes.pop();
                }
                this.storage.set("notes", this.notes);
                this.scrollBottom();
                this.properties.currentMatch = "";
                this.properties.translations = [];
                this.updateSettingsTranslations();
                this.properties.currentSaved = false;
                this.properties.currentId = false;
            }
            this.restrictions.dictationsTotal += 1;
            this.saveRestrictions();
            this.properties.isRecording = true;
            this.startRecording();
            AudioHandler.muteApp();
        }
    };
    HomePage.prototype.updateSettingsTranslations = function () {
        var requireUpdate = false;
        for (var _i = 0, _a = this.settings.translations; _i < _a.length; _i++) {
            var translation = _a[_i];
            var exists = false;
            for (var _b = 0, _c = this.properties.translations; _b < _c.length; _b++) {
                var propertyTranslation = _c[_b];
                if (propertyTranslation.code === translation) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.properties.translations.push({ code: translation, text: this.properties.currentMatch });
                requireUpdate = true;
            }
        }
        if (requireUpdate) {
            this.calculateTranslations();
        }
    };
    HomePage.prototype.openEditMatch = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modals_edit_text_edit_text__["a" /* EditTextModal */], { text: this.properties.currentMatch });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.properties.currentMatch = data;
                _this.calculateTranslations();
            }
        });
        modal.present();
    };
    HomePage.prototype.copyNote = function (note) {
        var _this = this;
        this.clipboard.copy(note).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Note copied to clipboard',
                duration: 1000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    HomePage.prototype.shareNote = function (note) {
        this.sharer.share(note);
    };
    HomePage.prototype.saveNote = function (note) {
        var _this = this;
        if (this.properties.currentSaved) {
            this.properties.currentSaved = false;
            this.storage.get("savedNotes").then(function (notes) {
                if (notes) {
                    for (var index in notes) {
                        var savedNote = notes[index];
                        if (savedNote.id === _this.properties.currentId) {
                            notes.splice(index, 1);
                            _this.storage.set("savedNotes", notes);
                            _this.properties.currentId = false;
                            break;
                        }
                    }
                }
                _this.storage.set("savedNotes", notes);
            });
        }
        else {
            this.properties.currentSaved = true;
            this.storage.get("savedNotes").then(function (notes) {
                if (!notes) {
                    notes = [];
                }
                ;
                _this.properties.currentId = notes.length + 1;
                notes.unshift({ note: _this.properties.currentMatch, id: _this.properties.currentId, language: _this.properties.language, translations: _this.properties.translations });
                _this.storage.set("savedNotes", notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note saved',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
    };
    HomePage.prototype.savePreviousNote = function (note) {
        var _this = this;
        if (note.saved) {
            note.saved = false;
            this.storage.get("savedNotes").then(function (notes) {
                if (notes) {
                    for (var index in notes) {
                        var savedNote = notes[index];
                        if (savedNote.id === note.id) {
                            notes.splice(index, 1);
                            _this.storage.set("savedNotes", notes);
                            note.id = false;
                            _this.storage.set("notes", _this.notes);
                            break;
                        }
                    }
                }
            });
        }
        else {
            note.saved = true;
            this.storage.get("savedNotes").then(function (notes) {
                if (!notes) {
                    notes = [];
                }
                ;
                note.id = notes.length + 1;
                notes.unshift({ note: note.note, id: note.id, language: note.language, translations: note.translations });
                _this.storage.set("notes", _this.notes);
                _this.storage.set("savedNotes", notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note saved',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
    };
    HomePage.prototype.scrollBottom = function () {
        var objDiv = document.querySelectorAll(".dictate-card p");
        for (var index in objDiv) {
            if (objDiv[index] instanceof HTMLElement) {
                objDiv[index].scrollTop = objDiv[index].scrollHeight;
            }
        }
    };
    HomePage.prototype.dragNote = function (ev, index, note) {
        var _this = this;
        var element = ev._elementRef.nativeElement;
        element.style.opacity = 1 - (ev._openAmount / 200);
        this.properties.previousNotePosition = ev._openAmount;
        if (ev._openAmount >= (100) && !this.properties.previousDeleted) {
            this.properties.previousDeleted = true;
            setTimeout(function () {
                if (_this.properties.previousNotePosition < 100) {
                    return;
                }
                _this.notes.splice(index, 1);
                _this.storage.set("notes", _this.notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note removed',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
                _this.properties.previousDeleted = false;
            }, 500);
        }
    };
    HomePage.prototype.openTranslateLanguage = function () {
        var _this = this;
        var data = {
            title: "Add Translations",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        if (!_this.properties.premium && data && data.length > _this.restrictions.translationsLimit) {
                            //show alert that you can only pick 5
                            var data_1 = {
                                title: "Error",
                                subTitle: "Free limit exceeded",
                                message: "Upgrade to premium to have more than " + _this.restrictions.translationsLimit + " simultaneous live translations.",
                                buttons: [
                                    {
                                        text: 'Upgrade',
                                        handler: function (data) {
                                            _this.upgrade();
                                        }
                                    },
                                    {
                                        text: 'Dismiss',
                                        role: 'cancel'
                                    }
                                ]
                            };
                            var alert_1 = _this.alertCtrl.create(data_1);
                            alert_1.present();
                            return;
                        }
                        //first check for removed items
                        for (var i = _this.properties.translations.length - 1; i > -1; i--) {
                            var translation = _this.properties.translations[i];
                            if (data.indexOf(translation.code) < 0) {
                                _this.properties.translations.splice(i, 1);
                            }
                        }
                        var requireUpdate = false;
                        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                            var code = data_2[_i];
                            if (!_this.isTranslationChecked(code)) {
                                _this.properties.translations.push({ code: code, text: _this.properties.currentMatch });
                                requireUpdate = true;
                            }
                        }
                        if (requireUpdate) {
                            _this.calculateTranslations();
                        }
                    }
                }
            ],
            inputs: []
        };
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            data.inputs.push({ type: 'checkbox', label: language.name, value: language.code, checked: this.isTranslationChecked(language.code) });
        }
        var alert = this.alertCtrl.create(data);
        alert.present();
    };
    HomePage.prototype.removeTranslation = function (index, translationArray) {
        translationArray.splice(index, 1);
        this.storage.set("notes", this.notes);
    };
    HomePage.prototype.calculateTranslations = function () {
        var _this = this;
        var _loop_1 = function (translation) {
            if (translation.code === this_1.properties.language) {
                translation.text = this_1.properties.currentMatch;
            }
            this_1.translateProvider.translateText(this_1.properties.language, translation.code, this_1.properties.currentMatch).then(function (result) {
                translation.text = result["data"]["translations"][0]["translatedText"];
                _this.scrollBottom();
            }).catch(function (e) {
                //console.log(e);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.properties.translations; _i < _a.length; _i++) {
            var translation = _a[_i];
            _loop_1(translation);
        }
    };
    HomePage.prototype.isTranslationChecked = function (language) {
        var checked = false;
        for (var _i = 0, _a = this.properties.translations; _i < _a.length; _i++) {
            var translation = _a[_i];
            if (translation.code === language) {
                checked = true;
                break;
            }
        }
        return checked;
    };
    HomePage.prototype.changeLanguage = function () {
        var _this = this;
        var data = {
            title: "Change Language",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.properties.language = data;
                        _this.options.language = _this.properties.language;
                        _this.getLocallyTranslatedLanguages();
                    }
                }
            ],
            inputs: []
        };
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            data.inputs.push({ type: 'radio', label: language.name, value: language.code, checked: language.code === this.properties.language });
        }
        var alert = this.alertCtrl.create(data);
        alert.present();
    };
    HomePage.prototype.formatLanguage = function (code) {
        var formatted = "";
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            if (language.code === code) {
                formatted = language.name;
                break;
            }
        }
        return formatted;
    };
    HomePage.prototype.setSupportedLanguages = function () {
        this.languages = [
            { code: "ZH", name: "Chinese (Mandarin)" },
            { code: "CS", name: "Czech" },
            { code: "DA", name: "Danish" },
            { code: "NL", name: "Dutch" },
            { code: "EN", name: "English" },
            { code: "ET", name: "Estonian" },
            { code: "FR", name: "French" },
            { code: "KA", name: "Georgian" },
            { code: "DE", name: "German" },
            { code: "HI", name: "Hindi" },
            { code: "HU", name: "Hungarian" },
            { code: "LA", name: "Latin" },
            { code: "LV", name: "Latvian" },
            { code: "LT", name: "Lithuanian" },
            { code: "SR", name: "Serbian" },
            { code: "CY", name: "Welsh" },
            { code: "XH", name: "Xhosa" },
        ];
        this.languages.sort(function (a, b) {
            return a.name == b.name ? 0 : +(a.name > b.name) || -1;
            ;
        });
        this.storage.set("languages", this.languages);
        this.getLocallyTranslatedLanguages();
    };
    HomePage.prototype.getLocallyTranslatedLanguages = function () {
        var _this = this;
        this.translateProvider.getLanguages(this.properties.language).then(function (result) {
            var languages = [];
            for (var _i = 0, _a = result["data"]["languages"]; _i < _a.length; _i++) {
                var language = _a[_i];
                languages.push({ name: language.name, code: language.language.toUpperCase() });
            }
            _this.languages = languages;
            _this.storage.set("languages", _this.languages);
        });
    };
    HomePage.prototype.saveRestrictions = function () {
        this.storage.set("restrictions", this.restrictions);
    };
    HomePage.prototype.upgrade = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_premium_premium__["a" /* PremiumModal */]);
        modal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            _this.storage.set('premium', true);
            _this.events.publish('premium:purchased');
        });
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Globe Notes</ion-title>\n    <ion-buttons end>\n        <button *ngIf="!properties.premium" ion-button tappable class="premium-button" (click)="upgrade()">\n            Upgrade\n        </button>\n    </ion-buttons>        \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class="dictate-card">\n        <ion-card-header>\n            <a (click)="changeLanguage()">{{formatLanguage(properties.language)}}</a>\n            <div class="actions" [hidden]="!properties.currentMatch">\n                <button ion-button icon-only clear small (click)="saveNote(properties.currentMatch)">\n                    <ion-icon [name]="properties.currentSaved ? \'star\' :\'star-outline\'"></ion-icon>\n                </button>   \n                <button ion-button icon-only clear small (click)="copyNote(properties.currentMatch)">\n                    <ion-icon name="copy"></ion-icon>\n                </button> \n                <button ion-button icon-only clear small (click)="shareNote(properties.currentMatch)">\n                    <ion-icon name="send"></ion-icon>\n                </button>               \n                \n                \n                \n            </div>\n        </ion-card-header>\n        <ion-card-content>\n            <p class="pre-recording" *ngIf="!properties.currentMatch && !properties.isRecording">Tap the mic to start dictating...</p>\n            <p class="pre-recording" *ngIf="!properties.currentMatch && properties.isRecording">Start talking...</p>\n            <p *ngIf="properties.currentMatch" (press)="openEditMatch()">{{properties.currentMatch}}</p>\n            <div class="language-translations">\n                <div class="translation" *ngFor="let translation of properties.translations;let i = index">\n                    <span class="translation-title">\n                        <span class="language">{{formatLanguage(translation.code)}}</span>\n                        <button ion-button clear small color="danger" (click)="removeTranslation(i, properties.translations)">Remove</button>\n                    </span>\n                     <p (press)="shareNote(translation.text)">{{translation.text}}</p>\n                    \n                </div>\n            </div>\n        </ion-card-content>\n        <div class="card-footer" >\n            <button ion-button clear (click)="openTranslateLanguage()" [hidden]="!properties.currentMatch">Translate</button>\n        </div>\n        <div class="dictate-button">\n            <button ion-fab (click)="toggleListening()" [color]="properties.isRecording ? \'danger\' : \'primary\'"><ion-icon name="mic"></ion-icon></button>\n        </div>\n    </ion-card>\n    \n    <ion-list class="previous">\n        <ion-item-sliding #item *ngFor="let note of notes; let i = index" (ionDrag)="dragNote($event, i, note)">\n        <ion-item>\n            <ion-card>\n\n                \n            <ion-card-header>\n                <a>{{formatLanguage(note.language)}}</a>\n                <div class="actions">\n                    <button ion-button icon-only clear small (click)="savePreviousNote(note)">\n                        <ion-icon [name]="note.saved ? \'star\' :\'star-outline\'"></ion-icon>\n                    </button>   \n                    <button ion-button icon-only clear small (click)="copyNote(note.note)">\n                        <ion-icon name="copy"></ion-icon>\n                    </button> \n                    <button ion-button icon-only clear small (click)="shareNote(note.note)">\n                        <ion-icon name="send"></ion-icon>\n                    </button>               \n\n\n\n                </div>\n            </ion-card-header>                \n                \n                  \n            <ion-card-content>\n                <p>{{note.note}}</p> \n                <div class="language-translations">\n                    <div class="translation" *ngFor="let translation of note.translations;let i = index">\n                        <span class="translation-title">\n                            <span class="language">{{formatLanguage(translation.code)}}</span>\n                            <button ion-button clear small color="danger" (click)="removeTranslation(i, note.translations)">Remove</button>\n                        </span>\n                         <p (press)="shareNote(translation.text)">{{translation.text}}</p>\n\n                    </div>\n                </div>                \n            </ion-card-content>\n\n        </ion-card>\n            </ion-item>\n    <ion-item-options side="right">\n        <div class="fullwidth-slide"></div>\n    </ion-item-options>\n\n            \n            </ion-item-sliding>\n    </ion-list>\n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__providers_translate_translate__["a" /* TranslateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_translate_translate__["a" /* TranslateProvider */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__["a" /* SpeechRecognition */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__["a" /* SpeechRecognition */]) === "function" && _o || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTextModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditTextModal = (function () {
    function EditTextModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.text = params.data.text;
    }
    EditTextModal.prototype.saveText = function () {
        this.viewCtrl.dismiss(this.text);
    };
    EditTextModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditTextModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-text',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\modals\edit-text\edit-text.html"*/`<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>\n            Edit Text\n        </ion-title>\n        <ion-buttons start>\n            <button icon-start ion-button (click)="saveText()" showWhen="android, windows">\n                <ion-icon name="md-checkmark"></ion-icon>\n                Save\n            </button>       \n           \n            \n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        \n        <ion-buttons showWhen="ios" end>\n            <button ion-button (click)="saveText()">\n                <span ion-text>Save</span>\n            </button>              \n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list class="edit-text">\n      <ion-item>\n        <ion-label floating>Dictated Text</ion-label>\n        <ion-textarea [(ngModel)]="text" autosize></ion-textarea>\n      </ion-item>\n    </ion-list>    \n\n    \n</ion-content>`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\modals\edit-text\edit-text.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], EditTextModal);
    return EditTextModal;
}());

//# sourceMappingURL=edit-text.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TranslateProvider = (function () {
    function TranslateProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    TranslateProvider.prototype.translateText = function (srcLanguage, targetLanguage, text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = { source: srcLanguage, target: targetLanguage, format: "text", q: text, key: "AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8" };
            _this.http.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8", data).subscribe(function (res) {
                resolve(res);
            }, function (e) {
                reject(e);
            });
        });
    };
    TranslateProvider.prototype.getLanguages = function (srcLanguage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = { key: "AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8", target: srcLanguage };
            _this.http.post("https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8", data).subscribe(function (res) {
                resolve(res);
            }, function (e) {
                reject(e);
            });
        });
    };
    TranslateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TranslateProvider);
    return TranslateProvider;
}());

//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_saved_saved__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_edit_text_edit_text__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_premium_premium__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_translate_translate__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_clipboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_autosize_autosize__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_speech_recognition__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__modals_edit_text_edit_text__["a" /* EditTextModal */],
                __WEBPACK_IMPORTED_MODULE_20__components_autosize_autosize__["a" /* Autosize */],
                __WEBPACK_IMPORTED_MODULE_13__modals_premium_premium__["a" /* PremiumModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__modals_edit_text_edit_text__["a" /* EditTextModal */],
                __WEBPACK_IMPORTED_MODULE_13__modals_premium_premium__["a" /* PremiumModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__providers_translate_translate__["a" /* TranslateProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotesios\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotesios\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map