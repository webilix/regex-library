import { find, get, replace, verify } from '../method';
import { rxMobile } from '../regex';

export const MOBILE = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxMobile, fullLine, flags),

    verify: (text: string): boolean => verify(rxMobile, text),

    find: (text: string): string[] => find(rxMobile, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxMobile, text, replaceWith),
};
