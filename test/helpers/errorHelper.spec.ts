/**
 * Tests for ErrorHelper.
 */
import * as chai from "chai";
import { CoreError } from "../../src/error/coreError";
import { ErrorHelper } from "../../src/helpers/errorHelper";

describe("ErrorHelper", () => {
    it("can be created", () => {
        const obj = new ErrorHelper();
        chai.should().exist(obj);
    });

    describe("format", () => {
        it("can return unknown error when called with null", () => {
            chai.expect(ErrorHelper.format(null, false)).to.equal("unknown error");
        });

        it("can return unknown error when called with undefined", () => {
            chai.expect(ErrorHelper.format(undefined, false)).to.equal("unknown error");
        });

        it("can return the text when called with a string", () => {
            chai.expect(ErrorHelper.format("the message", false)).to.equal("the message");
        });

        it("can return the JSON when called with a number", () => {
            chai.expect(ErrorHelper.format(10, false)).to.equal(JSON.stringify(10));
        });

        it("can return the JSON when called with a boolean", () => {
            chai.expect(ErrorHelper.format(true, false)).to.equal(JSON.stringify(true));
        });

        it("can return the JSON when called with an object", () => {
            chai.expect(ErrorHelper.format({ p1: true, p2: 10}, false)).to.equal(JSON.stringify({ p1: true, p2: 10}, undefined, "\t"));
        });

        it("can return the message when called with an Error", () => {
            chai.expect(ErrorHelper.format(new Error("the message"), false)).to.equal("the message");
        });

        it("can return the message when called with an Error with stack", () => {
            const obj = new Error("the message");
            obj.stack = "the message\nstack2";
            chai.expect(ErrorHelper.format(obj, true)).to.equal("the message\nstack2");
        });

        it("can return the message when called with an CoreError no stack", () => {
            const obj = new CoreError("the message");
            chai.expect(ErrorHelper.format(obj, false)).to.equal("the message");
        });

        it("can return the message when called with an CoreError including stack but none", () => {
            const obj = new CoreError("the message");
            obj.stack = undefined;
            chai.expect(ErrorHelper.format(obj, true)).to.equal("the message");
        });

        it("can return the message when called with an CoreError including stack", () => {
            const obj = new CoreError("the message");
            obj.stack = "stack 1\nstack 2";
            chai.expect(ErrorHelper.format(obj, true)).to.equal("the message\nStack Trace\nstack 2");
        });

        it("can return the message when called with an CoreError and inner no stack", () => {
            const obj = new CoreError("the message");
            obj.innerError = new Error("inner message");
            chai.expect(ErrorHelper.format(obj, false)).to.equal("the message\nInner Error: inner message\n");
        });

        it("can return the message when called with an CoreError and inner including stack but none", () => {
            const obj = new CoreError("the message");
            obj.stack = undefined;
            obj.innerError = new Error("inner message");
            obj.innerError.stack = undefined;
            chai.expect(ErrorHelper.format(obj, true)).to.equal("the message\nInner Error: inner message\n");
        });

        it("can return the message when called with an CoreError and inner  including stack", () => {
            const obj = new CoreError("the message");
            obj.stack = "stack 1\nstack 2";
            obj.innerError = new Error("inner message");
            obj.innerError.stack = "stack 3\nstack 4";
            // tslint:disable-next-line:max-line-length
            chai.expect(ErrorHelper.format(obj, true)).to.equal("the message\nStack Trace\nstack 2\n\n-----------------------------------------------\nInner Stack Trace\nstack 3\nstack 4");
        });
    });
});
