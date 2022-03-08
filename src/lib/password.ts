import { get, verify } from '../method';
import { rxPassword } from '../regex';

export const PASSWORD = {
    get: (
        length: number = 8,
        forceLowerCase: boolean = true,
        forceUpperCase: boolean = true,
        forceNumber: boolean = true,
        fullLine: boolean = false,
        flags?: string,
    ): RegExp => get(rxPassword(length, forceLowerCase, forceUpperCase, forceNumber), fullLine, flags),

    verify: (
        text: string,
        length: number = 8,
        forceLowerCase: boolean = true,
        forceUpperCase: boolean = true,
        forceNumber: boolean = true,
    ): boolean => verify(rxPassword(length, forceLowerCase, forceUpperCase, forceNumber), text),
};
