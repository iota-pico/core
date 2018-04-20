Object.defineProperty(exports, "__esModule", { value: true });
const jsonHelper_1 = require("../helpers/jsonHelper");
const stringHelper_1 = require("../helpers/stringHelper");
/**
 * A core implementation of an error.
 */
class CoreError extends Error {
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message);
        this.additional = additional ? additional : {};
        this.innerError = innerError;
        this.domain = "Core";
    }
    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    static isError(obj) {
        return obj !== undefined && obj !== null && typeof obj === "object" && "message" in obj && "additional" in obj;
    }
    /**
     * Format the error to a readable version.
     */
    format() {
        let out = "";
        if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
            out += `${this.domain}: `;
        }
        if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
            out += `${this.message}`;
        }
        const keys = Object.keys(this.additional);
        if (keys.length > 0) {
            if (out.length > 0) {
                out += "\n";
            }
            keys.forEach(key => {
                out += `\t${key}: ${jsonHelper_1.JsonHelper.stringify(this.additional[key])}\n`;
            });
        }
        return out;
    }
}
exports.CoreError = CoreError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0RBQW1EO0FBQ25ELDBEQUF1RDtBQUV2RDs7R0FFRztBQUNILGVBQXVCLFNBQVEsS0FBSztJQWdCaEM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQWUsRUFBRSxVQUFrQyxFQUFFLFVBQWtCO1FBQy9FLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBUTtRQUMxQixPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxZQUFZLElBQUksR0FBRyxDQUFDO0lBQ25ILENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU07UUFDVCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO1FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixHQUFHLElBQUksSUFBSSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLEdBQUcsSUFBSSxLQUFLLEdBQUcsS0FBSyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0NBQ0o7QUEvREQsOEJBK0RDIn0=