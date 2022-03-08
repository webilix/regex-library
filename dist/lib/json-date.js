"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_DATE = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.JSON_DATE = {
    get: (fullLine = false, flags) => (0, method_1.get)(regex_1.rxJsonDate, fullLine, flags),
    verify: (text) => (0, method_1.verify)(regex_1.rxJsonDate, text),
    find: (text) => (0, method_1.find)(regex_1.rxJsonDate, text),
    replace: (text, replaceWith = '') => (0, method_1.replace)(regex_1.rxJsonDate, text, replaceWith),
};
//# sourceMappingURL=json-date.js.map