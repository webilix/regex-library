import { find, replace, verify } from '../method';

export const testVerify = (title: string, pattern: string, valid: string[], invalid: string[]) => {
    test(`${title}: verify`, () => {
        valid.forEach((value: string) => {
            const test: boolean = verify(pattern, value);
            expect(test).toBe(true);
        });

        invalid.forEach((value: string) => {
            const test: boolean = verify(pattern, value);
            expect(test).toBe(false);
        });
    });
};

export const testFind = (title: string, pattern: string, valid: string[], invalid: string[]) => {
    test(`${title}: find`, () => {
        const test1: string[] = find(pattern, valid.join(' '));
        expect(test1.length).toBe(valid.length);

        const test2: string[] = find(pattern, valid.join('\n'));
        expect(test2.length).toBe(valid.length);

        const test3: string[] = find(pattern, invalid.join(' '));
        expect(test3.length).toBe(0);

        const test4: string[] = find(pattern, invalid.join('\n'));
        expect(test4.length).toBe(0);
    });
};

export const testReplace = (title: string, pattern: string, valid: string[], invalid: string[]) => {
    test(`${title}: replace`, () => {
        const test1: string = replace(pattern, valid.join(' '));
        expect(test1.length).toBe(valid.length - 1);

        const test2: string = replace(pattern, valid.join('\n'));
        expect(test2.length).toBe(valid.length - 1);

        const test3: string = replace(pattern, invalid.join(' '));
        expect(test3).toBe(invalid.join(' '));

        const test4: string = replace(pattern, invalid.join('\n'));
        expect(test4).toBe(invalid.join('\n'));
    });
};
