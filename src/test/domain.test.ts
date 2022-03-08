import { rxDomain } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['domain.com', 'domain.co.com', 'www.dd.com', 'd.com', 'd.co'];
const invalid: string[] = ['d.c', 'www.'];

testVerify('DOMAIN', rxDomain, valid, invalid);
testFind('DOMAIN', rxDomain, valid, invalid);
testReplace('DOMAIN', rxDomain, valid, invalid);
