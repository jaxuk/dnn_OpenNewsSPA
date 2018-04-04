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
var forms_1 = require("@angular/forms");
var form_button_component_1 = require("../form-button/form-button.component");
var form_input_component_1 = require("../form-input/form-input.component");
var form_select_component_1 = require("../form-select/form-select.component");
var form_date_component_1 = require("../form-date/form-date.component");
var form_switch_component_1 = require("../form-switch/form-switch.component");
var form_textarea_component_1 = require("../form-textarea/form-textarea.component");
var form_check_component_1 = require("../form-check/form-check.component");
var form_radio_component_1 = require("../form-radio/form-radio.component");
var components = {
    button: form_button_component_1.FormButtonComponent,
    input: form_input_component_1.FormInputComponent,
    select: form_select_component_1.FormSelectComponent,
    check: form_check_component_1.FormCheckComponent,
    radio: form_radio_component_1.FormRadioComponent,
    textarea: form_textarea_component_1.FormTextareaComponent,
    switch: form_switch_component_1.FormSwitchComponent,
    date: form_date_component_1.FormDateComponent,
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.controlType]) {
            var supportedTypes = Object.keys(components).join(', ');
            throw new Error("Trying to use an unsupported type (" + this.config.controlType + ").\n        Supported types: " + supportedTypes);
        }
        var component = this.resolver.resolveComponentFactory(components[this.config.controlType]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DynamicFieldDirective.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = __decorate([
        core_1.Directive({
            selector: '[dynamicField]'
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.ViewContainerRef])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());
exports.DynamicFieldDirective = DynamicFieldDirective;
//# sourceMappingURL=dynamic-field.directive.js.map