/**
 * Tests for ConsoleLogger.
 */
import * as chai from "chai";
import { ConsoleLogger } from "../../src/loggers/consoleLogger";

describe("ConsoleLogger", () => {
    let consoleStub: Console;
    let logs: string[];
    let infos: string[];
    let warnings: string[];
    let errors: string[];

    beforeEach(() => {
        logs = [];
        infos = [];
        warnings = [];
        errors = [];
        consoleStub = <Console>{};
        consoleStub.log = (message) => {
            logs.push(message);
        };
        consoleStub.info = (message) => {
            infos.push(message);
        };
        consoleStub.warn = (message) => {
            warnings.push(message);
        };
        consoleStub.error = (message) => {
            errors.push(message);
        };
    });

    it("can be created", () => {
        const obj = new ConsoleLogger(consoleStub);
        chai.should().exist(obj);
    });

    it("can be created with default logger", () => {
        const obj = new ConsoleLogger();
        chai.should().exist(obj);
    });

    describe("banner", () => {
        it("can be called", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.banner("message");
            chai.expect(logs.length).to.be.equal(3);
        });
    });

    describe("log", () => {
        it("can be called", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message");
            chai.expect(logs.length).to.be.equal(1);
        });

        it("can be called with null args", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", null);
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with undefined args", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", undefined);
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with string arg", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", "foo");
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with multiple arg", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", "foo", true);
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with array", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", [1, 2, 3]);
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with object", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", { foo: 1234, bar: true});
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called nested object", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", { foo: [1, 2, 3, 4], bar: { bing: true, bong: false}});
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with empty object", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", { foo: [1, 2, 3, 4], bar: { bing: null, bong: false}});
            chai.expect(logs.length).to.be.equal(2);
        });

        it("can be called with object that has toString()", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.log("message", { foo: [1, 2, 3, 4], bar: { bing: null, bong: new Date() }});
            chai.expect(logs.length).to.be.equal(2);
        });
    });

    describe("info", () => {
        it("can be called", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.info("message");
            chai.expect(infos.length).to.be.equal(1);
        });
    });

    describe("warning", () => {
        it("can be called", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.warning("message");
            chai.expect(warnings.length).to.be.equal(1);
        });
    });

    describe("error", () => {
        it("can be called", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.error("message");
            chai.expect(errors.length).to.be.equal(1);
        });

        it("can be called with error", () => {
            const obj = new ConsoleLogger(consoleStub);
            obj.error("message", new Error("foo"));
            chai.expect(errors.length).to.be.greaterThan(2);
        });
    });
});
