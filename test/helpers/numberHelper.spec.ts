/**
 * Tests for NumberHelper.
 */
import * as chai from "chai";
import { NumberHelper } from "../../src/helpers/numberHelper";

describe("NumberHelper", () => {
    it("can be created", () => {
        const obj = new NumberHelper();
        chai.should().exist(obj);
    });

    describe("isInteger", () => {
        it("can return false if passed undefined", () => {
            chai.expect(NumberHelper.isInteger(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(NumberHelper.isInteger(null)).to.equal(false);
        });

        it("can return false if passed string", () => {
            chai.expect(NumberHelper.isInteger("10")).to.equal(false);
        });

        it("can return false if passed true boolean", () => {
            chai.expect(NumberHelper.isInteger(true)).to.equal(false);
        });

        it("can return false if passed false boolean", () => {
            chai.expect(NumberHelper.isInteger(false)).to.equal(false);
        });

        it("can return false if passed Date", () => {
            chai.expect(NumberHelper.isInteger(new Date())).to.equal(false);
        });

        it("can return false if passed object", () => {
            chai.expect(NumberHelper.isInteger(new NumberHelper())).to.equal(false);
        });

        it("can return false if passed floating point number", () => {
            chai.expect(NumberHelper.isInteger(1.23)).to.equal(false);
        });

        it("can return false if passed NaN", () => {
            chai.expect(NumberHelper.isInteger(Number.NaN)).to.equal(false);
        });

        it("can return false if passed Infinity", () => {
            chai.expect(NumberHelper.isInteger(Number.POSITIVE_INFINITY)).to.equal(false);
        });

        it("can return true if passed value number", () => {
            chai.expect(NumberHelper.isInteger(7)).to.equal(true);
        });
    });

    describe("isNumber", () => {
        it("can return false if passed undefined", () => {
            chai.expect(NumberHelper.isNumber(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(NumberHelper.isNumber(null)).to.equal(false);
        });

        it("can return false if passed string", () => {
            chai.expect(NumberHelper.isNumber("10")).to.equal(false);
        });

        it("can return false if passed true boolean", () => {
            chai.expect(NumberHelper.isNumber(true)).to.equal(false);
        });

        it("can return false if passed false boolean", () => {
            chai.expect(NumberHelper.isNumber(false)).to.equal(false);
        });

        it("can return false if passed Date", () => {
            chai.expect(NumberHelper.isNumber(new Date())).to.equal(false);
        });

        it("can return false if passed object", () => {
            chai.expect(NumberHelper.isNumber(new NumberHelper())).to.equal(false);
        });

        it("can return true if passed floating point number", () => {
            chai.expect(NumberHelper.isNumber(1.23)).to.equal(true);
        });

        it("can return false if passed NaN", () => {
            chai.expect(NumberHelper.isNumber(Number.NaN)).to.equal(false);
        });

        it("can return false if passed Infinity", () => {
            chai.expect(NumberHelper.isNumber(Number.POSITIVE_INFINITY)).to.equal(false);
        });

        it("can return true if passed value number", () => {
            chai.expect(NumberHelper.isNumber(7)).to.equal(true);
        });
    });

    describe("isFloatString", () => {
        it("can return false if passed undefined", () => {
            chai.expect(NumberHelper.isFloatString(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(NumberHelper.isFloatString(null)).to.equal(false);
        });

        it("can return false if passed empty string", () => {
            chai.expect(NumberHelper.isFloatString("")).to.equal(false);
        });

        it("can return false if passed invalid number", () => {
            chai.expect(NumberHelper.isFloatString("1.2.3")).to.equal(false);
        });

        it("can return false if passed non numeric characters", () => {
            chai.expect(NumberHelper.isFloatString("1.2a")).to.equal(false);
        });

        it("can return false if passed dot only", () => {
            chai.expect(NumberHelper.isFloatString(".")).to.equal(false);
        });

        it("can return false if passed number missing decimals", () => {
            chai.expect(NumberHelper.isFloatString("1.")).to.equal(false);
        });

        it("can return true if passed digits only", () => {
            chai.expect(NumberHelper.isFloatString("1")).to.equal(true);
        });

        it("can return true if passed digits and dots", () => {
            chai.expect(NumberHelper.isFloatString("1.2")).to.equal(true);
        });

        it("can return true if passed neg, digits and dots", () => {
            chai.expect(NumberHelper.isFloatString("-1.2")).to.equal(true);
        });
    });

    describe("isIntegerString", () => {
        it("can return false if passed undefined", () => {
            chai.expect(NumberHelper.isIntegerString(undefined)).to.equal(false);
        });

        it("can return false if passed null", () => {
            chai.expect(NumberHelper.isIntegerString(null)).to.equal(false);
        });

        it("can return false if passed empty string", () => {
            chai.expect(NumberHelper.isIntegerString("")).to.equal(false);
        });

        it("can return false if passed invalid number", () => {
            chai.expect(NumberHelper.isIntegerString("1.2.3")).to.equal(false);
        });

        it("can return false if passed non numeric characters", () => {
            chai.expect(NumberHelper.isIntegerString("1.2a")).to.equal(false);
        });

        it("can return false if passed dot only", () => {
            chai.expect(NumberHelper.isIntegerString(".")).to.equal(false);
        });

        it("can return false if passed number missing decimals", () => {
            chai.expect(NumberHelper.isIntegerString("1.")).to.equal(false);
        });

        it("can return true if passed digits only", () => {
            chai.expect(NumberHelper.isIntegerString("1")).to.equal(true);
        });

        it("can return false if passed digits and dots", () => {
            chai.expect(NumberHelper.isIntegerString("1.2")).to.equal(false);
        });

        it("can return false if passed neg, digits and dots", () => {
            chai.expect(NumberHelper.isIntegerString("-1.2")).to.equal(false);
        });

        it("can return true if passed neg, digits", () => {
            chai.expect(NumberHelper.isIntegerString("-12")).to.equal(true);
        });
    });
});
