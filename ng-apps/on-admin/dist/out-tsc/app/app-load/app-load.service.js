"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/toPromise");
//import { ApiService } from '../shared';
//import { Globals } from '../globals';
//import {
//  SettingsViewModel,
//  SettingsService
//} from '../shared';
var AppLoadService = /** @class */ (function () {
    function AppLoadService(httpClient
        //context: Context,
        //element: ElementRef
        //private apiService: ApiService,
        //private globals: Globals
    ) {
        this.httpClient = httpClient;
        //super(element, context);
    }
    AppLoadService.prototype.initializeApp = function () {
        return new Promise(function (resolve, reject) {
            console.log("initializeApp:: inside promise");
            setTimeout(function () {
                console.log("initializeApp:: inside setTimeout");
                // doing something
                resolve();
            }, 3000);
        });
    };
    AppLoadService.prototype.getSettings = function () {
        console.log("getSettings:: before http.get call");
        //const promise = this.httpClient.get('http://localhost/API/dnn_OpenNewsSPA/Settings/GetSettings')
        //  .toPromise()
        //  .then(data => {
        //    console.log(`Settings from API: `, data);
        //    //this.globals.settings = settings;
        //    return data;
        //  });
        var promise = this.httpClient.get('http://private-1ad25-initializeng.apiary-mock.com/settings')
            .toPromise()
            .then(function (settings) {
            console.log("Settings from API: ", settings);
            //APP_SETTINGS.connectionString = settings[0].value;
            //APP_SETTINGS.defaultImageUrl = settings[1].value;
            return settings;
        });
        return promise;
    };
    AppLoadService = __decorate([
        core_2.Component({
            selector: 'app-root'
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient
            //context: Context,
            //element: ElementRef
            //private apiService: ApiService,
            //private globals: Globals
        ])
    ], AppLoadService);
    return AppLoadService;
}());
exports.AppLoadService = AppLoadService;
//# sourceMappingURL=app-load.service.js.map