"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['domain.com', 'domain.co.com', 'www.dd.com', 'd.com', 'd.co'];
const invalid = ['d.c', 'www.'];
(0, _1.testVerify)('DOMAIN', regex_1.rxDomain, valid, invalid);
(0, _1.testFind)('DOMAIN', regex_1.rxDomain, valid, invalid);
(0, _1.testReplace)('DOMAIN', regex_1.rxDomain, valid, invalid);
//# sourceMappingURL=domain.test.js.map