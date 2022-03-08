import { rxJsonDate } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['2000-01-01T00:00:00.000Z'];
const invalid: string[] = ['2000-01-01 00:00:00', '2000-01-01T00:00:00.000', '2000-01-01T00:00:00Z'];

testVerify('JSON DATE', rxJsonDate, valid, invalid);
testFind('JSON DATE', rxJsonDate, valid, invalid);
testReplace('JSON DATE', rxJsonDate, valid, invalid);
