"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = exports.find = exports.verify = exports.get = void 0;
const get = (pattern, fullLine = true, flags) => fullLine ? new RegExp(`^${pattern}$`, flags) : new RegExp(pattern, flags);
exports.get = get;
const verify = (pattern, text, flags) => (0, exports.get)(pattern, true, flags).test(text);
exports.verify = verify;
const find = (pattern, text, flags) => text.match((0, exports.get)(pattern, false, flags || 'g')) || [];
exports.find = find;
const replace = (pattern, text, replaceWith = '', flags) => text.replace((0, exports.get)(pattern, false, flags || 'g'), replaceWith);
exports.replace = replace;
//# sourceMappingURL=method.js.map