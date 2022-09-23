const main = require('../index')

describe('Manipulando objetos', () => {

    it('should main return true when body is valid', () => {
        const input = { body: { email: 'dsihfkjdsahfalkjsdhf', password: 'asdhaskjdha' } }
        const result = main(input);
        expect(result).toBe(true);
    });

    it('should main return false when email empty', () => {
        const input = { body: { password: 'asdhaskjdha', email: null } }
        const result = main(input);
        expect(result).toBe(false);
    });

    it('should main return false password empty', () => {
        const input = { body: { email: 'dsihfkjdsahfalkjsdhf', password: null } }
        const result = main(input);
        expect(result).toBe(false);
    });

    it('should main return false when email invalid', () => {
        const input = { body: { password: 'asdhaskjdha', email: 'asd' } }
        const result = main(input);
        expect(result).toBe(false);
    });
    
    it('should main return false password invalid', () => {
        const input = { body: { email: 'dsihfkjdsahfalkjsdhf', password: 'asdf' } }
        const result = main(input);
        expect(result).toBe(false);
    });
});