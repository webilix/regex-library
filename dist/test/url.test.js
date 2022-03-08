"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = [
    'http://domain.com',
    'https://domain.co.com',
    'http://www.dd.com/',
    'https://d.co/',
    'https://d.c.co/',
];
const invalid = ['http//domain.com', 'http:domain.com', 'domain.com', 'https://d.c/'];
(0, _1.testVerify)('URL', (0, regex_1.rxUrl)(), valid, invalid);
(0, _1.testVerify)('URL', (0, regex_1.rxUrl)(true), ['https://google.com/page,1'], []);
(0, _1.testVerify)('URL', (0, regex_1.rxUrl)(false), [], ['https://google.com/page,1']);
(0, _1.testFind)('URL', (0, regex_1.rxUrl)(), valid, invalid);
(0, _1.testReplace)('URL', (0, regex_1.rxUrl)(), valid, invalid);
//# sourceMappingURL=url.test.js.map