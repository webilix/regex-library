import { rxUsername } from '../regex';
import { testVerify } from './_';

const valid: string[] = ['username', 'user1.-name'];
const invalid: string[] = ['ur', 'username1', '.username', 'username.', 'username-'];

testVerify('USERNAME', rxUsername(), valid, invalid);
testVerify('USERNAME', rxUsername(5, false, false), [], ['user', 'user.name', 'user-name']);
testVerify('USERNAME', rxUsername(3, false, false, true, false), ['abc', 'ab1'], ['123', '1ab']);
testVerify('USERNAME', rxUsername(3, false, false, false, true), ['abc', '1ab'], ['123', 'ab1']);

test('USERNAME: invalid input', () => {
    const test = () => rxUsername(2);
    expect(test).toThrow();
});
