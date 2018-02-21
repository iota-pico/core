/**
 * Tests for NetworkEndPoint.
 */
import * as chai from "chai";
import { NetworkEndPoint } from "../../src/network/networkEndPoint";

describe("NetworkEndPoint", () => {
    it("can be created", () => {
        const obj = new NetworkEndPoint("http", "localhost", "api", 443);
        chai.should().exist(obj);
    });

    it("can fail with no protocol", () => {
        chai.expect(() => new NetworkEndPoint(null, "localhost", "api", 443)).to.throw("The protocol");
    });

    it("can fail with no protocol not http/https", () => {
        chai.expect(() => new NetworkEndPoint(<any>"ftp", "localhost", "api", 443)).to.throw("The protocol");
    });

    it("can fail with no host", () => {
        chai.expect(() => new NetworkEndPoint("http", undefined, "api", 443)).to.throw("The host");
    });

    it("can fail with non string path", () => {
        chai.expect(() => new NetworkEndPoint("http", "localhost", <any>123, 80)).to.throw("The path");
    });

    it("can fail with port less than zero", () => {
        chai.expect(() => new NetworkEndPoint("http", "localhost", "api", -1)).to.throw("The port");
    });

    it("can succeed with no path", () => {
        const obj = new NetworkEndPoint("http", "localhost", undefined, 443);
        chai.expect(obj.getPath()).to.be.equal("");
    });

    describe("getProtocol", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", "api", 443);
            chai.expect(obj.getProtocol()).to.be.equal("http");
        });
    });

    describe("getHost", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", "api", 443);
            chai.expect(obj.getHost()).to.be.equal("localhost");
        });

        it("can be called with preceeding and trailing slashes removed", () => {
            const obj = new NetworkEndPoint("http", "//localhost//", "api", 443);
            chai.expect(obj.getHost()).to.be.equal("localhost");
        });
    });

    describe("getPath", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", "api", 443);
            chai.expect(obj.getPath()).to.be.equal("api");
        });

        it("can be called with preceeding and trailing slashes removed", () => {
            const obj = new NetworkEndPoint("http", "localhost", "//api//", 443);
            chai.expect(obj.getPath()).to.be.equal("api");
        });
    });

    describe("getPort", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", "api", 443);
            chai.expect(obj.getPort()).to.be.equal(443);
        });
    });

    describe("getUri", () => {
        it("can be called", () => {
            const obj = new NetworkEndPoint("http", "localhost", "api", 443);
            chai.expect(obj.getUri()).to.be.equal("http://localhost:443/api");
        });
        it("can be called with no path", () => {
            const obj = new NetworkEndPoint("http", "localhost", undefined, 443);
            chai.expect(obj.getUri()).to.be.equal("http://localhost:443/");
        });
        it("can be called with preceeding and trailing slashes removed", () => {
            const obj = new NetworkEndPoint("http", "//localhost//", "//api//", 443);
            chai.expect(obj.getUri()).to.be.equal("http://localhost:443/api");
        });
    });
});
