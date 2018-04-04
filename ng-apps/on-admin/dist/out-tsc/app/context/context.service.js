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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dev_context_1 = require("./dev-context");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
require("rxjs/add/observable/combineLatest");
require("rxjs/add/observable/timer");
require("rxjs/Rx");
var Context = /** @class */ (function () {
    function Context(devSettings) {
        this.devSettings = devSettings;
        // todo: probably should set the replay-buffer to 1 for all the following, but must test!
        this.midSubject = new ReplaySubject_1.ReplaySubject(1);
        this.tidSubject = new ReplaySubject_1.ReplaySubject(1);
        this.afTokenSubject = new ReplaySubject_1.ReplaySubject(1);
        this.moduleId$ = this.midSubject.asObservable();
        this.tabId$ = this.tidSubject.asObservable();
        this.antiForgeryToken$ = this.afTokenSubject.asObservable();
        this.all$ = Observable_1.Observable.combineLatest(this.moduleId$, // wait for module id
        this.tabId$, // wait for tabId
        this.antiForgeryToken$) // wait for security token
            .map(function (res) { return ({
            moduleId: res[0],
            tabId: res[1],
            antiForgeryToken: res[2]
        }); });
        // Dev settings with minimal ignore settings.
        this.devSettings = Object.assign({}, {
            ignoreMissingServicesFramework: false
        }, devSettings);
    }
    /**
     * Configure 2sxc in the context of a HTMLNode.
     * @param htmlNode the HTMLNode
     */
    Context.prototype.autoConfigure = function (htmlNode) {
        var _this = this;
        console.log('running context.service autoConfigure()');
        if (this.devSettings.forceUse) {
            this.midSubject.next(this.devSettings.moduleId);
            this.tidSubject.next(this.devSettings.tabId);
            this.afTokenSubject.next(this.devSettings.antiForgeryToken);
            return;
        }
        // Update / publish moduleId.
        var appCont = htmlNode.nativeElement;
        console.log(appCont);
        this.midSubject.next(appCont.dataset.mid);
        this.tidSubject.next(appCont.dataset.tid);
        // Check if DNN Services framework exists.
        console.log('Checking if DNN Services framework exists');
        if (window.$ && window.$.ServicesFramework) {
            // Run timer till sf is ready, but max for a second.
            var timer_1 = Observable_1.Observable.timer(0, 100)
                .take(10)
                .subscribe(function (x) {
                // This must be accessed after a delay, as the SF is not ready yet.
                var sf = window.$.ServicesFramework(_this.midSubject);
                // Check if sf is initialized.
                if (sf.getAntiForgeryValue() && sf.getTabId() !== -1) {
                    timer_1.unsubscribe();
                    console.log('sf is initialized.');
                    _this.tidSubject.next(sf.getTabId());
                    _this.afTokenSubject.next(sf.getAntiForgeryValue());
                }
                else {
                    // Must reset, as they are incorrectly initialized when accessed early.
                    if (window.dnn && window.dnn.vars && window.dnn.vars.length === 0) {
                        window.dnn.vars = null;
                    }
                }
            });
            return;
        }
        if (!this.devSettings.ignoreMissingServicesFramework) {
            throw new Error("\n        DNN Services Framework is missing, and it's not allowed according to devSettings.\n        Either set devSettings to ignore this, or ensure it's there");
        }
        this.tidSubject.next(this.devSettings.tabId);
        this.afTokenSubject.next(this.devSettings.antiForgeryToken);
    };
    Context = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [dev_context_1.DevContext])
    ], Context);
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.service.js.map