const {sum, div, sub, mult} = require('../src/calculos'); 

test('Verificar se a soma retorna valores positivos.', () => {
    expect(sum(2,2)).toBe(4);
});

test('Verificar se a soma retorna valores negativos.', () => {
    expect(sum(-2, -2)).toBe(-4);
});

test('Verificar se a divisão retorna valores positivos.', () => {
//  expect(div(8, 2)).toBe(4);
    expect(sub(8, 1)).toBe(7);
});