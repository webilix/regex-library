"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.DATE = {
    get: (fullLine = false, flags) => (0, method_1.get)(regex_1.rxDate, fullLine, flags),
    verify: (text) => (0, method_1.verify)(regex_1.rxDate, text),
    find: (text) => (0, method_1.find)(regex_1.rxDate, text),
    replace: (text, replaceWith = '') => (0, method_1.replace)(regex_1.rxDate, text, replaceWith),
};
//# sourceMappingURL=date.js.map