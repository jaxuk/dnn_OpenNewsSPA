"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent = __decorate([
        core_1.Component({
            selector: 'form-button',
            styleUrls: ['form-button.component.scss'],
            template: "\n    <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\">\n      <button\n        [disabled]=\"config.disabled\"\n        type=\"submit\">\n        {{ config.label }}\n      </button>\n    </div>\n  "
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());
exports.FormButtonComponent = FormButtonComponent;
//# sourceMappingURL=form-button.component.js.map