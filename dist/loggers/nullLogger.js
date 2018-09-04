Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of ILogger which is silent.
 */
class NullLogger {
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message, ...args) {
    }
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message, ...args) {
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message, ...args) {
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message, ...args) {
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message, err, ...args) {
    }
}
exports.NullLogger = NullLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVsbExvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJzL251bGxMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQ25COzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztJQUM5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsT0FBZSxFQUFFLEdBQVMsRUFBRSxHQUFHLElBQVc7SUFDdkQsQ0FBQztDQUNKO0FBekNELGdDQXlDQyJ9