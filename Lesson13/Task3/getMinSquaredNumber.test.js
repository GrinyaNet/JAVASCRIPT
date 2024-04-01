import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('Checking for an empty array', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('Check per line', () => {
    const result = getMinSquaredNumber('Line ');

    expect(result).toEqual(null);
});

it('Square of the smallest number', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
});