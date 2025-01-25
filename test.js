import assert from "assert"


const a=10;
console.log( a );
console.log("test")
console.log("te2")


describe('Simple Test', () => {
    it('should return true', () => {
        assert.strictEqual(true, true);
    });
});
