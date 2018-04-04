"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent = __decorate([
        core_1.Component({
            selector: 'form-select',
            styleUrls: ['form-select.component.scss'],
            template: "\n    <div \n      class=\"dynamic-field form-group\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <select class=\"form-control\" [formControlName]=\"config.name\">\n        <option value=\"\">{{ config.placeholder }}</option>\n        <option *ngFor=\"let opt of config.options\">\n          {{ opt }}\n        </option>\n      </select>\n    </div>\n  "
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}());
exports.FormSelectComponent = FormSelectComponent;
//# sourceMappingURL=form-select.component.js.map