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
     * @param loggingObject The object to send all the logging to.
     * @returns A new instance of ConsoleLogger.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXJzL2NvbnNvbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdEQUFxRDtBQUNyRCx3REFBcUQ7QUFDckQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUd2RDs7R0FFRztBQUNILDRCQUE0QjtBQUM1QixNQUFhLGFBQWE7SUFJdEI7Ozs7T0FJRztJQUNILFlBQVksYUFBdUI7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLElBQUksT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxPQUFlLEVBQUUsR0FBRyxJQUFXO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxD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