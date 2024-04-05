import { reversArray } from './reverseArray.js';

it('Checking for an empty array', () => {
    const result = reversArray();

    expect(result).toEqual(null);
});


it('Specularity check', () => {
    const result = reversArray([2, 5, 10]);

    expect(result).toEqual([10, 5, 2]);
});