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
var context_service_1 = require("../context/context.service");
var Interceptor = /** @class */ (function () {
    function Interceptor(context) {
        this.context = context;
    }
    Interceptor.prototype.intercept = function (req, next) {
        //console.log('intercepted');
        //console.log(this.context);
        return this.context.all$.take(1)
            .flatMap(function (ctx) {
            // Clone the request and update the url with Dnn params.
            var newReq = req.clone({
                //url: ctx.path + req.url,
                //url: '/API/dnn_OpenNewsSPA' + req.url,
                setHeaders: {
                    ModuleId: ctx.moduleId.toString(),
                    TabId: ctx.tabId.toString(),
                    RequestVerificationToken: ctx.antiForgeryToken,
                    'X-Debugging-Hint': 'bootstrapped by Dnn4Angular',
                },
            });
            //console.log('returned intercept');
            return next.handle(newReq);
        });
    };
    Interceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [context_service_1.Context])
    ], Interceptor);
    return Interceptor;
}());
exports.Interceptor = Interceptor;
//# sourceMappingURL=interceptor.js.map