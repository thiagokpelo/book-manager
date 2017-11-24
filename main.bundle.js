webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_3__books_books_component__["a" /* BooksComponent */],
    },
    {
        path: 'books/favorites',
        component: __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__["a" /* FavoritesComponent */]
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_0__error_error_component__["a" /* ErrorComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n        aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['books']\"><span class=\"glyphicon glyphicon-book\"></span> Books Manager</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a [routerLink]=\"['books']\">Search Your Book\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <a [routerLink]=\"['books/favorites']\">Favorites</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_modal_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_card_card_component__ = __webpack_require__("../../../../../src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__books_cards_box_cards_box_component__ = __webpack_require__("../../../../../src/app/books/cards-box/cards-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_modal_modal_component__ = __webpack_require__("../../../../../src/app/shared/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/alert/alert.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_12__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__books_cards_box_cards_box_component__["a" /* CardsBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_17__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_alert_alert_component__["a" /* AlertComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__books_books_service__["a" /* BooksService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_modal_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_local_storage_service__["a" /* LocalStorageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"jumbotron\">\r\n        <h1>API Google Books</h1>\r\n        <form #f=\"ngForm\" class=\"form-inline\" (ngSubmit)=\"searchBooks(f)\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"search\">Search books</label>\r\n            <input type=\"text\" class=\"form-control input-lg\" id=\"search\" name=\"search\" placeholder=\"Search your book here...\" ngModel required>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n        </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-cards-box\r\n  *ngIf=\"resultSearch && resultSearch.items?.length > 0\"\r\n  [searchText]=\"searchText\"\r\n  [result]=\"resultSearch\"\r\n  (onChangePage)=\"getPage($event)\"\r\n  (onChooseBook)=\"getBook($event)\"\r\n></app-cards-box>\r\n\r\n<app-modal id=\"modalDetails\">\r\n    <app-details [book]=\"book\"></app-details>\r\n</app-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/books.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modal_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BooksComponent = (function () {
    function BooksComponent(activateRoute, router, modalService, booksService) {
        this.activateRoute = activateRoute;
        this.router = router;
        this.modalService = modalService;
        this.booksService = booksService;
        this.page = 0;
    }
    BooksComponent.prototype.ngOnInit = function () { };
    BooksComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    BooksComponent.prototype.getBooks = function (result) {
        this.resultSearch = result;
    };
    BooksComponent.prototype.getPage = function (page) {
        this.page = page;
        this.searchBooks(this.f);
    };
    BooksComponent.prototype.getBook = function (id) {
        var _this = this;
        this.subscription = this.booksService
            .getBook(id)
            .subscribe(function (res) {
            _this.book = res;
            _this.openModal('modalDetails');
        });
    };
    BooksComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    BooksComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    BooksComponent.prototype.searchBooks = function (f) {
        var _this = this;
        this.searchText = f.value.search;
        this.subscription = this.booksService
            .search(f.value.search, 12, this.page * 12)
            .subscribe(function (res) { return _this.resultSearch = res; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], BooksComponent.prototype, "f", void 0);
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("../../../../../src/app/books/books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/books.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_modal_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_4__books_service__["a" /* BooksService */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_book__ = __webpack_require__("../../../../../src/app/shared/model/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_volume__ = __webpack_require__("../../../../../src/app/shared/model/volume.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'https://www.googleapis.com/books/v1/volumes';
var URL_SEARCH = '?q={search}&startIndex={start}&maxResults={max}';
var URL_KEY = 'key=AIzaSyDOvQZAOGclFb3iejD1bSL_kAl-ABjZkRg';
var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.search = function (text, limit, offset) {
        if (limit === void 0) { limit = 12; }
        if (offset === void 0) { offset = 0; }
        return this.http
            .get("" + URL + this.replaceURL(text, limit, offset) + "&" + URL_KEY)
            .map(function (volume) { return new __WEBPACK_IMPORTED_MODULE_4__shared_model_volume__["a" /* Volume */](volume.json()); });
    };
    BooksService.prototype.getBook = function (id) {
        return this.http
            .get(URL + "/" + id + "?" + URL_KEY)
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__shared_model_book__["a" /* Book */](res.json()); });
    };
    BooksService.prototype.replaceURL = function (text, limit, offset) {
        return URL_SEARCH
            .replace('{search}', text)
            .replace('{start}', offset)
            .replace('{max}', limit)
            .replace(' ', '+');
    };
    BooksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "../../../../../src/app/books/cards-box/cards-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      {{result?.totalItems}} Results for <strong>\"{{searchText}}\"</strong>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <app-card\r\n      *ngFor=\"let book of books\"\r\n      [book]=\"book\"\r\n      [searchText]=\"searchText\"\r\n      [favoriteChecked]=\"book?.isFavorite\"\r\n      (onGetBookId)=\"getBook($event)\"\r\n      (onChangeFavorite)=\"changeFavorite($event)\"\r\n    ></app-card>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <app-pagination\r\n      [booksPerPage]=\"booksPerPage\"\r\n      [totalItems]=\"result?.totalItems\"\r\n      (onChangePage)=\"getPage($event)\"\r\n    ></app-pagination>\r\n  </div>\r\n</div>\r\n\r\n<app-alert></app-alert>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/cards-box/cards-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/cards-box/cards-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_book__ = __webpack_require__("../../../../../src/app/shared/model/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_volume__ = __webpack_require__("../../../../../src/app/shared/model/volume.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_messages__ = __webpack_require__("../../../../../src/app/shared/model/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardsBoxComponent = (function () {
    function CardsBoxComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.onChangePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onChooseBook = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.booksPerPage = 12;
        this.books = [];
        this.localStorage = [];
    }
    CardsBoxComponent.prototype.ngOnInit = function () {
        this.markLikeFavorite();
    };
    CardsBoxComponent.prototype.ngOnChanges = function () {
        this.markLikeFavorite();
    };
    CardsBoxComponent.prototype.createBooks = function (items) {
        return items.map(function (item) { return new __WEBPACK_IMPORTED_MODULE_1__shared_model_book__["a" /* Book */](item); });
    };
    CardsBoxComponent.prototype.getPage = function (page) {
        this.onChangePage.emit(page);
    };
    CardsBoxComponent.prototype.getBook = function (id) {
        this.onChooseBook.emit(id);
    };
    CardsBoxComponent.prototype.changeFavorite = function (obj) {
        this.alert.setSuccess(obj.title + " " + __WEBPACK_IMPORTED_MODULE_3__shared_model_messages__["a" /* Messages */][obj.type].SUCCESS);
    };
    CardsBoxComponent.prototype.markLikeFavorite = function () {
        var _this = this;
        if (this.localStorageService.hasStorage()) {
            var _that_1 = this;
            this.localStorageService
                .getAllItems()
                .subscribe(function (books) {
                _this.localStorage = books;
                _this.books = _this.result ? _this.createBooks(_this.result.items) : [];
                _this.books.forEach(function (book) {
                    _that_1.localStorage.forEach(function (storage) {
                        if (book['id'] === storage.id) {
                            book['isFavorite'] = true;
                        }
                    });
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('result'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_model_volume__["a" /* Volume */])
    ], CardsBoxComponent.prototype, "result", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('searchText'),
        __metadata("design:type", String)
    ], CardsBoxComponent.prototype, "searchText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CardsBoxComponent.prototype, "onChangePage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CardsBoxComponent.prototype, "onChooseBook", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_component__["a" /* AlertComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_component__["a" /* AlertComponent */])
    ], CardsBoxComponent.prototype, "alert", void 0);
    CardsBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cards-box',
            template: __webpack_require__("../../../../../src/app/books/cards-box/cards-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/cards-box/cards-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__["a" /* LocalStorageService */]])
    ], CardsBoxComponent);
    return CardsBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <img class=\"img-responsive\" [src]=\"book?.volumeInfo?.imageLinks?.large\" alt=\"{{book?.volumeInfo?.title}}\">\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <h1>{{book?.volumeInfo?.title}}</h1>\r\n    <h3>{{book?.volumeInfo?.subtitle}}</h3>\r\n\r\n    <p [innerHTML]=\"book?.volumeInfo?.description\"></p>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Book Description</h3>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        Authors: <ng-container *ngFor=\"let author of book?.volumeInfo?.authors\">{{author}} </ng-container>\r\n        <br>\r\n        Publisher: {{book?.volumeInfo?.publisher}}\r\n        <br>\r\n        Published Date: {{book?.volumeInfo?.publishedDate}}\r\n        <br>\r\n        Page Count: {{book?.volumeInfo?.pageCount}}\r\n        <br>\r\n        ISBN10: {{book?.volumeInfo?.industryIdentifiers[1].identifier}}\r\n        <br>\r\n        Categories:\r\n        <ng-container *ngFor=\"let categorie of book?.volumeInfo?.categories\">\r\n          <span class=\"label label-default\">{{categorie}}</span>\r\n          <br>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label:not(:last-of-type) {\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_book__ = __webpack_require__("../../../../../src/app/shared/model/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('book'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_book__["a" /* Book */])
    ], DetailsComponent.prototype, "book", void 0);
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("../../../../../src/app/details/details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  error works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/error/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"jumbotron\">\r\n      <h1>Favorite Books</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <ng-container *ngIf=\"books && books.length > 0; else elseTemplate\">\r\n      <app-card\r\n        *ngFor=\"let book of books\"\r\n        [book]=\"book\"\r\n        [favoriteChecked]=\"true\"\r\n        (onGetBookId)=\"getBook($event)\"\r\n        (onChangeFavorite)=\"changeFavorite($event)\"\r\n      ></app-card>\r\n    </ng-container>\r\n    <ng-template #elseTemplate>\r\n      <div class=\"alert alert-warning\" role=\"alert\">\r\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Warning:</span>\r\n         Your favorites list is empty.\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<app-modal id=\"modalDetails\">\r\n    <app-details [book]=\"book\"></app-details>\r\n</app-modal>\r\n\r\n<app-alert></app-alert>\r\n"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_books_service__ = __webpack_require__("../../../../../src/app/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_book__ = __webpack_require__("../../../../../src/app/shared/model/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_messages__ = __webpack_require__("../../../../../src/app/shared/model/messages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FavoritesComponent = (function () {
    function FavoritesComponent(booksService, modalService, localStorageServices) {
        this.booksService = booksService;
        this.modalService = modalService;
        this.localStorageServices = localStorageServices;
        this.books = [];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.localStorageServices.hasStorage()) {
            this.subscription = this.localStorageServices
                .getAllItems()
                .subscribe(function (books) { return _this.books = books; });
        }
    };
    FavoritesComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    FavoritesComponent.prototype.getBook = function (id) {
        var _this = this;
        this.subscription = this.booksService
            .getBook(id)
            .subscribe(function (res) {
            _this.book = new __WEBPACK_IMPORTED_MODULE_4__shared_model_book__["a" /* Book */](res);
            _this.openModal('modalDetails');
        });
    };
    FavoritesComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    FavoritesComponent.prototype.changeFavorite = function (obj) {
        this.alert.setSuccess(obj.title + " " + __WEBPACK_IMPORTED_MODULE_6__shared_model_messages__["a" /* Messages */][obj.type].SUCCESS);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_component__["a" /* AlertComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_component__["a" /* AlertComponent */])
    ], FavoritesComponent.prototype, "alert", void 0);
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__books_books_service__["a" /* BooksService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_modal_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_local_storage_service__["a" /* LocalStorageService */]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"alert\"\r\n  role=\"alert\"\r\n  [@visibilityChanged]=\"visiblityState\"\r\n  [ngClass]=\"{'alert-danger': classError, 'alert-success': classSuccess, 'alert-warning': classWarning}\"\r\n  (mouseover)=\"cancelTimeoutClean()\"\r\n  (mouseout)=\"setTimeoutClean()\">\r\n  <span [ngClass]=\"{'glyphicon-remove-circle' : classError, 'glyphicon-ok-circle': classSuccess, 'glyphicon-exclamation-sign': classWarning}\" class=\"glyphicon\" aria-hidden=\"true\"></span><p [innerHTML]='message'></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  position: fixed;\n  top: 15px;\n  right: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent() {
        this.visiblityState = 'hidden';
        this.classError = false;
        this.classSuccess = false;
        this.classWarning = false;
    }
    AlertComponent.prototype.setSuccess = function (message) {
        this.classSuccess = true;
        this.classError = false;
        this.classWarning = false;
        this.create(message);
    };
    AlertComponent.prototype.setWarning = function (message) {
        this.classWarning = true;
        this.classError = false;
        this.classSuccess = false;
        this.create(message);
    };
    AlertComponent.prototype.setError = function (error) {
        this.classError = true;
        this.classWarning = false;
        this.classSuccess = false;
        this.create(error);
    };
    AlertComponent.prototype.clean = function () {
        this.visiblityState = 'hidden';
        this.classWarning = false;
        this.classError = false;
        this.classSuccess = false;
        this.message = '';
    };
    AlertComponent.prototype.create = function (message) {
        this.visiblityState = 'shown';
        this.setMessage(message);
        this.rebuildTimeoutClean();
    };
    AlertComponent.prototype.setMessage = function (message) {
        this.message = message;
    };
    AlertComponent.prototype.setTimeoutClean = function () {
        var _this = this;
        this.timeout = setTimeout(function () { return _this.clean(); }, 3000);
    };
    AlertComponent.prototype.cancelTimeoutClean = function () {
        clearTimeout(this.timeout);
    };
    AlertComponent.prototype.rebuildTimeoutClean = function () {
        this.cancelTimeoutClean();
        this.setTimeoutClean();
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/shared/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/alert/alert.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('visibilityChanged', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.5s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-6 col-md-3\">\r\n  <div class=\"thumbnail\">\r\n    <label class=\"favorite\" for=\"favorite_{{book?.id}}\" [title]=\"favoriteChecked ? 'Remova dos favoritos' : 'Adicione aos favoritos'\">\r\n      <span [ngClass]=\"{'glyphicon-star': favoriteChecked, 'glyphicon-star-empty': !favoriteChecked}\" class=\"glyphicon\"></span>\r\n      <input\r\n        id=\"favorite_{{book?.id}}\"\r\n        name=\"favorite\"\r\n        type=\"checkbox\"\r\n        [checked]=\"favoriteChecked\"\r\n        (change)=\"changeFavorite(book)\"\r\n        [hidden] />\r\n    </label>\r\n    <a class=\"linkImage\" (click)=\"getBook(book?.id)\">\r\n      <img [src]=\"book.volumeInfo.imageLinks?.thumbnail\" alt=\"{{book?.volumeInfo.title}}\">\r\n    </a>\r\n    <div class=\"caption\">\r\n      <h3>\r\n        <a [innerHTML]=\"createMarkHighlight(book?.volumeInfo.title)\" (click)=\"getBook(book?.id)\"></a>\r\n      </h3>\r\n      <p [innerHTML]=\"createMarkHighlight(book?.volumeInfo.description)\"></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail {\n  height: 430px;\n  overflow: hidden; }\n  .thumbnail .glyphicon-star {\n    color: #f0ad4e; }\n  .thumbnail .glyphicon-star-empty {\n    color: grey; }\n  .thumbnail .linkImage {\n    display: block;\n    height: 196px;\n    overflow: hidden; }\n    .thumbnail .linkImage img {\n      height: 100%;\n      width: auto; }\n  .thumbnail h3 {\n    display: block;\n    display: -webkit-box;\n    height: 52.8px;\n    font-size: 24px;\n    line-height: 1.1;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .thumbnail p {\n    display: block;\n    display: -webkit-box;\n    height: 120.00000012px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .thumbnail .favorite {\n    float: right;\n    font-size: 24px; }\n    .thumbnail .favorite input {\n      display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_book__ = __webpack_require__("../../../../../src/app/shared/model/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = (function () {
    function CardComponent(localStorageService, el) {
        this.localStorageService = localStorageService;
        this.el = el;
        this.onGetBookId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onChangeFavorite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CardComponent.prototype.getBook = function (id) {
        this.onGetBookId.emit(id);
    };
    CardComponent.prototype.changeFavorite = function (book) {
        var _this = this;
        this.favoriteChecked = !this.favoriteChecked;
        this.subscription = this.favoriteChecked
            ? this.localStorageService
                .setItem(book)
                .subscribe(function () { return _this.onChangeFavorite.emit({ title: book.volumeInfo['title'], type: 'ADDED' }); })
            : this.localStorageService
                .removeItem(book)
                .subscribe(function () { return _this.onChangeFavorite.emit({ title: book.volumeInfo['title'], type: 'DELETED' }); });
    };
    CardComponent.prototype.createMarkHighlight = function (text) {
        var src_str = text;
        var term = this.searchText;
        term = term ? term.replace(/(\s+)/, '(<[^>]+>)*$1(<[^>]+>)*') : '';
        var pattern = new RegExp('(' + term + ')', 'gi');
        src_str = src_str ? src_str.replace(pattern, '<mark>$1</mark>') : '';
        src_str = src_str ? src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, '$1</mark>$2<mark>$4') : '';
        return src_str;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_book__["a" /* Book */])
    ], CardComponent.prototype, "book", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "favoriteChecked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "searchText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CardComponent.prototype, "onGetBookId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CardComponent.prototype, "onChangeFavorite", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/shared/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"modalApp\">\r\n    <div class=\"modal-body\">\r\n        <header class=\"col-md-12\"><button class=\"pull-right\" (click)=\"close()\">&times;</button></header>\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-background\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalApp {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  overflow: auto; }\n  .modalApp .modal-body {\n    padding: 20px;\n    background: #fff;\n    margin: 40px; }\n\n.modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: 900; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("../../../../../src/app/shared/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.nativeElement.remove();
    };
    ModalComponent.prototype.open = function () {
        this.element.nativeElement.style.display = 'block';
        this.element.nativeElement.style.opacity = '1';
        this.el.nativeElement.closest('body').classList.add('modal-open');
    };
    ModalComponent.prototype.close = function () {
        this.element.nativeElement.style.display = 'none';
        this.element.nativeElement.style.opacity = '0';
        this.el.nativeElement.closest('body').classList.remove('modal-open');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal',
            template: __webpack_require__("../../../../../src/app/shared/modal/modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_lodash__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        var modal = __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        var modal = __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__("../../../../../src/app/shared/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__volumeInfo__ = __webpack_require__("../../../../../src/app/shared/model/volumeInfo.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Book = (function (_super) {
    __extends(Book, _super);
    function Book(obj) {
        var _this = _super.call(this, obj) || this;
        if (obj && obj.volumeInfo && obj.volumeInfo.length > 0) {
            obj.volumeInfo.forEach(function (element, index) {
                obj.volumeInfo[index] = new __WEBPACK_IMPORTED_MODULE_1__volumeInfo__["a" /* VolumeInfo */](element);
            });
        }
        return _this;
    }
    return Book;
}(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]));



/***/ }),

