"use strict";
// This lets you configure test-values during development.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DevContext = /** @class */ (function () {
    function DevContext() {
        this.ignoreMissingServicesFramework = false;
        this.forceUse = true;
        this.moduleId = 542;
        this.tabId = 137;
        this.antiForgeryToken = 'ThisIsaTestAntiForgeryToken';
        this.path = '';
    }
    DevContext = __decorate([
        core_1.Injectable()
    ], DevContext);
    return DevContext;
}());
exports.DevContext = DevContext;
//# sourceMappingURL=dev-context.js.map