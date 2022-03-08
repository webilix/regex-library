import { rxPassword } from '../regex';
import { testVerify } from './_';

const valid: string[] = ['AAAaaa111'];
const invalid: string[] = ['Aa1', 'AAAAAAAA', 'aaaaaaaa', '11111111'];

testVerify('PASSWORD', rxPassword(), valid, invalid);
testVerify('PASSWORD', rxPassword(4), ['Aa1.'], invalid);
