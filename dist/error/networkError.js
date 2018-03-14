Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("./coreError");
/**
 * A network implementation of an error.
 */
class NetworkError extends coreError_1.CoreError {
    /**
     * Create an instance of NetworkError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Network";
    }
}
exports.NetworkError = NetworkError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0Vycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL25ldHdvcmtFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkNBQXdDO0FBRXhDOztHQUVHO0FBQ0gsa0JBQTBCLFNBQVEscUJBQVM7SUFDdkM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQWUsRUFBRSxVQUFrQyxFQUFFLFVBQWtCO1FBQy9FLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQVhELG9DQVdDIn0=