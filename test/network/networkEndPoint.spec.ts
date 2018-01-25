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
});
