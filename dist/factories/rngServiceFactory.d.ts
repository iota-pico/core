import { IRngService } from "../interfaces/IRngService";
import { FactoryBase } from "./factoryBase";
/**
 * Factory to generate rng service.
 */
export declare class RngServiceFactory extends FactoryBase<IRngService> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IRngService>;
}
