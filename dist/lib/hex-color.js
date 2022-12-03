"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEX_COLOR = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.HEX_COLOR = {
    get: (fullLine = true, flags) => (0, method_1.get)(regex_1.rxHexColor, fullLine, flags),
    verify: (text) => (0, method_1.verify)(regex_1.rxHexColor, text),
    find: (text) => (0, method_1.find)(regex_1.rxHexColor, text),
    replace: (text, replaceWith = '') => (0, method_1.replace)(regex_1.rxHexColor, text, replaceWith),
};
//# sourceMappingURL=hex-color.js.map