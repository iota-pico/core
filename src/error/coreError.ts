import { JsonHelper } from "../helpers/jsonHelper";

/**
 * A core implementation of an error.
 */
export class CoreError extends Error {
    /**
     * Additional details about the error.
     */
    public additional?: { [id: string]: any };

    /**
     * The inner error if there was one.
     */
    public innerError?: Error;

    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: { [id: string]: any }, innerError?: Error) {
        super(message);
        this.additional = additional ? additional : {};
        this.innerError = innerError;
    }

    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    public static isError(obj: any): obj is CoreError {
        return obj !== undefined && obj !== null && typeof obj === "object" && "message" in obj && "additional" in obj;
    }

    /**
     * Format the error to a readable version.
     */
    public format(): string {
        let out = this.message || "";

        const keys = Object.keys(this.additional);
        if (keys.length > 0) {
            if (out.length > 0) {
                out += "\n";
            }
            keys.forEach(key => {
                out += `\t${key}: ${JsonHelper.stringify(this.additional[key])}\n`;
            });
        }

        return out;
    }
}
