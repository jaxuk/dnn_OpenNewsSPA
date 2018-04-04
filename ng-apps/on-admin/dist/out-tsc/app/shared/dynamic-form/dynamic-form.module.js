"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var dynamic_field_directive_1 = require("./components/dynamic-field/dynamic-field.directive");
var dynamic_form_component_1 = require("./containers/dynamic-form/dynamic-form.component");
var form_button_component_1 = require("./components/form-button/form-button.component");
var form_input_component_1 = require("./components/form-input/form-input.component");
var form_select_component_1 = require("./components/form-select/form-select.component");
var form_date_component_1 = require("./components/form-date/form-date.component");
var form_switch_component_1 = require("./components/form-switch/form-switch.component");
var form_textarea_component_1 = require("./components/form-textarea/form-textarea.component");
var form_check_component_1 = require("./components/form-check/form-check.component");
var form_checklist_component_1 = require("./components/form-checklist/form-checklist.component");
var form_radio_component_1 = require("./components/form-radio/form-radio.component");
var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [
                dynamic_field_directive_1.DynamicFieldDirective,
                dynamic_form_component_1.DynamicFormComponent,
                form_button_component_1.FormButtonComponent,
                form_input_component_1.FormInputComponent,
                form_select_component_1.FormSelectComponent,
                form_date_component_1.FormDateComponent,
                form_switch_component_1.FormSwitchComponent,
                form_textarea_component_1.FormTextareaComponent,
                form_check_component_1.FormCheckComponent,
                form_checklist_component_1.FormCheckListComponent,
                form_radio_component_1.FormRadioComponent
            ],
            exports: [
                dynamic_form_component_1.DynamicFormComponent
            ],
            entryComponents: [
                form_button_component_1.FormButtonComponent,
                form_input_component_1.FormInputComponent,
                form_select_component_1.FormSelectComponent,
                form_date_component_1.FormDateComponent,
                form_switch_component_1.FormSwitchComponent,
                form_textarea_component_1.FormTextareaComponent,
                form_check_component_1.FormCheckComponent,
                form_radio_component_1.FormRadioComponent
            ]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
}());
exports.DynamicFormModule = DynamicFormModule;
//# sourceMappingURL=dynamic-form.module.js.map