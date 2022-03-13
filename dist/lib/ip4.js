"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IP4 = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.IP4 = {
    get: (fullLine = true, flags) => (0, method_1.get)(regex_1.rxIP4, fullLine, flags),
    verify: (text) => (0, method_1.verify)(regex_1.rxIP4, text),
    find: (text) => (0, method_1.find)(regex_1.rxIP4, text),
    replace: (text, replaceWith = '') => (0, method_1.replace)(regex_1.rxIP4, text, replaceWith),
};
//# sourceMappingURL=ip4.js.map