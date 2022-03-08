import { get, verify } from '../method';
import { rxUsername } from '../regex';

export const USERNAME = {
    get: (
        length: number = 3,
        useDash: boolean = true,
        useDot: boolean = true,
        fullLine: boolean = false,
        flags?: string,
    ): RegExp => get(rxUsername(length, useDash, useDot), fullLine, flags),

    verify: (text: string, length: number = 3, useDash: boolean = true, useDot: boolean = true): boolean =>
        verify(rxUsername(length, useDash, useDot), text),
};
