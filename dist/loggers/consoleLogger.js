Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("../helpers/arrayHelper");
const errorHelper_1 = require("../helpers/errorHelper");
const objectHelper_1 = require("../helpers/objectHelper");
const stringHelper_1 = require("../helpers/stringHelper");
/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
// tslint:disable:no-console
class ConsoleLogger {
    /**
     * Create and instance of the console logger.
     */
    constructor(loggingObject) {
        this._loggingObject = loggingObject || console;
    }
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message, ...args) {
        this._loggingObject.log("=".repeat(80));
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
        this._loggingObject.log("=".repeat(80));
    }
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message, ...args) {
        this._loggingObject.log(message);
        this.logArgs(this._loggingObject.log, args);
    }
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message, ...args) {
        this._loggingObject.info(message);
        this.logArgs(this._loggingObject.info, args);
    }
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message, ...args) {
        this._loggingObject.warn(message);
        this.logArgs(this._loggingObject.warn, args);
    }
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message, err, ...args) {
        this._loggingObject.error(message);
        if (!objectHelper_1.ObjectHelper.isEmpty(err)) {
            const lines = errorHelper_1.ErrorHelper.format(err, true).split("\n");
            lines.forEach(line => {
                this._loggingObject.error(`\t${line}`);
            });
        }
        this.logArgs(this._loggingObject.error, args);
    }
    /* @internal */
    logArgs(logMethod, args) {
        if (!arrayHelper_1.ArrayHelper.isEmpty(args)) {
            const indent = "\t";
            let output = "";
            args.forEach((arg, index) => {
                output += this.createItem(indent, "", arg);
                if (index < args.length - 1) {
                    output += `${indent}${"-".repeat(70)}\n`;
                }
            });
            logMethod(output);
        }
    }
    /* @internal */
    createItem(indent, key, item, singleItemLineBreak = "\n") {
        let output = "";
        if (arrayHelper_1.ArrayHelper.isArray(item)) {
            const newIndent = `${indent}\t`;
            if (stringHelper_1.StringHelper.isEmpty(key)) {
                output += `${indent}[\n`;
            }
            else {
                output += `${indent}${key}: [\n`;
            }
            item.forEach((element, index) => {
                output += this.createItem(newIndent, "", element, `${index < item.length - 1 ? "," : ""}\n`);
            });
            output += `${indent}]\n`;
        }
        else if (objectHelper_1.ObjectHelper.isObject(item)) {
            const obString = item.toString();
            if (obString === "[object Object]") {
                const newIndent = `${indent}\t`;
                if (stringHelper_1.StringHelper.isEmpty(key)) {
                    output += `${indent}{\n`;
                }
                else {
                    output += `${indent}${key}: {\n`;
                }
                const keys = Object.keys(item);
                keys.forEach((itemKey, index) => {
                    output += this.createItem(newIndent, itemKey, item[itemKey], `${index < keys.length - 1 ? "," : ""}\n`);
                });
                output += `${indent}}\n`;
            }
            else {
                output += this.createItem(indent, key, obString.replace(/\n/g, `\n${indent}`), singleItemLineBreak);
            }
        }
        else {
            if (stringHelper_1.StringHelper.isEmpty(key)) {
                output += `${indent}${objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
            else {
                output += `${indent}${key}: ${objectHelper_1.ObjectHelper.isEmpty(item) ? item : item.toString()}${singleItemLineBreak}`;
            }
        }
        return output;
    }
}
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJzL2NvbnNvbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdEQUFxRDtBQUNyRCx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUd2RDs7R0FFRztBQUNILDRCQUE0QjtBQUM1QjtJQUlJOztPQUVHO0lBQ0gsWUFBWSxhQUF1QjtRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsSUFBSSxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztRQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7UUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFD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