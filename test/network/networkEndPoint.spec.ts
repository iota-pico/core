/**
 * Tests for NetworkEndPoint.
 */
import * as chai from "chai";
import { NetworkEndPoint } from "../../src/network/networkEndPoint";

describe("NetworkEndPoint", () => {
    it("can be created", () => {
        const obj = new NetworkEndPoint("http", "localhost", 443, "api");
        chai.should().exist(obj);
    });

    it("can fail with no protocol", () => {
        chai.expect(() => new NetworkEndPoint(null, "localhost", 443, "api")).to.throw("The protocol");
    });

    it("can fail with no protocol not http/https", () => {
        chai.expect(() => new NetworkEndPoint(<any>"ftp", "localhost", 443, "api")).to.throw("The protocol");
    });

    it("can fail with no host", () => {
        chai.expect(() => new NetworkEndPoint("http", undefined, 443, "api")).to.throw("The host");
    });

    it("can fail with port less than zero", () => {
        chai.expect(() => new NetworkEndPoint("http", "localhost", -1, "api")).to.throw("The port");
    });

    it("can fail with non string rootPath", () => {
        chai.expect(() => new NetworkEndPoint("http", "localhost", 80, <any>123)).to.throw("The rootPath");
    });

    it("can succeed with no rootPath", () => {
        const obj = new NetworkEndPoint("http", "localhost", 443, undefined);
        chai.expect(obj.getRootPath()).to.be.equal("");
    });

    describe("getProtocol", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, "api");
            chai.expect(obj.getProtocol()).to.be.equal("http");
        });
    });

    describe("getHost", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, "api");
            chai.expect(obj.getHost()).to.be.equal("localhost");
        });

        it("can be called with preceeding and trailing slashes removed", () => {
            const obj = new NetworkEndPoint("http", "//localhost//", 443, "api");
            chai.expect(obj.getHost()).to.be.equal("localhost");
        });
    });

    describe("getRootPath", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, "api");
            chai.expect(obj.getRootPath()).to.be.equal("api");
        });

        it("can be called with preceeding and trailing slashes removed", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, "//api//");
            chai.expect(obj.getRootPath()).to.be.equal("api");
        });
    });

    describe("getPort", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, "api");
            chai.expect(obj.getPort()).to.be.equal(443);
        });
    });

    describe("getUri", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, "api");
            chai.expect(obj.getUri()).to.be.equal("http://localhost:443/api");
        });
        it("can be called with no path", () => {
            const obj = new NetworkEndPoint("http", "localhost", 443, undefined);
            chai.expect(obj.getUri()).to.be.equal("http://localhost:443");
        });
        it("can be called with preceeding and trailing slashes removed", () => {
            const obj = new NetworkEndPoint("http", "//localhost//", 443, "//api//");
            chai.expect(obj.getUri()).to.be.equal("http://localhost:443/api");
        });
    });
});
