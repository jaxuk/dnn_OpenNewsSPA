"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormCheckListComponent = /** @class */ (function () {
    function FormCheckListComponent() {
    }
    FormCheckListComponent = __decorate([
        core_1.Component({
            selector: 'form-checklist',
            styleUrls: ['form-checklist.component.scss'],
            template: "\n    <div \n      class=\"dynamic-field form-group\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <div class=\"form-check\" *ngFor=\"let opt of config.options; let i = index\">\n        <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"config.name\"\n          id=\"dynfld{{config.name}}{{i}}\" value=\"{{ opt }}\">\n        <label class=\"form-check-label\" for=\"dynfld{{config.name}}{{i}}\">\n          {{ opt }}\n        </label>\n      </div>\n    </div>\n  "
        })
    ], FormCheckListComponent);
    return FormCheckListComponent;
}());
exports.FormCheckListComponent = FormCheckListComponent;
//# sourceMappingURL=form-checklist.component.js.map