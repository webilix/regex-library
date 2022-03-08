import { rxNumeric } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['100', '010', '20000000'];
const invalid: string[] = ['S', 'S100', '100S', '+100', '-100', '100.00'];

testVerify('NUMERIC', rxNumeric(), valid, invalid);
testVerify('NUMERIC', rxNumeric(4), ['4444', '55555'], ['1', '22', '33']);
testVerify('NUMERIC', rxNumeric(4, 4), ['4444'], ['1', '22', '33', '55555']);
testFind('NUMERIC', rxNumeric(), valid, ['STRING']);
testReplace('NUMERIC', rxNumeric(), valid, ['STRING']);

test('NUMERIC: invalid input', () => {
    const test1 = () => rxNumeric(0, 1);
    expect(test1).toThrow();

    const test2 = () => rxNumeric(1, 0);
    expect(test2).toThrow();

    const test3 = () => rxNumeric(2, 1);
    expect(test3).toThrow();
});
