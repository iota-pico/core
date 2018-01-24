import { JsonHelper } from "./jsonHelper";
import { StringHelper } from "./stringHelper";

/**
 * Handle errors as gracefully as possible.
 */
export class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @returns Formatted version of the error object.
     */
    public static format(err: any): string {
        if (err === null || err === undefined) {
            return "unknown error";
        } else if (err instanceof Error) {
            return err.message;
        } else {
            if (StringHelper.isString(err)) {
                return <string>err;
            } else {
                return JsonHelper.stringify(err, undefined, "\t");
            }
        }
    }
}
