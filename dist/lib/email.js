"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.EMAIL = {
    get: (fullLine = false, flags) => (0, method_1.get)(regex_1.rxEmail, fullLine, flags),
    verify: (text) => (0, method_1.verify)(regex_1.rxEmail, text),
    find: (text) => (0, method_1.find)(regex_1.rxEmail, text),
    replace: (text, replaceWith = '') => (0, method_1.replace)(regex_1.rxEmail, text, replaceWith),
};
//# sourceMappingURL=email.js.map