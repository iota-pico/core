/**
 * Tests for PlatformError.
 */
import * as chai from "chai";
import { PlatformError } from "../../src/error/platformError";

describe("PlatformError", () => {
    it("can be created", () => {
        const obj = new PlatformError("message");
        chai.should().exist(obj);
    });
});
