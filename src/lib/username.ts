import { get, verify } from '../method';
import { rxUsername } from '../regex';

export const USERNAME = {
    get: (
        length: number = 3,
        useDash: boolean = true,
        useDot: boolean = true,
        startWithChar: boolean = true,
        endWithChar: boolean = true,
        fullLine: boolean = true,
        flags?: string,
    ): RegExp => get(rxUsername(length, useDash, useDot, startWithChar, endWithChar), fullLine, flags),

    verify: (
        text: string,
        length: number = 3,
        useDash: boolean = true,
        useDot: boolean = true,
        startWithChar: boolean = true,
        endWithChar: boolean = true,
    ): boolean => verify(rxUsername(length, useDash, useDot, startWithChar, endWithChar), text),
};
