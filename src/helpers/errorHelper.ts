import { CoreError } from "../error/coreError";
import { JsonHelper } from "./jsonHelper";
import { StringHelper } from "./stringHelper";

/**
 * Handle errors as gracefully as possible.
 */
export class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    public static format(err: any, includeStack: boolean): string {
        if (err === null || err === undefined) {
            return "unknown error";
        } else if (CoreError.isError(err)) {
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
                } else {
                    ret += `\r\nInner Error: ${err.innerError.message}\r\n`;
                }
            }

            return ret;
        } else if (err instanceof Error) {
            let ret = "";
            if (includeStack && err.stack) {
                ret += `\r\n${err.stack}`;
            } else {
                ret += err.message;
            }
            return ret;
        } else {
            if (StringHelper.isString(err)) {
                return err;
            } else {
                return JsonHelper.stringify(err, undefined, "\t");
            }
        }
    }
}
