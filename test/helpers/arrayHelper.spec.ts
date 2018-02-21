/**
 * Tests for ArrayHelper.
 */
import * as chai from "chai";
import { ArrayHelper } from "../../src/helpers/arrayHelper";

class TestClass {
}

describe("ArrayHelper", () => {
    it("can be created", () => {
        const obj = new ArrayHelper();
        chai.should().exist(obj);
    });

    describe("isArray", () => {
        it("can return false with undefined", () => {
            chai.expect(ArrayHelper.isArray(undefined)).to.equal(false);
        });
        it("can return false with null", () => {
            chai.expect(ArrayHelper.isArray(null)).to.equal(false);
        });
        it("can return false with string", () => {
            chai.expect(ArrayHelper.isArray("aaa")).to.equal(false);
        });
        it("can return false with false boolean", () => {
            chai.expect(ArrayHelper.isArray(false)).to.equal(false);
        });
        it("can return false with true boolean", () => {
            chai.expect(ArrayHelper.isArray(true)).to.equal(false);
        });
        it("can return false with number", () => {
            chai.expect(ArrayHelper.isArray(1)).to.equal(false);
        });
        it("can return true with empty array", () => {
            chai.expect(ArrayHelper.isArray([])).to.equal(true);
        });
        it("can return true with non-empty array", () => {
            chai.expect(ArrayHelper.isArray([1, 2, 3])).to.equal(true);
        });
        it("can return true with Array", () => {
            chai.expect(ArrayHelper.isArray(Array(5))).to.equal(true);
        });
    });

    describe("isEmpty", () => {
        it("can return false with empty array", () => {
            chai.expect(ArrayHelper.isEmpty([])).to.equal(true);
        });
        it("can return true with non-empty array", () => {
            chai.expect(ArrayHelper.isEmpty([1, 2, 3])).to.equal(false);
        });
        it("can return true with Array", () => {
            chai.expect(ArrayHelper.isEmpty(Array(5))).to.equal(false);
        });
    });

    describe("isTyped", () => {
        it("can return false with empty array", () => {
            chai.expect(ArrayHelper.isTyped([], TestClass)).to.equal(false);
        });
        it("can return false with non-empty number array", () => {
            chai.expect(ArrayHelper.isTyped([1, 2, 3], TestClass)).to.equal(false);
        });
        it("can return false with Array unknown type", () => {
            chai.expect(ArrayHelper.isTyped(Array(5), TestClass)).to.equal(false);
        });
        it("can return false with non-empty TestClass array with undefineds", () => {
            chai.expect(ArrayHelper.isTyped([new TestClass(), undefined, new TestClass()], TestClass)).to.equal(false);
        });
        it("can return true with non-empty TestClass array", () => {
            chai.expect(ArrayHelper.isTyped([new TestClass(), new TestClass()], TestClass)).to.equal(true);
        });
        it("can return true with Array known type", () => {
            chai.expect(ArrayHelper.isTyped(Array(2).fill(new TestClass()), TestClass)).to.equal(true);
        });
    });
});
