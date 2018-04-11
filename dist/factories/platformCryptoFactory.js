Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("./factoryBase");
/**
 * Factory to generate rng service.
 */
class PlatformCryptoFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!PlatformCryptoFactory._instance) {
            PlatformCryptoFactory._instance = new PlatformCryptoFactory();
        }
        return PlatformCryptoFactory._instance;
    }
    /* @internal */
    getInstance() {
        return PlatformCryptoFactory.instance();
    }
}
exports.PlatformCryptoFactory = PlatformCryptoFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1DcnlwdG9GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtDQUE0QztBQUU1Qzs7R0FFRztBQUNILDJCQUFtQyxTQUFRLHlCQUE0QjtJQUluRTs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQ2xFLENBQUM7UUFDRCxNQUFNLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixNQUFNLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBM0JELHNEQTJCQyJ9