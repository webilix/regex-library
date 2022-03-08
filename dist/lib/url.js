"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.URL = {
    get: (full = false, fullLine = false, flags) => (0, method_1.get)((0, regex_1.rxUrl)(full), fullLine, flags),
    verify: (text, full = false) => (0, method_1.verify)((0, regex_1.rxUrl)(full), text),
    find: (text, full = false) => (0, method_1.find)((0, regex_1.rxUrl)(full), text),
    replace: (text, replaceWith = '', full = false) => (0, method_1.replace)((0, regex_1.rxUrl)(full), text, replaceWith),
};
//# sourceMappingURL=url.js.map