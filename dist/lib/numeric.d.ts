export declare const NUMERIC: {
    get: (minLength?: number | undefined, maxLength?: number | undefined, fullLine?: boolean, flags?: string | undefined) => RegExp;
    verify: (text: string, minLength?: number | undefined, maxLength?: number | undefined) => boolean;
    find: (text: string, minLength?: number | undefined, maxLength?: number | undefined) => string[];
    replace: (text: string, replaceWith?: string, minLength?: number | undefined, maxLength?: number | undefined) => string;
};
//# sourceMappingURL=numeric.d.ts.map