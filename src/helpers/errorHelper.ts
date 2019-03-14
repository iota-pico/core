import { CoreError } from "../error/coreError";
import { JsonHelper } from "./jsonHelper";
import { ObjectHelper } from "./objectHelper";
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
        }
        if (CoreError.isError(err)) {
            let ret = err.format();
            if (includeStack && err.stack) {
                ret += `\nStack Trace`;
                const parts = err.stack.split("\n");
                parts.shift();
                ret += `\n${parts.join("\n")}`;
            }

            if (!ObjectHelper.isEmpty(err.innerError)) {
                if (includeStack && !ObjectHelper.isEmpty(err.innerError.stack)) {
                    ret += `\n\n-----------------------------------------------`;
                    ret += `\nInner Stack Trace\n`;
                    ret += err.innerError.stack;
                } else {
                    ret += `\nInner Error: ${err.innerError.message}\n`;
                }
            }

            return ret;
        }
        if (err instanceof Error) {
            let ret = "";
            if (includeStack && !ObjectHelper.isEmpty(err.stack)) {
                ret += err.stack;
            } else {
                ret += err.message;
            }
            return ret;
        }

        if (StringHelper.isString(err)) {
            return err;
        }
        return JsonHelper.stringify(err, undefined, "\t");
    }
}
