"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERNAME = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.USERNAME = {
    get: (length = 3, useDash = true, useDot = true, fullLine = false, flags) => (0, method_1.get)((0, regex_1.rxUsername)(length, useDash, useDot), fullLine, flags),
    verify: (text, length = 3, useDash = true, useDot = true) => (0, method_1.verify)((0, regex_1.rxUsername)(length, useDash, useDot), text),
};
//# sourceMappingURL=username.js.map