Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("../error/coreError");
const jsonHelper_1 = require("./jsonHelper");
const objectHelper_1 = require("./objectHelper");
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
                ret += `\nStack Trace`;
                const parts = err.stack.split("\n");
                parts.shift();
                ret += `\n${parts.join("\n")}`;
            }
            if (!objectHelper_1.ObjectHelper.isEmpty(err.innerError)) {
                if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.innerError.stack)) {
                    ret += `\n\n-----------------------------------------------`;
                    ret += `\nInner Stack Trace\n`;
                    ret += err.innerError.stack;
                }
                else {
                    ret += `\nInner Error: ${err.innerError.message}\n`;
                }
            }
            return ret;
        }
        else if (err instanceof Error) {
            let ret = "";
            if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.stack)) {
                ret += err.stack;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9lcnJvckhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMsaURBQThDO0FBRTlDOztHQUVHO0FBQ0g7SUFDSTs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBUSxFQUFFLFlBQXFCO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMzQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLElBQUksZUFBZSxDQUFDO2dCQUN2QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNkLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsR0FBRyxJQUFJLHFEQUFxRCxDQUFDO29CQUM3RCxHQUFHLElBQUksdUJBQXVCLENBQUM7b0JBQy9CLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDaEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixHQUFHLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUM7Z0JBQ3hELENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztDQUNKO0FBOUNELGtDQThDQyJ9