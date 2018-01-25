import { JsonHelper } from "../helpers/jsonHelper";
import { IError } from "../interfaces/IError";

/**
 * A core implementation of an error.
 */
export class CoreError implements IError {
    /**
     * The message for the error.
     */
    public message: string;
    /**
     * Additional details about the error.
     */
    public additional?: { [id: string]: any };

    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     */
    constructor(message: string, additional?: { [id: string]: any }) {
        this.message = message;
        this.additional = additional ? additional : {};
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
            out += "\r\n";
            keys.forEach(key => {
                out += `\t${key}: ${JsonHelper.stringify(this.additional[key])}\r\n`;
            });
        }
        return out;
    }
}
