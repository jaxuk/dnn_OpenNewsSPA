"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormTextareaComponent = /** @class */ (function () {
    function FormTextareaComponent() {
    }
    FormTextareaComponent = __decorate([
        core_1.Component({
            selector: 'form-textarea',
            styleUrls: ['form-textarea.component.scss'],
            template: "\n    <div class=\"dynamic-field form-group\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <textarea\n        class=\"form-control\"\n        [attr.rows]=\"config.rows\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n      </textarea>\n    </div>\n  "
        })
    ], FormTextareaComponent);
    return FormTextareaComponent;
}());
exports.FormTextareaComponent = FormTextareaComponent;
//# sourceMappingURL=form-textarea.component.js.map