import { find, get, replace, verify } from '../method';
import { rxNumeric } from '../regex';

export const NUMERIC = {
    get: (minLength?: number, maxLength?: number, fullLine: boolean = true, flags?: string): RegExp =>
        get(rxNumeric(minLength, maxLength), fullLine, flags),

    verify: (text: string, minLength?: number, maxLength?: number): boolean =>
        verify(rxNumeric(minLength, maxLength), text),

    find: (text: string, minLength?: number, maxLength?: number): string[] =>
        find(rxNumeric(minLength, maxLength), text),

    replace: (text: string, replaceWith: string = '', minLength?: number, maxLength?: number): string =>
        replace(rxNumeric(minLength, maxLength), text, replaceWith),
};
