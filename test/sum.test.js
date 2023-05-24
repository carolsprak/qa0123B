const sum = require('../src/calculadora'); 

test('Verificar se a soma retorna valores positivos.', () => {
    expect(sum(2,2)).toBe(4);
    expect(sum(1,3)).toBe(4);
    expect(sum(5,7)).toBe(12);
    expect(sum(13,2)).toBe(15);
});