"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['100', '010', '20000000'];
const invalid = ['S', 'S100', '100S', '+100', '-100', '100.00'];
(0, _1.testVerify)('NUMERIC', (0, regex_1.rxNumeric)(), valid, invalid);
(0, _1.testVerify)('NUMERIC', (0, regex_1.rxNumeric)(4), ['4444', '55555'], ['1', '22', '33']);
(0, _1.testVerify)('NUMERIC', (0, regex_1.rxNumeric)(4, 4), ['4444'], ['1', '22', '33', '55555']);
(0, _1.testFind)('NUMERIC', (0, regex_1.rxNumeric)(), valid, ['STRING']);
(0, _1.testReplace)('NUMERIC', (0, regex_1.rxNumeric)(), valid, ['STRING']);
test('NUMERIC: invalid input', () => {
    const test1 = () => (0, regex_1.rxNumeric)(0, 1);
    expect(test1).toThrow();
    const test2 = () => (0, regex_1.rxNumeric)(1, 0);
    expect(test2).toThrow();
    const test3 = () => (0, regex_1.rxNumeric)(2, 1);
    expect(test3).toThrow();
});
//# sourceMappingURL=numeric.test.js.map