import { IPlatformCrypto } from "../interfaces/IPlatformCrypto";
import { FactoryBase } from "./factoryBase";
/**
 * Factory to generate rng service.
 */
export declare class PlatformCryptoFactory extends FactoryBase<IPlatformCrypto> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IPlatformCrypto>;
}
