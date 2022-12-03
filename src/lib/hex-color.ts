import { find, get, replace, verify } from '../method';
import { rxHexColor } from '../regex';

export const HEX_COLOR = {
    get: (fullLine: boolean = true, flags?: string): RegExp => get(rxHexColor, fullLine, flags),

    verify: (text: string): boolean => verify(rxHexColor, text),

    find: (text: string): string[] => find(rxHexColor, text),

    replace: (text: string, replaceWith: string = ''): string => replace(rxHexColor, text, replaceWith),
};
