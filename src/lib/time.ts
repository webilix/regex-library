import { find, get, replace, verify } from '../method';
import { rxTime } from '../regex';

export const TIME = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxTime, fullLine, flags),

    verify: (text: string): boolean => verify(rxTime, text),

    find: (text: string): string[] => find(rxTime, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxTime, text, replaceWith),
};
