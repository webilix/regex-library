"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['09123456789', '0912 345 6789', '0912-345-6789'];
const invalid = ['0912345678', '9123456789', '+989123456789'];
(0, _1.testVerify)('MOBILE', regex_1.rxMobile, valid, invalid);
(0, _1.testFind)('MOBILE', regex_1.rxMobile, valid, invalid);
(0, _1.testReplace)('MOBILE', regex_1.rxMobile, valid, invalid);
//# sourceMappingURL=mobile.test.js.map