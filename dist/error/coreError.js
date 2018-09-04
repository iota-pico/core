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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0RBQW1EO0FBQ25ELDBEQUF1RDtBQUV2RDs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEtBQUs7SUFnQmhDOzs7OztPQUtHO0lBQ0gsWUFBWSxPQUFlLEVBQUUsVUFBa0MsRUFBRSxVQUFrQjtRQUMvRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVE7UUFDMUIsT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLFNBQVMsSUFBSSxHQUFHLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQztJQUNuSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNULElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLEdBQUcsSUFBSSxJQUFJLENBQUM7YUFDZjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWhFRCw4QkFnRUMifQ==