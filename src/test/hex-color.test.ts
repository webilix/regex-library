import { rxHexColor } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['#012', '#345678', '#9ABCDE', '#F60', '#FF6600', '#abcdef'];
const invalid: string[] = ['123', '123456', '#1', '#12', '#1234', '#12345', '#1234567', '#GHIJKL'];

testVerify('HEX_COLOR', rxHexColor, valid, invalid);
testFind('HEX_COLOR', rxHexColor, valid, ['123', '123456', '#1', '#12', '#GHIJKL']);
testReplace('HEX_COLOR', rxHexColor, valid, ['123', '123456', '#1', '#12', '#GHIJKL']);
