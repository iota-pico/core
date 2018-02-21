/**
 * Tests for NetworkClientFactory.
 */
import * as chai from "chai";
import { NetworkClientFactory } from "../../src/factories/networkClientFactory";
import { INetworkClient } from "../../src/interfaces/INetworkClient";

describe("NetworkClientFactory", () => {
    it("can be created", () => {
        const obj = NetworkClientFactory.instance();
        chai.should().exist(obj);
    });

    it("can register a type", () => {
        const obj = NetworkClientFactory.instance();
        class TestNetworkClient implements INetworkClient {
            public async get(additionalHeaders?: { [header: string]: string }): Promise<string> {
                throw new Error("Method not implemented.");
            }
            public async post(data: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
                throw new Error("Method not implemented.");
            }
            public async getJson<U>(additionalHeaders?: { [header: string]: string }): Promise<U> {
                throw new Error("Method not implemented.");
            }
            public async postJson<T, U>(data: T, additionalHeaders?: { [header: string]: string }): Promise<U> {
                throw new Error("Method not implemented.");
            }
        }
        obj.register("test", () => new TestNetworkClient());
        chai.expect(obj.create("test") instanceof TestNetworkClient).to.be.equal(true);
    });
});
