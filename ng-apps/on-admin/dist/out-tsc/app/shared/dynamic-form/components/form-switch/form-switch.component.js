"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormSwitchComponent = /** @class */ (function () {
    function FormSwitchComponent() {
    }
    FormSwitchComponent = __decorate([
        core_1.Component({
            selector: 'form-swtich',
            styleUrls: ['form-swtich.component.scss'],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [formControlName]=\"config.name\">\n        <label ngbButtonLabel class=\"btn-outline-primary\">\n          <input ngbButton type=\"radio\" [value]=true> Yes\n        </label>\n        <label ngbButtonLabel class=\"btn-outline-secondary\">\n          <input ngbButton type=\"radio\" [value]=false checked> No\n        </label>\n      </div>\n    </div>\n  "
        })
    ], FormSwitchComponent);
    return FormSwitchComponent;
}());
exports.FormSwitchComponent = FormSwitchComponent;
//# sourceMappingURL=form-switch.component.js.map