import { find, get, replace, verify } from '../method';
import { rxDomain } from '../regex';

export const DOMAIN = {
    get: (fullLine: boolean = false, flags?: string): RegExp => get(rxDomain, fullLine, flags),

    verify: (text: string): boolean => verify(rxDomain, text),

    find: (text: string): string[] => find(rxDomain, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxDomain, text, replaceWith),
};
