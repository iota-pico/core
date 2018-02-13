import { INetworkClient } from "../interfaces/INetworkClient";
import { FactoryBase } from "./factoryBase";

/**
 * Factory to generate network clients.
 */
export class NetworkClientFactory extends FactoryBase<INetworkClient> {
    /* @internal */
    private static _instance: NetworkClientFactory;

    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    private constructor() {
        super();
    }

    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    public static instance(): FactoryBase<INetworkClient> {
        if (!NetworkClientFactory._instance) {
            NetworkClientFactory._instance = new NetworkClientFactory();
        }
        return NetworkClientFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<INetworkClient> {
        return NetworkClientFactory.instance();
    }
}
