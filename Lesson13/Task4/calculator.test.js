import { calc } from './calculator.js';

it('Not a string sent', () => {
    const result = calc();

    expect(result).toEqual(null);
});

it('Checking the operation +', () => {
    const result = calc('2 + 3');

    expect(result).toEqual(5);
});
it('Checking the operation -', () => {
    const result = calc('3 - 2');

    expect(result).toEqual(1);
});

it('Checking the operation *', () => {
    const result = calc('2 * 3');

    expect(result).toEqual(6);
});

it('Checking the operation /', () => {
    const result = calc('10 / 5');

    expect(result).toEqual(2);
});