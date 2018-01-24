"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
/**
 * A core implementation of an error.
 */
class CoreError {
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     */
    constructor(message, additional) {
        this.message = message;
        this.additional = additional ? additional : {};
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
        let out = this.message || "";
        const keys = Object.keys(this.additional);
        if (keys.length > 0) {
            out += "\r\n";
            keys.forEach(key => {
                out += `\t${index_1.JsonHelper.stringify(this.additional[key])}`;
            });
        }
        return out;
    }
}
exports.CoreError = CoreError;
