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
        } else if (err instanceof Error) {
            let ret = err.message;
            if (includeStack && err.stack) {
                ret += `\r\n${err.stack}`;
            }
            return ret;
        } else if (CoreError.isError(err)) {
            let ret = err.format();
            if (includeStack && err.stack) {
                ret += `\r\n${err.stack}`;
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
