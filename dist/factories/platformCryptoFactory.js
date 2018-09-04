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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1DcnlwdG9GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtDQUE0QztBQUU1Qzs7R0FFRztBQUNILE1BQWEscUJBQXNCLFNBQVEseUJBQTRCO0lBSW5FOzs7T0FHRztJQUNIO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFFBQVE7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRTtZQUNsQyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUVELGVBQWU7SUFDTCxXQUFXO1FBQ2pCLE9BQU8scUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNKO0FBM0JELHNEQTJCQyJ9