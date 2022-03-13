import { find, get, replace, verify } from '../method';
import { rxIP4 } from '../regex';

export const IP4 = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxIP4, fullLine, flags),

    verify: (text: string): boolean => verify(rxIP4, text),

    find: (text: string): string[] => find(rxIP4, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxIP4, text, replaceWith),
};
