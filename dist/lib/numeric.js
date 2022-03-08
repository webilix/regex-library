"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMERIC = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.NUMERIC = {
    get: (minLength, maxLength, fullLine = true, flags) => (0, method_1.get)((0, regex_1.rxNumeric)(minLength, maxLength), fullLine, flags),
    verify: (text, minLength, maxLength) => (0, method_1.verify)((0, regex_1.rxNumeric)(minLength, maxLength), text),
    find: (text, minLength, maxLength) => (0, method_1.find)((0, regex_1.rxNumeric)(minLength, maxLength), text),
    replace: (text, replaceWith = '', minLength, maxLength) => (0, method_1.replace)((0, regex_1.rxNumeric)(minLength, maxLength), text, replaceWith),
};
//# sourceMappingURL=numeric.js.map