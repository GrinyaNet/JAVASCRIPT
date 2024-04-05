import { getAdults } from './getAdults.js';

it('Can be withdrawn from balance', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('Checking for an empty object', () => {
    const result = getAdults({});

    expect(result).toEqual({});
});

it('Can be withdrawn from balance', () => {
    const result = getAdults({ Ann: 56, Andrey: 7 });

    expect(result).toEqual({ Ann: 56 });
});