import { rxEmail } from '../regex';
import { testFind, testReplace, testVerify } from './_';

const valid: string[] = ['email@domain.com', 'email@domain.co.com', 'email@www.dd.com', 'email@d.com'];
const invalid: string[] = ['email@', '@domain.com', 'email.domain.com'];

testVerify('EMAIL', rxEmail, valid, invalid);
testFind('EMAIL', rxEmail, valid, invalid);
testReplace('EMAIL', rxEmail, valid, invalid);
