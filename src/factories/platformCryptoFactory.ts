import { IPlatformCrypto } from "../interfaces/IPlatformCrypto";
import { FactoryBase } from "./factoryBase";

/**
 * Factory to generate rng service.
 */
export class PlatformCryptoFactory extends FactoryBase<IPlatformCrypto> {
    /* @internal */
    private static _instance: PlatformCryptoFactory;

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
    public static instance(): FactoryBase<IPlatformCrypto> {
        if (!PlatformCryptoFactory._instance) {
            PlatformCryptoFactory._instance = new PlatformCryptoFactory();
        }
        return PlatformCryptoFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<IPlatformCrypto> {
        return PlatformCryptoFactory.instance();
    }
}
