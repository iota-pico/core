"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("../error/coreError");
const jsonHelper_1 = require("./jsonHelper");
const stringHelper_1 = require("./stringHelper");
/**
 * Handle errors as gracefully as possible.
 */
class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    static format(err, includeStack) {
        if (err === null || err === undefined) {
            return "unknown error";
        }
        else if (coreError_1.CoreError.isError(err)) {
            let ret = err.format();
            if (includeStack && err.stack) {
                ret += `\r\nStack Trace`;
                const parts = err.stack.split("\n");
                parts.shift();
                ret += `\r\n${parts.join("\n")}`;
            }
            if (err.innerError) {
                if (includeStack && err.innerError.stack) {
                    ret += `\r\n\r\n-----------------------------------------------`;
                    ret += `\r\nInner Stack Trace\r\n`;
                    ret += err.innerError.stack;
                }
                else {
                    ret += `\r\nInner Error: ${err.innerError.message}\r\n`;
                }
            }
            return ret;
        }
        else if (err instanceof Error) {
            let ret = "";
            if (includeStack && err.stack) {
                ret += `\r\n${err.stack}`;
            }
            else {
                ret += err.message;
            }
            return ret;
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
