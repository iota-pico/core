Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("./factoryBase");
/**
 * Factory to generate rng service.
 */
class RngServiceFactory extends factoryBase_1.FactoryBase {
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
        if (!RngServiceFactory._instance) {
            RngServiceFactory._instance = new RngServiceFactory();
        }
        return RngServiceFactory._instance;
    }
    /* @internal */
    getInstance() {
        return RngServiceFactory.instance();
    }
}
exports.RngServiceFactory = RngServiceFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm5nU2VydmljZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCx1QkFBK0IsU0FBUSx5QkFBd0I7SUFJM0Q7OztPQUdHO0lBQ0g7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO1lBQzlCLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7U0FDekQ7UUFDRCxPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZTtJQUNMLFdBQVc7UUFDakIsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUEzQkQsOENBMkJDIn0=