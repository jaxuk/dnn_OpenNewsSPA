"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var interceptor_1 = require("./interceptor");
exports.DnnInterceptor = {
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: interceptor_1.Interceptor,
    multi: true,
};
//# sourceMappingURL=dnn.interceptor.js.map