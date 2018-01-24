"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonHelper_1 = require("./jsonHelper");
const stringHelper_1 = require("./stringHelper");
/**
 * Handle errors as gracefully as possible.
 */
class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @returns Formatted version of the error object.
     */
    static format(err) {
        if (err === null || err === undefined) {
            return "unknown error";
        }
        else if (err instanceof Error) {
            return err.message;
        }
        else {
            if (stringHelper_1.StringHelper.isString(err)) {
                return err;
            }
            else {
                return jsonHelper_1.JsonHelper.stringify(err, undefined, "\t");
            }
        }
    }
}
exports.ErrorHelper = ErrorHelper;
