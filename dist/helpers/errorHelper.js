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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9lcnJvckhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDZDQUEwQztBQUMxQyxpREFBOEM7QUFFOUM7O0dBRUc7QUFDSDtJQUNJOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRLEVBQUUsWUFBcUI7UUFDaEQsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQztnQkFDekIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZCxHQUFHLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDckMsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxHQUFHLElBQUkseURBQXlELENBQUM7b0JBQ2pFLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQztvQkFDbkMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEdBQUcsSUFBSSxvQkFBb0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLE1BQU0sQ0FBQztnQkFDNUQsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDdkIsQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUE5Q0Qsa0NBOENDIn0=