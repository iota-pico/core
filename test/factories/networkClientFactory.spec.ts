/**
 * Tests for NetworkClientFactory.
 */
import * as chai from "chai";
import { NetworkClientFactory } from "../../src/factories/networkClientFactory";
import { INetworkClient } from "../../src/interfaces/INetworkClient";
import { NetworkMethod } from "../../src/interfaces/networkMethod";

describe("NetworkClientFactory", () => {
    it("can be created", () => {
        const obj = NetworkClientFactory.instance();
        chai.should().exist(obj);
    });

    it("can register a type", () => {
        const obj = NetworkClientFactory.instance();
        class TestNetworkClient implements INetworkClient {
            public async get(data: { [key: string]: any }, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
                throw new Error("Method not implemented.");
            }
            public async post(data: string, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
                throw new Error("Method not implemented.");
            }
            public async jsonRequest<T, U>(data?: T, method?: NetworkMethod, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<U> {
                throw new Error("Method not implemented.");
            }
            public async doRequest(method: string, data: string, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
                throw new Error("Method not implemented.");
            }
        }
        obj.register("test", () => new TestNetworkClient());
        chai.expect(obj.create("test") instanceof TestNetworkClient).to.be.equal(true);
    });
});
