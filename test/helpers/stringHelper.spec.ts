/**
 * Tests for StringHelper.
 */
import * as chai from "chai";
import { StringHelper } from "../../src/helpers/stringHelper";

describe("StringHelper", () => {
    it("can be created", () => {
        const obj = new StringHelper();
        chai.should().exist(obj);
    });

    describe("isString", () => {
        it("can return false if passed undefined", () => {
            chai.expect(StringHelper.isString(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(StringHelper.isString(null)).to.equal(false);
        });

        it("can return false if passed number", () => {
            chai.expect(StringHelper.isString(10)).to.equal(false);
        });

        it("can return false if passed true boolean", () => {
            chai.expect(StringHelper.isString(true)).to.equal(false);
        });

        it("can return false if passed false boolean", () => {
            chai.expect(StringHelper.isString(false)).to.equal(false);
        });

        it("can return false if passed Date", () => {
            chai.expect(StringHelper.isString(new Date())).to.equal(false);
        });

        it("can return false if passed object", () => {
            chai.expect(StringHelper.isString(new StringHelper())).to.equal(false);
        });

        it("can return true if passed empty string", () => {
            chai.expect(StringHelper.isString("")).to.equal(true);
        });

        it("can return true if passed value string", () => {
            chai.expect(StringHelper.isString("hello")).to.equal(true);
        });
    });

    describe("isAscii", () => {
        it("can return false if passed undefined", () => {
            chai.expect(StringHelper.isAscii(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(StringHelper.isAscii(null)).to.equal(false);
        });

        it("can return false if non ascii", () => {
            chai.expect(StringHelper.isAscii("🎺")).to.equal(false);
        });

        it("can return true if ascii", () => {
            chai.expect(StringHelper.isAscii("$")).to.equal(true);
        });
    });

    describe("encodeNonASCII", () => {
        it("can return undefined if passed undefined", () => {
            chai.expect(StringHelper.encodeNonASCII(undefined)).to.equal(undefined);
        });

        it("can return undefined if passed null", () => {
            chai.expect(StringHelper.encodeNonASCII(null)).to.equal(undefined);
        });

        it("can return encoded string if non ascii", () => {
            chai.expect(StringHelper.encodeNonASCII("🎺⚽")).to.equal("\\ud83c\\udfba\\u26bd");
        });

        it("can return same string if all ascii", () => {
            chai.expect(StringHelper.encodeNonASCII("$ABCD")).to.equal("$ABCD");
        });
    });

    describe("decodeNonASCII", () => {
        it("can return undefined if passed undefined", () => {
            chai.expect(StringHelper.decodeNonASCII(undefined)).to.equal(undefined);
        });

        it("can return undefined if passed null", () => {
            chai.expect(StringHelper.decodeNonASCII(null)).to.equal(undefined);
        });

        it("can return encoded string if non ascii", () => {
            chai.expect(StringHelper.decodeNonASCII("\\ud83c\\udfba\\u26bd")).to.equal("🎺⚽");
        });

        it("can return same string if all ascii", () => {
            chai.expect(StringHelper.decodeNonASCII("$ABCD")).to.equal("$ABCD");
        });
    });
});
