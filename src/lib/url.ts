import { find, get, replace, verify } from '../method';
import { rxUrl } from '../regex';

export const URL = {
    get: (full: boolean = false, fullLine: boolean = false, flags?: string): RegExp =>
        get(rxUrl(full), fullLine, flags),

    verify: (text: string, full: boolean = false): boolean => verify(rxUrl(full), text),

    find: (text: string, full: boolean = false): string[] => find(rxUrl(full), text),

    replace: (text: string, replaceWith: string = '', full: boolean = false): string =>
        replace(rxUrl(full), text, replaceWith),
};
