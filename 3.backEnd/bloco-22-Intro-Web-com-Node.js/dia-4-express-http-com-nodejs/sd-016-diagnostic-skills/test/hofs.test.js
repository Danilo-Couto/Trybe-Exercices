const main = require('../day-2-exercise')

const validObject = { name: 'string', quantity: 1 };
const invalidQuantity = { name: 'outra string', quantity: 0 };
const invalidName = { name: 0, quantity: 21 };
const bothInvalid = { name: NaN, quantity: -1 };

describe('High Order Functions', () => {

  it('should main return true when body is valid', () => {
    const input = { body: [validObject, validObject] }
    const result = main(input);
    expect(result).toBe(true);
  });

  it('should main return false when invalid Quantity object', () => {
    const input = { body: [validObject, invalidQuantity] }
    const result = main(input);
    expect(result).toBe(false);
  });

  it('should main return false when invalid Name object', () => {
    const input = { body: [validObject, invalidName] }
    const result = main(input);
    expect(result).toBe(false);
  });

  it('should main return false when invalid Name and Quantity object', () => {
    const input = { body: [validObject, bothInvalid] }
    const result = main(input);
    expect(result).toBe(false);
  });

});