import { rxMobile } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['09123456789', '0912 345 6789', '0912-345-6789'];
const invalid: string[] = ['0912345678', '9123456789', '+989123456789'];

testVerify('MOBILE', rxMobile, valid, invalid);
testFind('MOBILE', rxMobile, valid, invalid);
testReplace('MOBILE', rxMobile, valid, invalid);
