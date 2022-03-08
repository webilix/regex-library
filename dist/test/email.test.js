"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['email@domain.com', 'email@domain.co.com', 'email@www.dd.com', 'email@d.com'];
const invalid = ['email@', '@domain.com', 'email.domain.com'];
(0, _1.testVerify)('EMAIL', regex_1.rxEmail, valid, invalid);
(0, _1.testFind)('EMAIL', regex_1.rxEmail, valid, invalid);
(0, _1.testReplace)('EMAIL', regex_1.rxEmail, valid, invalid);
//# sourceMappingURL=email.test.js.map