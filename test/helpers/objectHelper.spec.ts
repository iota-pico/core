/**
 * Tests for ObjectHelper.
 */
import * as chai from "chai";
import { ObjectHelper } from "../../src/helpers/objectHelper";

class TestClass {
}

class TestClass2 {
}

describe("ObjectHelper", () => {
    it("can be created", () => {
        const obj = new ObjectHelper();
        chai.should().exist(obj);
    });

    describe("isEmpty", () => {
        it("can return true with undefined", () => {
            chai.expect(ObjectHelper.isEmpty(undefined)).to.equal(true);
        });
        it("can return true with null", () => {
            chai.expect(ObjectHelper.isEmpty(null)).to.equal(true);
        });
        it("can return false with boolean false", () => {
            chai.expect(ObjectHelper.isEmpty(false)).to.equal(false);
        });
        it("can return false with boolean true", () => {
            chai.expect(ObjectHelper.isEmpty(true)).to.equal(false);
        });
        it("can return false with empty string", () => {
            chai.expect(ObjectHelper.isEmpty("")).to.equal(false);
        });
    });

    describe("isObject", () => {
        it("can return false with undefined", () => {
            chai.expect(ObjectHelper.isObject(undefined)).to.equal(false);
        });
        it("can return false with null", () => {
            chai.expect(ObjectHelper.isObject(null)).to.equal(false);
        });
        it("can return false with string", () => {
            chai.expect(ObjectHelper.isObject("aaa")).to.equal(false);
        });
        it("can return false with false boolean", () => {
            chai.expect(ObjectHelper.isObject(false)).to.equal(false);
        });
        it("can return false with true boolean", () => {
            chai.expect(ObjectHelper.isObject(true)).to.equal(false);
        });
        it("can return false with number", () => {
            chai.expect(ObjectHelper.isObject(1)).to.equal(false);
        });
        it("can return false with empty array", () => {
            chai.expect(ObjectHelper.isObject([])).to.equal(false);
        });
        it("can return false with non-empty array", () => {
            chai.expect(ObjectHelper.isObject([1, 2, 3])).to.equal(false);
        });
        it("can return false with Array", () => {
            chai.expect(ObjectHelper.isObject(Array(5))).to.equal(false);
        });
        it("can return true with Date", () => {
            chai.expect(ObjectHelper.isObject(new Date())).to.equal(true);
        });
        it("can return true with object", () => {
            chai.expect(ObjectHelper.isObject(new TestClass())).to.equal(true);
        });
    });

    describe("isType", () => {
        it("can return false with undefined", () => {
            chai.expect(ObjectHelper.isType(undefined, TestClass)).to.equal(false);
        });
        it("can return false with null", () => {
            chai.expect(ObjectHelper.isType(null, TestClass)).to.equal(false);
        });
        it("can return false with Date", () => {
            chai.expect(ObjectHelper.isType(new Date(), TestClass)).to.equal(false);
        });
        it("can return false with object of different type", () => {
            chai.expect(ObjectHelper.isType(new TestClass2(), TestClass)).to.equal(false);
        });
        it("can return true with object of same type", () => {
            chai.expect(ObjectHelper.isType(new TestClass(), TestClass)).to.equal(true);
        });
    });

    describe("getClassName", () => {
        it("can return no object if the object is undefined", () => {
            chai.expect(ObjectHelper.getClassName(undefined)).to.equal(undefined);
        });

        it("can return no object if the object is null", () => {
            chai.expect(ObjectHelper.getClassName(null)).to.equal(undefined);
        });

        it("can return String if the object is an empty string", () => {
            chai.expect(ObjectHelper.getClassName("")).to.equal("String");
        });

        it("can return String if the object is a value string", () => {
            chai.expect(ObjectHelper.getClassName("hello")).to.equal("String");
        });

        it("can return Number if the object is a number", () => {
            chai.expect(ObjectHelper.getClassName(10)).to.equal("Number");
        });

        it("can return Boolean if the object is a true boolean", () => {
            chai.expect(ObjectHelper.getClassName(true)).to.equal("Boolean");
        });

        it("can return Boolean if the object is a false boolean", () => {
            chai.expect(ObjectHelper.getClassName(false)).to.equal("Boolean");
        });

        it("can return Date if the object is a Date", () => {
            chai.expect(ObjectHelper.getClassName(new Date())).to.equal("Date");
        });

        it("can return ObjectHelper if the object is a ObjectHelper", () => {
            chai.expect(ObjectHelper.getClassName(new TestClass())).to.equal("TestClass");
        });

        it("can return no object if the object is an empty function", () => {
            const emptyFunction = () => "hello";
            chai.expect(ObjectHelper.getClassName(emptyFunction)).to.equal(undefined);
        });
    });
});
