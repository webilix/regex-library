"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['#012', '#345678', '#9ABCDE', '#F60', '#FF6600', '#abcdef'];
const invalid = ['123', '123456', '#1', '#12', '#1234', '#12345', '#1234567', '#GHIJKL'];
(0, _1.testVerify)('HEX_COLOR', regex_1.rxHexColor, valid, invalid);
(0, _1.testFind)('HEX_COLOR', regex_1.rxHexColor, valid, ['123', '123456', '#1', '#12', '#GHIJKL']);
(0, _1.testReplace)('HEX_COLOR', regex_1.rxHexColor, valid, ['123', '123456', '#1', '#12', '#GHIJKL']);
//# sourceMappingURL=hex-color.test.js.map