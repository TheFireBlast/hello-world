var lib = require('../dist');
var expect = require('chai').expect;

describe('pow1', () => {
    it('tests if pow(5, 6) == 15625', () => {
        expect(lib.pow1(5, 6)).to.equal(15625);
    });
    it('tests if pow(7, 2) == 49', () => {
        expect(lib.pow1(7, 2)).to.equal(49);
    });
});
describe('pow2', () => {
    it('tests if pow(5, 6) == 15625', () => {
        expect(lib.pow2(5, 6)).to.equal(15625);
    });
    it('tests if pow(7, 2) == 49', () => {
        expect(lib.pow2(7, 2)).to.equal(49);
    });
});
