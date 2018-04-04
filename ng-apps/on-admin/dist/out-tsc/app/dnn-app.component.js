"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is a base class for all apps which run in DNN.
// It ensures that the rest of the parts depending on DNN parameters are correctly initialized.
/**
 * A root app component which initializes the context-providers once the app is loaded
 * This is the earliest moment we can access the ElementRef, because before that
 * it's not attached to the DOM, so auto-detect wouldn't work.
 */
var DnnAppComponent = /** @class */ (function () {
    /**
     *
     * @param element the angular ElementRef - required to auto-detect moduleId and more
     * @param context the context service, which handles and shares auto-detection
     * @param enableDefaultSubmit
     */
    function DnnAppComponent(element, context, enableDefaultSubmit) {
        // auto-config to pick up tab-id, module id, etc.
        context.autoConfigure(element);
        // prevent asp.net submit action caused by enter-keys inside our app
        if (!enableDefaultSubmit) {
            // console.log("dnn-sxc-angular - will prevent enter-buttons from causing submit")
            element.nativeElement.addEventListener('keydown', function (e) {
                if (e.keyCode == 13)
                    e.preventDefault();
            });
        }
    }
    return DnnAppComponent;
}());
exports.DnnAppComponent = DnnAppComponent;
//# sourceMappingURL=dnn-app.component.js.map