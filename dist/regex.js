"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rxHexColor = exports.rxIP4 = exports.rxUrl = exports.rxDomain = exports.rxPassword = exports.rxUsername = exports.rxNumeric = exports.rxMobile = exports.rxEmail = exports.rxJsonDate = exports.rxTime = exports.rxDate = void 0;
exports.rxDate = `[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])`;
exports.rxTime = `([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]`;
exports.rxJsonDate = exports.rxDate + `T` + exports.rxTime + `.[0-9][0-9][0-9]Z`;
exports.rxEmail = `(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))` +
    `@` +
    `((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))`;
exports.rxMobile = `09([0-9]{9}|[0-9]{2}[- ]{1}[0-9]{3}[- ]{1}[0-9]{4})`;
const rxNumeric = (minLength, maxLength) => {
    if (minLength !== undefined && minLength <= 0)
        throw new Error('minLength must be bigger than zero');
    if (maxLength !== undefined && maxLength <= 0)
        throw new Error('maxLength must be bigger than zero');
    if (minLength === undefined)
        return `[0-9]{1,}`;
    if (maxLength === undefined)
        return `[0-9]{${minLength},}`;
    if (maxLength !== undefined && minLength > maxLength)
        throw new Error('maxLength must be equal or bigger than minLength');
    return `[0-9]{${minLength}${minLength === maxLength ? '' : `,${maxLength}`}}`;
};
exports.rxNumeric = rxNumeric;
const rxUsername = (length = 3, useDash = true, useDot = true, startWithChar = true, endWithChar = true) => {
    if (length < 3)
        throw new Error('length must be equal or bigger than 3');
    const middleLength = length - (startWithChar ? 1 : 0) - (endWithChar ? 1 : 0);
    const middle = `[a-z0-9${useDash ? '-' : ''}${useDot ? '.' : ''}]{${middleLength},}`;
    return `${startWithChar ? '[a-z]{1}' : ''}${middle}${endWithChar ? '[a-z]{1}' : ''}`;
};
exports.rxUsername = rxUsername;
const rxPassword = (length = 8, forceLowerCase = true, forceUpperCase = true, forceNumber = true) => {
    const lCase = forceLowerCase ? '(?=.*[a-z])' : '';
    const uCase = forceUpperCase ? '(?=.*[A-Z])' : '';
    const number = forceNumber ? '(?=.*[0-9])' : '';
    return `${lCase}${uCase}${number}.{${length},}`;
};
exports.rxPassword = rxPassword;
exports.rxDomain = `(([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9])\\.)*` +
    `([a-zA-Z0-9][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z0-9]){1}(\\.[a-zA-Z]{2,})+`;
const rxUrl = (full = false) => full
    ? `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=,]*)`
    : `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9]{2,}\\b[/]{0,1}`;
exports.rxUrl = rxUrl;
exports.rxIP4 = `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.` +
    `(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`;
exports.rxHexColor = `#([0-9a-fA-F]{3}){1,2}`;
//# sourceMappingURL=regex.js.map