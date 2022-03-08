import { find, get, replace, verify } from '../method';
import { rxEmail } from '../regex';

export const EMAIL = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxEmail, fullLine, flags),

    verify: (text: string): boolean => verify(rxEmail, text),

    find: (text: string): string[] => find(rxEmail, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxEmail, text, replaceWith),
};
