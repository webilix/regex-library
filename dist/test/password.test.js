"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['AAAaaa111'];
const invalid = ['Aa1', 'AAAAAAAA', 'aaaaaaaa', '11111111'];
(0, _1.testVerify)('PASSWORD', (0, regex_1.rxPassword)(), valid, invalid);
(0, _1.testVerify)('PASSWORD', (0, regex_1.rxPassword)(4), ['Aa1.'], invalid);
//# sourceMappingURL=password.test.js.map