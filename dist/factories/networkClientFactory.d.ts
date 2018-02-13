import { INetworkClient } from "../interfaces/INetworkClient";
import { FactoryBase } from "./factoryBase";
/**
 * Factory to generate network clients.
 */
export declare class NetworkClientFactory extends FactoryBase<INetworkClient> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<INetworkClient>;
}
