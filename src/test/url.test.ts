import { rxUrl } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = [
    'http://domain.com',
    'https://domain.co.com',
    'http://www.dd.com/',
    'https://d.co/',
    'https://d.c.co/',
];
const invalid: string[] = ['http//domain.com', 'http:domain.com', 'domain.com', 'https://d.c/'];

testVerify('URL', rxUrl(), valid, invalid);
testVerify('URL', rxUrl(true), ['https://google.com/page,1'], []);
testVerify('URL', rxUrl(false), [], ['https://google.com/page,1']);
testFind('URL', rxUrl(), valid, invalid);
testReplace('URL', rxUrl(), valid, invalid);
