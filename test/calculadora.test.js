const Calculadora = require('../src/calculadora'); 

describe('Calculadora', () => {
    let calculadora;
    
    beforeEach(() => {
        calculadora = new Calculadora();
      }); 

    test('Verificar se a soma retorna valores positivos.', () => {
        expect(calculadora.sum(2,2)).toBe(4);
    });

    test('Verificar se a soma retorna valores negativos.', () => {
        expect(calculadora.sum(-2, -2)).toBe(-4);
    });

    test('Verificar se a divisão retorna valores positivos.', () => {
    //  expect(div(8, 2)).toBe(4);
        expect(calculadora.sub(8, 1)).toBe(7);
    });
});
