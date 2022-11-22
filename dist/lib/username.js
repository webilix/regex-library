"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERNAME = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.USERNAME = {
    get: (length = 3, useDash = true, useDot = true, startWithChar = true, endWithChar = true, fullLine = true, flags) => (0, method_1.get)((0, regex_1.rxUsername)(length, useDash, useDot, startWithChar, endWithChar), fullLine, flags),
    verify: (text, length = 3, useDash = true, useDot = true, startWithChar = true, endWithChar = true) => (0, method_1.verify)((0, regex_1.rxUsername)(length, useDash, useDot, startWithChar, endWithChar), text),
};
//# sourceMappingURL=username.js.map