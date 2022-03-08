"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD = void 0;
const method_1 = require("../method");
const regex_1 = require("../regex");
exports.PASSWORD = {
    get: (length = 8, forceLowerCase = true, forceUpperCase = true, forceNumber = true, fullLine = true, flags) => (0, method_1.get)((0, regex_1.rxPassword)(length, forceLowerCase, forceUpperCase, forceNumber), fullLine, flags),
    verify: (text, length = 8, forceLowerCase = true, forceUpperCase = true, forceNumber = true) => (0, method_1.verify)((0, regex_1.rxPassword)(length, forceLowerCase, forceUpperCase, forceNumber), text),
};
//# sourceMappingURL=password.js.map