"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['00:00:00', '23:59:59'];
const invalid = ['24:00:00', '00:60:60', '00:00:60', '00:0:00', '00:00:0'];
(0, _1.testVerify)('TIME', regex_1.rxTime, valid, invalid);
(0, _1.testFind)('TIME', regex_1.rxTime, valid, invalid);
(0, _1.testReplace)('TIME', regex_1.rxTime, valid, invalid);
//# sourceMappingURL=time.test.js.map