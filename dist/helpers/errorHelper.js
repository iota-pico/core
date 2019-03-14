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
        if (coreError_1.CoreError.isError(err)) {
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
        if (err instanceof Error) {
            let ret = "";
            if (includeStack && !objectHelper_1.ObjectHelper.isEmpty(err.stack)) {
                ret += err.stack;
            }
            else {
                ret += err.message;
            }
            return ret;
        }
        if (stringHelper_1.StringHelper.isString(err)) {
            return err;
        }
        return jsonHelper_1.JsonHelper.stringify(err, undefined, "\t");
    }
}
exports.ErrorHelper = ErrorHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9lcnJvckhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0RBQStDO0FBQy9DLDZDQUEwQztBQUMxQyxpREFBOEM7QUFDOUMsaURBQThDO0FBRTlDOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0lBQ3BCOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRLEVBQUUsWUFBcUI7UUFDaEQsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkMsT0FBTyxlQUFlLENBQUM7U0FDMUI7UUFDRCxJQUFJLHFCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixJQUFJLFlBQVksSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUMzQixHQUFHLElBQUksZUFBZSxDQUFDO2dCQUN2QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNkLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsQztZQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksWUFBWSxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0QsR0FBRyxJQUFJLHFEQUFxRCxDQUFDO29CQUM3RCxHQUFHLElBQUksdUJBQXVCLENBQUM7b0JBQy9CLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0gsR0FBRyxJQUFJLGtCQUFrQixHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDO2lCQUN2RDthQUNKO1lBRUQsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtZQUN0QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLFlBQVksSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEQsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0gsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDdEI7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBRUQsSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQ0QsT0FBTyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSjtBQS9DRCxrQ0ErQ0MifQ==