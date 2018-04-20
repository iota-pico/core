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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9lcnJvckhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMsaURBQThDO0FBRTlDOztHQUVHO0FBQ0g7SUFDSTs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBUSxFQUFFLFlBQXFCO1FBQ2hELElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25DLE9BQU8sZUFBZSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsSUFBSSxZQUFZLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDM0IsR0FBRyxJQUFJLGVBQWUsQ0FBQztnQkFDdkIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZCxHQUFHLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDbEM7WUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLFlBQVksSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdELEdBQUcsSUFBSSxxREFBcUQsQ0FBQztvQkFDN0QsR0FBRyxJQUFJLHVCQUF1QixDQUFDO29CQUMvQixHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7aUJBQy9CO3FCQUFNO29CQUNILEdBQUcsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQztpQkFDdkQ7YUFDSjtZQUVELE9BQU8sR0FBRyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxZQUFZLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDZDthQUFNO1lBQ0gsSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxHQUFHLENBQUM7YUFDZDtpQkFBTTtnQkFDSCxPQUFPLHVCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckQ7U0FDSjtJQUNMLENBQUM7Q0FDSjtBQTlDRCxrQ0E4Q0MifQ==