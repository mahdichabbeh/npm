import assert from "assert"


const a=10;
console.log( a );
console.log("test")


describe('Simple Test', () => {
    it('should return true', () => {
        assert.strictEqual(true, true);
    });
});
