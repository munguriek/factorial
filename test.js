const factorial = require("./factorial");
const assert = require('chai').assert;
describe('Factorial', ()=>{
    it("should return 3628800 for factorial of 10", ()=>{
        assert.strictEqual(factorial(10), 3628800)
    });
    it("should return 1307674368000. for factorial of 15", ()=>{
        assert.strictEqual(factorial(15), 1307674368000)
    });
    it("should return 2432902008176640000 for factorial of 20", ()=>{
        assert.strictEqual(factorial(20), 2432902008176640000)
    });
    it("should return Error for factorial of 0", ()=>{
        assert.notStrictEqual(factorial(0), "No Factorial")
    });
})