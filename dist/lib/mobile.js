"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOBILE = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.MOBILE = {
    get: (fullLine = true, flags) => (0, method_1.get)(regex_1.rxMobile, fullLine, flags),
    verify: (text) => (0, method_1.verify)(regex_1.rxMobile, text),
    find: (text) => (0, method_1.find)(regex_1.rxMobile, text),
    replace: (text, replaceWith = '') => (0, method_1.replace)(regex_1.rxMobile, text, replaceWith),
};
//# sourceMappingURL=mobile.js.map