/***/ "../../../../../src/app/shared/model/messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messages; });
/* unused harmony export Types */
var Messages = {
    ADDED: {
        SUCCESS: 'was successfully added',
        ERROR: 'can not be added. Try again later!'
    },
    DELETED: {
        SUCCESS: 'was successfully deleted',
        ERROR: 'can not be deleted. Try again later!'
    },
};
var Types = {
    SUCCESS: 'success',
    DELETE: 'danger',
    ERROR: 'danger'
};


/***/ }),

/***/ "../../../../../src/app/shared/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var Model = (function () {
    function Model(obj) {
        Object.assign(this, obj);
    }
    return Model;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/volume.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Volume; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__("../../../../../src/app/shared/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__("../../../../../src/app/shared/model/book.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Volume = (function (_super) {
    __extends(Volume, _super);
    function Volume(obj) {
        var _this = _super.call(this, obj) || this;
        if (obj && obj.items.length > 0) {
            obj.items.forEach(function (element, index) {
                obj.items[index] = new __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */](element);
            });
        }
        return _this;
    }
    return Volume;
}(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]));



/***/ }),

/***/ "../../../../../src/app/shared/model/volumeInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolumeInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__("../../../../../src/app/shared/model/model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var VolumeInfo = (function (_super) {
    __extends(VolumeInfo, _super);
    function VolumeInfo(obj) {
        return _super.call(this, obj) || this;
    }
    return VolumeInfo;
}(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]));



