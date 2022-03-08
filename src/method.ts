export const get = (pattern: string, fullLine: boolean = true, flags?: string): RegExp =>
    fullLine ? new RegExp(`^${pattern}$`, flags) : new RegExp(pattern, flags);

export const verify = (pattern: string, text: string, flags?: string): boolean => get(pattern, true, flags).test(text);

export const find = (pattern: string, text: string, flags?: string): string[] =>
    text.match(get(pattern, false, flags || 'g')) || [];

export const replace = (pattern: string, text: string, replaceWith: string = '', flags?: string): string =>
    text.replace(get(pattern, false, flags || 'g'), replaceWith);
