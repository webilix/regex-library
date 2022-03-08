import { find, get, replace, verify } from '../method';
import { rxJsonDate } from '../regex';

export const JSON_DATE = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxJsonDate, fullLine, flags),

    verify: (text: string): boolean => verify(rxJsonDate, text),

    find: (text: string): string[] => find(rxJsonDate, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxJsonDate, text, replaceWith),
};
