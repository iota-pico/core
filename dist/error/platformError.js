Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("./coreError");
/**
 * A platform implementation of an error.
 */
class PlatformError extends coreError_1.CoreError {
    /**
     * Create an instance of PlatformError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Platform";
    }
}
exports.PlatformError = PlatformError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1FcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9wbGF0Zm9ybUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQ0FBd0M7QUFFeEM7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxxQkFBUztJQUN4Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBZSxFQUFFLFVBQWtDLEVBQUUsVUFBa0I7UUFDL0UsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBWEQsc0NBV0MifQ==