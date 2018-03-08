/**
 * Tests for NullLogger.
 */
import * as chai from "chai";
import { NullLogger } from "../../src/loggers/nullLogger";

describe("NullLogger", () => {
    it("can be created", () => {
        const obj = new NullLogger();
        chai.should().exist(obj);
    });

    describe("banner", () => {
        it("can be called", () => {
            const obj = new NullLogger();
            chai.expect(obj.banner("message")).to.be.equal(undefined);
        });
    });

    describe("log", () => {
        it("can be called", () => {
            const obj = new NullLogger();
            chai.expect(obj.log("message")).to.be.equal(undefined);
        });
    });

    describe("info", () => {
        it("can be called", () => {
            const obj = new NullLogger();
            chai.expect(obj.info("message")).to.be.equal(undefined);
        });
    });

    describe("warning", () => {
        it("can be called", () => {
            const obj = new NullLogger();
            chai.expect(obj.warning("message")).to.be.equal(undefined);
        });
    });

    describe("error", () => {
        it("can be called", () => {
            const obj = new NullLogger();
            chai.expect(obj.error("message")).to.be.equal(undefined);
        });
    });
});
