import { find, get, replace, verify } from '../method';
import { rxDate } from '../regex';

export const DATE = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxDate, fullLine, flags),

    verify: (text: string): boolean => verify(rxDate, text),

    find: (text: string): string[] => find(rxDate, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxDate, text, replaceWith),
};
