/**
 * Tests for PlatformCryptoFactory.
 */
import * as chai from "chai";
import { PlatformCryptoFactory } from "../../src/factories/platformCryptoFactory";
import { IPlatformCrypto } from "../../src/interfaces/IPlatformCrypto";

describe("PlatformCryptoFactory", () => {
    it("can be created", () => {
        const obj = PlatformCryptoFactory.instance();
        chai.should().exist(obj);
    });

    it("can register a type", () => {
        const obj = PlatformCryptoFactory.instance();
        class TestPlatformCrypto implements IPlatformCrypto {
            public encrypt(data: string): string {
                throw new Error("Method not implemented.");
            }
            public decrypt(data: string): string {
                throw new Error("Method not implemented.");
            }
            public sign(data: string): string {
                throw new Error("Method not implemented.");
            }
            public verify(data: string, signature: string): boolean {
                throw new Error("Method not implemented.");
            }
        }
        obj.register("test", () => new TestPlatformCrypto());
        chai.expect(obj.create("test") instanceof TestPlatformCrypto).to.be.equal(true);
    });
});
