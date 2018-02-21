/**
 * Tests for CoreError.
 */
import * as chai from "chai";
import { CoreError } from "../../src/error/coreError";

describe("CoreError", () => {
    it("can be created", () => {
        const obj = new CoreError("");
        chai.should().exist(obj);
    });

    it("can be created with message", () => {
        const obj = new CoreError("hello");
        chai.expect(obj.message).to.be.equal("hello");
    });

    it("can be created with message and additional", () => {
        const obj = new CoreError("hello", { a: 1, b: true });
        chai.expect(obj.message).to.be.equal("hello");
        chai.expect(obj.additional).to.be.deep.equal({ a: 1, b: true });
    });

    describe("format", () => {
        it("can be created with message", () => {
            const obj = new CoreError("hello");
            chai.expect(obj.format()).to.be.equal("hello");
        });

        it("can be created with message and additional", () => {
            const obj = new CoreError("hello", { a: 1, b: true });
            chai.expect(obj.format()).to.be.equal("hello\n\ta: 1\n\tb: true\n");
        });

        it("can be created with no message", () => {
            const obj = new CoreError(undefined, { a: 1, b: true });
            chai.expect(obj.format()).to.be.equal("\ta: 1\n\tb: true\n");
        });
    });
});
