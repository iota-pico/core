import { IRngService } from "../interfaces/IRngService";
import { FactoryBase } from "./factoryBase";

/**
 * Factory to generate rng service.
 */
export class RngServiceFactory extends FactoryBase<IRngService> {
    /* @internal */
    private static _instance: RngServiceFactory;

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
    public static instance(): FactoryBase<IRngService> {
        if (!RngServiceFactory._instance) {
            RngServiceFactory._instance = new RngServiceFactory();
        }
        return RngServiceFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<IRngService> {
        return RngServiceFactory.instance();
    }
}
