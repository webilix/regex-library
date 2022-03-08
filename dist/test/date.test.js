"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['1800-01-01', '1900-01-01', '2000-01-01', '2100-01-01', '0000-01-01', '9999-12-31'];
const invalid = ['2000-00-01', '2000-13-01', '2000-1-01', '2000-01-00', '2000-01-32', '2000-01-1'];
(0, _1.testVerify)('DATE', regex_1.rxDate, valid, invalid);
(0, _1.testFind)('DATE', regex_1.rxDate, valid, invalid);
(0, _1.testReplace)('DATE', regex_1.rxDate, valid, invalid);
//# sourceMappingURL=date.test.js.map