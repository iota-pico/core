Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("./factoryBase");
/**
 * Factory to generate network clients.
 */
class NetworkClientFactory extends factoryBase_1.FactoryBase {
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
        if (!NetworkClientFactory._instance) {
            NetworkClientFactory._instance = new NetworkClientFactory();
        }
        return NetworkClientFactory._instance;
    }
    /* @internal */
    getInstance() {
        return NetworkClientFactory.instance();
    }
}
exports.NetworkClientFactory = NetworkClientFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCxNQUFhLG9CQUFxQixTQUFRLHlCQUEyQjtJQUlqRTs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsb0JBQW9CLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUMvRDtRQUNELE9BQU8sb0JBQW9CLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQTNCRCxvREEyQkMifQ==