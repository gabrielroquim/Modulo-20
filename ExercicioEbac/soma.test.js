var { soma } = require('../../soma')

describe('Funcionalidade soma', () => {
    it('Valida a soma', () => {
        expect(soma).toBe(14210)
    });
});