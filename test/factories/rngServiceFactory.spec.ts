/**
 * Tests for RngServiceFactory.
 */
import * as chai from "chai";
import { RngServiceFactory } from "../../src/factories/rngServiceFactory";
import { IRngService } from "../../src/interfaces/IRngService";

describe("RngServiceFactory", () => {
    it("can be created", () => {
        const obj = RngServiceFactory.instance();
        chai.should().exist(obj);
    });

    it("can register a type", () => {
        const obj = RngServiceFactory.instance();
        class TestRngService implements IRngService {
            public async generate(length: number): Promise<Uint8Array> {
                throw new Error("Method not implemented.");
            }
        }
        obj.register("test", () => new TestRngService());
        chai.expect(obj.create("test") instanceof TestRngService).to.be.equal(true);
    });
});
