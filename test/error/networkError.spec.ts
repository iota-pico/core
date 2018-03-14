/**
 * Tests for NetworkError.
 */
import * as chai from "chai";
import { NetworkError } from "../../src/error/networkError";

describe("NetworkError", () => {
    it("can be created", () => {
        const obj = new NetworkError("message");
        chai.should().exist(obj);
    });
});
