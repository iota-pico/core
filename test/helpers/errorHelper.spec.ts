/**
 * Tests for ErrorHelper.
 */
import * as chai from "chai";
import { ErrorHelper } from "../../src/helpers/errorHelper";

describe("ErrorHelper", () => {
    it("can be created", () => {
        const obj = new ErrorHelper();
        chai.should().exist(obj);
    });

    describe("format", () => {
        it("can return unknown error when called with null", () => {
            chai.expect(ErrorHelper.format(null)).to.equal("unknown error");
        });

        it("can return unknown error when called with undefined", () => {
            chai.expect(ErrorHelper.format(undefined)).to.equal("unknown error");
        });

        it("can return the message when called with an Error", () => {
            chai.expect(ErrorHelper.format(new Error("the message"))).to.equal("the message");
        });

        it("can return the text when called with a string", () => {
            chai.expect(ErrorHelper.format("the message")).to.equal("the message");
        });

        it("can return the JSON when called with a number", () => {
            chai.expect(ErrorHelper.format(10)).to.equal(JSON.stringify(10));
        });

        it("can return the JSON when called with a boolean", () => {
            chai.expect(ErrorHelper.format(true)).to.equal(JSON.stringify(true));
        });

        it("can return the JSON when called with an object", () => {
            chai.expect(ErrorHelper.format({ p1: true, p2: 10})).to.equal(JSON.stringify({ p1: true, p2: 10}, undefined, "\t"));
        });
    });
});
