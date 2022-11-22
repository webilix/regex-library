export const rxDate: string = `[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])`;

export const rxTime: string = `([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]`;

export const rxJsonDate: string = rxDate + `T` + rxTime + `.[0-9][0-9][0-9]Z`;

export const rxEmail: string =
    `(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))` +
    `@` +
    `((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))`;

export const rxMobile: string = `09([0-9]{9}|[0-9]{2}[- ]{1}[0-9]{3}[- ]{1}[0-9]{4})`;

export const rxNumeric = (minLength?: number, maxLength?: number): string => {
    if (minLength !== undefined && minLength <= 0) throw new Error('minLength must be bigger than zero');
    if (maxLength !== undefined && maxLength <= 0) throw new Error('maxLength must be bigger than zero');

    if (minLength === undefined) return `[0-9]{1,}`;
    if (maxLength === undefined) return `[0-9]{${minLength},}`;

    if (maxLength !== undefined && minLength > maxLength)
        throw new Error('maxLength must be equal or bigger than minLength');
    return `[0-9]{${minLength}${minLength === maxLength ? '' : `,${maxLength}`}}`;
};

export const rxUsername = (
    length: number = 3,
    useDash: boolean = true,
    useDot: boolean = true,
    startWithChar: boolean = true,
    endWithChar: boolean = true,
): string => {
    if (length < 3) throw new Error('length must be equal or bigger than 3');
    const middleLength: number = length - (startWithChar ? 1 : 0) - (endWithChar ? 1 : 0);
    const middle: string = `[a-z0-9${useDash ? '-' : ''}${useDot ? '.' : ''}]{${middleLength},}`;
    return `${startWithChar ? '[a-z]{1}' : ''}${middle}${endWithChar ? '[a-z]{1}' : ''}`;
};

export const rxPassword = (
    length: number = 8,
    forceLowerCase: boolean = true,
    forceUpperCase: boolean = true,
    forceNumber: boolean = true,
): string => {
    const lCase: string = forceLowerCase ? '(?=.*[a-z])' : '';
    const uCase: string = forceUpperCase ? '(?=.*[A-Z])' : '';
    const number: string = forceNumber ? '(?=.*[0-9])' : '';
    return `${lCase}${uCase}${number}.{${length},}`;
};

export const rxDomain: string =
    `(([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9])\\.)*` +
    `([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9]){1}(\\.[a-zA-Z]{2,})+`;

export const rxUrl = (full: boolean = false): string =>
    full
        ? `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=,]*)`
        : `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b[/]{0,1}`;

export const rxIP4: string =
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`;
