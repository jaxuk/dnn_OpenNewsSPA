"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormDateComponent = /** @class */ (function () {
    function FormDateComponent() {
    }
    FormDateComponent = __decorate([
        core_1.Component({
            selector: 'form-date',
            styleUrls: ['form-date.component.scss'],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"input-group date-time\">\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n            <i class=\"far fa-calendar-alt\"></i>\n          </button>\n        </div>\n        <input class=\"form-control\" [attr.placeholder]=\"config.placeholder\" [formControlName]=\"config.name\" ngbDatepicker #d=\"ngbDatepicker\">\n      </div>\n    </div>\n  "
        })
    ], FormDateComponent);
    return FormDateComponent;
}());
exports.FormDateComponent = FormDateComponent;
//# sourceMappingURL=form-date.component.js.map