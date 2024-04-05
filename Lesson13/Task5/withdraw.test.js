import { withdraw } from './withdraw.js';

it('Can be withdrawn from balance', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

    expect(result).toEqual(37);
});

it('Cannot be removed from balance', () => {
    const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

    expect(result).toEqual(-1);
});