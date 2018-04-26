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
     * @returns Formatted version of the error.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0RBQW1EO0FBQ25ELDBEQUF1RDtBQUV2RDs7R0FFRztBQUNILGVBQXVCLFNBQVEsS0FBSztJQWdCaEM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQWUsRUFBRSxVQUFrQyxFQUFFLFVBQWtCO1FBQy9FLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBUTtRQUMxQixPQUFPLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxZQUFZLElBQUksR0FBRyxDQUFDO0lBQ25ILENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNO1FBQ1QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1QjtRQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEIsR0FBRyxJQUFJLElBQUksQ0FBQzthQUNmO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixHQUFHLElBQUksS0FBSyxHQUFHLEtBQUssdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBaEVELDhCQWdFQyJ9