"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_1 = require("../regex");
const _1 = require("./_");
const valid = ['username', 'user1.-name'];
const invalid = ['ur', 'username1', '.username', 'username.', 'username-'];
(0, _1.testVerify)('USERNAME', (0, regex_1.rxUsername)(), valid, invalid);
(0, _1.testVerify)('USERNAME', (0, regex_1.rxUsername)(5, false, false), [], ['user', 'user.name', 'user-name']);
(0, _1.testVerify)('USERNAME', (0, regex_1.rxUsername)(3, false, false, true, false), ['abc', 'ab1'], ['123', '1ab']);
(0, _1.testVerify)('USERNAME', (0, regex_1.rxUsername)(3, false, false, false, true), ['abc', '1ab'], ['123', 'ab1']);
test('USERNAME: invalid input', () => {
    const test = () => (0, regex_1.rxUsername)(2);
    expect(test).toThrow();
});
//# sourceMappingURL=username.test.js.map