/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation\">\r\n  <ul class=\"pagination\">\r\n    <li>\r\n      <a href=\"#\" aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n      </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages; let i=index; trackBy: index\">\r\n      <a (click)=\"changePage(i)\">{{i + 1}}</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\" aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  text-align: center;\n  margin: 20px auto 40px; }\n  nav ul {\n    margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.onChangePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.pages = [];
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.pages = new Array(Math.ceil(this.totalItems / this.booksPerPage));
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.onChangePage.emit(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('booksPerPage'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "booksPerPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('totalItems'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('onChangePage'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PaginationComponent.prototype, "onChangePage", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = (function () {
    function LocalStorageService() {
        this.localStorage = [];
        this.key = 'books';
        if (!localStorage[this.key]) {
            localStorage[this.key] = JSON.stringify([]);
        }
        this.localStorage = JSON.parse(localStorage[this.key]);
    }
    LocalStorageService.prototype.getAllItems = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .create(function (observer) { return observer.next(_this.localStorage); });
    };
    LocalStorageService.prototype.getItem = function (item) {
        var selectedItem = this.localStorage.find(function (b) { return b.id === item.id; });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .create(function (observer) { return observer.next(selectedItem); });
    };
    LocalStorageService.prototype.setItem = function (item) {
        var _this = this;
        this.localStorage.push(item);
        this.updateStorage();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .create(function (observer) { return observer.next(_this.localStorage); });
    };
    LocalStorageService.prototype.removeItem = function (item) {
        var _this = this;
        var selectedItem = this.localStorage.find(function (b) { return b.id === item.id; });
        var index = this.localStorage.indexOf(selectedItem);
        this.localStorage.splice(index, 1);
        this.updateStorage();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .create(function (observer) { return observer.next(_this.localStorage); });
    };
    LocalStorageService.prototype.updateStorage = function () {
        localStorage[this.key] = JSON.stringify(this.localStorage);
    };
    LocalStorageService.prototype.hasStorage = function () {
        return !!(localStorage[this.key] && localStorage[this.key] !== null);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    key: 'AIzaSyDOvQZAOGclFb3iejD1bSL_kAl-ABjZkRg'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map